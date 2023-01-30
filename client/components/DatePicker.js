import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";
import Card from "./Card";
import { SIZES } from '../constants/theme';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());

  function handleChangeDate(event, selectedDate) {
    const currentDate = selectedDate || date;
    setDate(currentDate);
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