import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './UI/Card';
import { COLORS, SIZES } from '../constants/theme';
import { setNewRestaurantPrice } from '../store/addRestaurantSlice';

const Price = ({ mode, visitedRestaurantPrice = null, setVisitedRestaurantPrice = null }) => {
  const storedPrice = useSelector(state => state.addRestaurant.price);
  const [price, setPrice] = useState(() => {
    if (mode === "addEntry") {
      return storedPrice ? storedPrice : 0;
    }
    return visitedRestaurantPrice.toString();
  });

  const dispatch = useDispatch();

  function handleChangeText(price) {
    setPrice(price);
    if (mode === "addEntry") {
      dispatch(setNewRestaurantPrice(price));
    }
    if (mode === "editRestaurant") {
      setVisitedRestaurantPrice(price);
    }
  }

  return (
    <Card>
      <View style={styles.container}>
        <Text style={{ fontSize: SIZES.m, color: COLORS['neutral-100'] }}>Price</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={price}
          onChangeText={handleChangeText}
        />
      </View>
    </Card>
  )
}

export default Price;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  input: {
    fontSize: SIZES.m,
    padding: 10,
    width: "25%",
    textAlign: "right",
    borderRadius: 15,
    backgroundColor: COLORS['neutral-500'],
    color: COLORS['neutral-100']
  }
})