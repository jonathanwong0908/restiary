import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from "@rneui/themed";
import { setNewRestaurantRating } from '../store/addRestaurantSlice';
import { COLORS, SIZES, RATING_ICONS } from '../constants/theme';
import Card from './UI/Card';

const Rating = ({ mode, visitedRestaurantRating = null, setVisitedRestaurantRating = null }) => {
  const storedRating = useSelector(state => state.addRestaurant.rating);
  const [selected, setSelected] = useState(() => {
    if (mode === "addEntry") {
      return storedRating ? storedRating : null;
    }
    return visitedRestaurantRating;
  });

  const dispatch = useDispatch();

  function handleChangeRating(icon) {
    const index = RATING_ICONS.indexOf(icon);
    setSelected(index);
    if (mode === "addEntry") {
      dispatch(setNewRestaurantRating(index));
    }
    if (mode === "editRestaurant") {
      setVisitedRestaurantRating(index);
    }
  }

  return (
    <Card>
      <Text style={styles.text}>Rating</Text>
      <View style={styles.container}>
        {RATING_ICONS.map(icon => (
          <TouchableOpacity
            onPress={() => handleChangeRating(icon)}
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