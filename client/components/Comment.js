import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Card from './UI/Card'
import { COLORS, SIZES } from '../constants/theme';
import { useDispatch, useSelector } from 'react-redux';
import { setNewRestaurantComment } from '../store/addRestaurantSlice';

const Comment = ({ mode, visitedRestaurantComment = null, setVisitedRestaurantComment = null }) => {
  const storedComment = useSelector(state => state.addRestaurant.comment);
  const [comment, setComment] = useState(() => {
    if (mode === "addEntry") {
      return storedComment ? storedComment : "";
    }
    return visitedRestaurantComment;
  });

  const dispatch = useDispatch();

  function handleChangeComment(text) {
    setComment(text);
    if (mode === "addEntry") {
      dispatch(setNewRestaurantComment(text));
    }
    if (mode === "editRestaurant") {
      setVisitedRestaurantComment(text);
    }
  }

  return (
    <Card>
      <View style={styles.container}>
        <Text style={{ fontSize: SIZES.m, color: COLORS['neutral-100'] }}>Comment</Text>
        <TextInput
          style={styles.input}
          value={comment}
          onChangeText={text => handleChangeComment(text)}
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