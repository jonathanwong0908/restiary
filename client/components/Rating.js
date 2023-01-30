import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from "@rneui/themed";
import Card from './Card';
import { useState } from 'react';
import { COLORS, SIZES } from '../constants/theme';
import { useDispatch } from 'react-redux';
import { setRestaurantRating } from '../store/addRestaurantSlice';

const ICONS = [
  "emoticon-cool-outline",
  "emoticon-happy-outline",
  "emoticon-neutral-outline",
  "emoticon-cry-outline",
  "emoticon-dead-outline"
];

const Rating = () => {
  const [selected, setSelected] = useState(null);

  const dispatch = useDispatch();

  return (
    <Card>
      <Text style={styles.text}>Rating</Text>
      <View style={styles.container}>
        {ICONS.map(icon => (
          <TouchableOpacity
            onPress={() => {
              setSelected(icon);
              dispatch(setRestaurantRating(ICONS.indexOf(icon)));
            }}
            key={icon}
          >
            <Icon
              name={icon}
              type="material-community"
              size={65}
              color={selected === icon && COLORS['primary-500']}
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