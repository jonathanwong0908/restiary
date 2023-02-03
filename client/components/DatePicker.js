import { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import Card from "./UI/Card";
import { setNewRestaurantDate } from '../store/addRestaurantSlice';
import { COLORS, SIZES } from '../constants/theme';

const DatePicker = ({ mode, visitedDate = null, setVisitedDate = null }) => {
  const [date, setDate] = useState(() => {
    if (mode === "addEntry") {
      return new Date();
    }
    return new Date(visitedDate);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (mode === "addEntry") {
      const stringDate = date.toString()
      dispatch(setNewRestaurantDate(stringDate));
    }
  }, [])

  function handleChangeDate(event, selectedDate) {
    const currentDate = selectedDate || date;
    const stringDate = currentDate.toString();
    setDate(currentDate);
    if (mode === "addEntry") {
      dispatch(setNewRestaurantDate(stringDate));
    }
    if (mode === "editRestaurant") {
      setVisitedDate(stringDate);
    }
  }

  return (
    <Card>
      <View style={styles.container}>
        <Text style={{ color: "white", fontSize: SIZES.m }}>Visited on</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={handleChangeDate}
          textColor="white"
          themeVariant="dark"
          accentColor={COLORS['primary-500']}
          maximumDate={new Date()}
        />
      </View>
    </Card>
  )
}

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  }
})