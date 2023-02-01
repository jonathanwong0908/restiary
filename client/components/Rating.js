import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from "@rneui/themed";
import { setNewRestaurantRating } from '../store/addRestaurantSlice';
import { COLORS, SIZES, RATING_ICONS } from '../constants/theme';
import Card from './Card';

const Rating = () => {
  const storedRating = useSelector(state => state.addRestaurant.rating);
  const [selected, setSelected] = useState(() => {
    return storedRating ? storedRating : null;
  });

  const dispatch = useDispatch();

  return (
    <Card>
      <Text style={styles.text}>Rating</Text>
      <View style={styles.container}>
        {RATING_ICONS.map(icon => (
          <TouchableOpacity
            onPress={() => {
              setSelected(RATING_ICONS.indexOf(icon));
              dispatch(setNewRestaurantRating(RATING_ICONS.indexOf(icon)));
            }}
            key={icon}
          >
            <Icon
              name={icon}
              type="material-community"
              size={65}
              color={selected === RATING_ICONS.indexOf(icon) && COLORS['primary-500']}
            />
          </TouchableOpacity>
        ))}
      </View>
    </Card>
  )
}

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  text: {
    alignSelf: "flex-start",
    marginBottom: 10,
    fontSize: SIZES.m,
    color: COLORS['neutral-100']
  }
})