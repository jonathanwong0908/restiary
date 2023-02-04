import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Calendar } from "react-native-calendars";
import { useSelector } from 'react-redux';
import EntryContainer from '../components/EntryContainer';
import Card from '../components/UI/Card';
import { CALENDAR_THEME, COLORS, GENERAL, SIZES } from '../constants/theme';

const CalendarScreen = () => {
  const restaurants = useSelector(state => state.restaurant.restaurants);

  const [currentSelectedYear, setCurrentSelectedYear] = useState((new Date()).getFullYear());
  const [currentSelectedMonth, setCurrentSelectedMonth] = useState(((new Date()).getMonth() + 1));
  const [markedDates, setMarkedDates] = useState(() => {
    return getMarkedDates(restaurants);
  })
  const [currentRestaurants, setCurrentRestaurants] = useState(() => {
    return getRestaurantByYearMonth(currentSelectedYear, currentSelectedMonth, restaurants);
  })

  useEffect(() => {
    const newRestaurants = getRestaurantByYearMonth(currentSelectedYear, currentSelectedMonth, restaurants);
    setCurrentRestaurants(newRestaurants);
  }, [currentSelectedMonth, currentSelectedYear, restaurants]);

  useEffect(() => {
    const newMarkedDates = getMarkedDates(restaurants);
    setMarkedDates(newMarkedDates);
  }, [restaurants]);

  const maxDate = formatDate(new Date());

  function handleArrowLeftPress(subtractMonth) {
    subtractMonth();
    if (currentSelectedMonth === 1) {
      setCurrentSelectedMonth(12);
      setCurrentSelectedYear(prevYear => prevYear - 1);
      return;
    };
    setCurrentSelectedMonth(prevMonth => prevMonth - 1);
  }

  function handleArrowRightPress(addMonth) {
    addMonth();
    if (currentSelectedMonth === 12) {
      setCurrentSelectedMonth(1);
      setCurrentSelectedYear(prevYear => prevYear + 1);
      return
    }
    setCurrentSelectedMonth(prevMonth => prevMonth + 1);
  }

  return (
    <SafeAreaView style={GENERAL.mainContainer}>
      <View style={styles.calendarContainer}>
        <Calendar
          maxDate={maxDate}
          markedDates={markedDates}
          onPressArrowLeft={handleArrowLeftPress}
          onPressArrowRight={handleArrowRightPress}
          style={{ borderRadius: 15, height: 325, backgroundColor: COLORS['neutral-600'] }}
          theme={CALENDAR_THEME}
        />
      </View>
      <View style={{ width: "100%", marginTop: 20, alignItems: "center" }}>
        {currentRestaurants.length ?
          <FlatList
            style={{ width: "92.5%" }}
            contentContainerStyle={{ width: "100%", paddingBottom: 370 }}
            data={currentRestaurants}
            renderItem={({ item }) => <EntryContainer restaurant={item} origin="calendar" />}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
          /> :
          <Card>
            <Text style={{ color: COLORS['neutral-100'], fontSize: SIZES.m }}>No entries for this month</Text>
          </Card>}
      </View>
    </SafeAreaView>
  )
}

export default CalendarScreen;

function formatDate(date) {
  const year = date.getFullYear();
  let month = (date.getMonth()) + 1;
  let day = date.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
}

function getMarkedDates(restaurants) {
  if (restaurants.length === 0) return;
  let dates = {};
  restaurants.forEach(restaurant => {
    const date = formatDate(new Date(restaurant.visitedDate));
    if (!dates[date]) {
      dates[date] = { marked: true }
    }
  })
  return dates;
}

function getRestaurantByYearMonth(year, month, restaurants) {
  const restaurantByMonth = [];
  restaurants.forEach(restaurant => {
    const visitedDate = new Date(restaurant.visitedDate);
    const visitedMonth = visitedDate.getMonth() + 1;
    const visitedYear = visitedDate.getFullYear();
    if (visitedMonth === month && visitedYear === year) {
      restaurantByMonth.push(restaurant);
    }
  })
  return restaurantByMonth;
}

const styles = StyleSheet.create({
  calendarContainer: {
    marginVertical: 15,
    width: "92.5%",
    height: 300,
  }
})