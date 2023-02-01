import { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import Card from "./Card";
import { setNewRestaurantDate } from '../store/addRestaurantSlice';
import { COLORS, SIZES } from '../constants/theme';

const DatePicker = ({ mode }) => {
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  useEffect(() => {
    if (mode === "addEntry") {
      const stringDate = date.toString()
      dispatch(setNewRestaurantDate(stringDate));
    }
  }, [])

  function handleChangeDate(event, selectedDate) {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    if (mode === "addEntry") {
      const stringDate = currentDate.toString();
      dispatch(setNewRestaurantDate(stringDate));
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