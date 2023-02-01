import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import Card from './Card';
import { COLORS, SIZES } from '../constants/theme';
import { useDispatch, useSelector } from 'react-redux';
import { setNewRestaurantPrice } from '../store/addRestaurantSlice';

const Price = () => {
  const storedPrice = useSelector(state => state.addRestaurant.price);
  const [price, setPrice] = useState(() => {
    return storedPrice ? storedPrice : 0;
  });

  const dispatch = useDispatch();

  return (
    <Card>
      <View style={styles.container}>
        <Text style={{ fontSize: SIZES.m, color: COLORS['neutral-100'] }}>Price</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={price}
          onChangeText={price => {
            setPrice(price);
            dispatch(setNewRestaurantPrice(price));
          }}
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