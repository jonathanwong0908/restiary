import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Card from './Card'
import { COLORS, SIZES } from '../constants/theme';
import { useDispatch } from 'react-redux';
import { setRestaurantComment } from '../store/addRestaurantSlice';

const Comment = () => {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  return (
    <Card>
      <View style={styles.container}>
        <Text style={{ fontSize: SIZES.m, color: COLORS['neutral-100'] }}>Comment</Text>
        <TextInput
          style={styles.input}
          value={comment}
          onChangeText={text => {
            setComment(text);
            dispatch(setRestaurantComment(text));
          }}
        />
      </View>
    </Card>
  )
}

export default Comment;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%"
  },
  input: {
    justifyContent: 'center',
    padding: 15,
    marginTop: 15,
    width: "100%",
    borderRadius: 15,
    fontSize: SIZES.m,
    backgroundColor: COLORS['neutral-500'],
    color: COLORS['neutral-100']
  }
})