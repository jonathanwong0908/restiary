import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';
import DatePicker from '../components/DatePicker';
import Map from '../components/Map';
import Price from "../components/Price";
import Rating from "../components/Rating";
import Comment from "../components/Comment";
import AddPhoto from "../components/AddPhoto";
import { COLORS, GENERAL, SIZES } from '../constants/theme';

const EditEntryScreen = ({ route }) => {
  const navigation = useNavigation();

  const restaurant = route.params;

  const [restaurantName, setRestaurantName] = useState(restaurant.name);
  const [restaurantLocation, setRestaurantLocation] = useState(restaurant.location);
  const [date, setDate] = useState(restaurant.visitedDate);
  const [price, setPrice] = useState(restaurant.price);
  const [rating, setRating] = useState(restaurant.rating);
  const [comment, setComment] = useState(restaurant.comment);
  const [photos, setPhotos] = useState(restaurant.photos);

  const newRestaurantDetails = {
    name: restaurantName,
    location: restaurantLocation,
    visitedDate: date,
    price,
    rating,
    comment,
    photo: photos
  }

  const MODE = "editRestaurant";

  return (
    <SafeAreaView style={GENERAL.mainContainer}>
      <View style={styles.cancelButtonContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Save" />
      </View>
      <View style={styles.mapContainer}>
        <Map mode={MODE} restaurantLocation={restaurantLocation} setRestaurantLocation={setRestaurantLocation} />
      </View>
      <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: "center" }}>
        <View style={{ width: "92.5%" }}>
          <TextInput
            style={styles.input}
            placeholder="Restaurant name"
            value={restaurantName}
            onChangeText={text => setRestaurantName(text)}
          />
        </View>

        <DatePicker mode={MODE} visitedDate={date} setVisitedDate={setDate} />
        <Price mode={MODE} visitedRestaurantPrice={price} setVisitedRestaurantPrice={setPrice} />
        <Rating mode={MODE} visitedRestaurantRating={rating} setVisitedRestaurantRating={setRating} />
        <Comment mode={MODE} visitedRestaurantComment={comment} setVisitedRestaurantComment={setComment} />
        <AddPhoto mode={MODE} visitedRestaurantPhotos={photos} setVisitedRestaurantPhotos={setPhotos} />

      </ScrollView>
    </SafeAreaView>
  )
}

export default EditEntryScreen;

const styles = StyleSheet.create({
  cancelButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
  },
  mapContainer: {
    marginTop: 15,
    height: 300,
    width: "92.5%"
  },
  input: {
    width: "100%",
    padding: 15,
    marginVertical: 15,
    borderRadius: 25,
    fontSize: SIZES.m,
    backgroundColor: COLORS['neutral-100']
  }
})