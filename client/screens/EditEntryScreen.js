import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Button, ScrollView, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import Modal from "react-native-modal";
import DatePicker from '../components/DatePicker';
import Map from '../components/Map';
import Price from "../components/Price";
import Rating from "../components/Rating";
import Comment from "../components/Comment";
import AddPhoto from "../components/AddPhoto";
import { COLORS, GENERAL, SIZES } from '../constants/theme';
import { updateRestaurant, deleteRestaurant } from "../api/restaurantApi";
import { setRestaurants } from '../store/restaurantSlice';
import TextIconButton from '../components/UI/TextIconButton';

const EditEntryScreen = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const restaurant = route.params;
  const [restaurantName, setRestaurantName] = useState(restaurant.name);
  const [restaurantLocation, setRestaurantLocation] = useState(restaurant.location);
  const [date, setDate] = useState(restaurant.visitedDate);
  const [price, setPrice] = useState(restaurant.price);
  const [rating, setRating] = useState(restaurant.rating);
  const [comment, setComment] = useState(restaurant.comment);
  const [photos, setPhotos] = useState(restaurant.photos);

  const [isModalVisible, setModalVisible] = useState(false);

  const newRestaurantDetails = {
    id: restaurant._id,
    name: restaurantName,
    location: restaurantLocation,
    visitedDate: date,
    price: +price,
    rating,
    comment,
    photos
  }

  const MODE = "editRestaurant";

  async function handleUpdateRestaurant() {
    const response = await updateRestaurant(newRestaurantDetails);
    console.log(response);
    if (response.status == 200) {
      const restaurants = response.data;
      dispatch(setRestaurants(restaurants));
      navigation.navigate("Entries");
    }
  }

  async function handleDeleteRestaurant() {
    const response = await deleteRestaurant({ id: restaurant._id });
    if (response.status == 200) {
      const restaurants = response.data;
      dispatch(setRestaurants(restaurants));
      navigation.navigate("Entries");
    }
  }

  return (
    <SafeAreaView style={GENERAL.mainContainer}>
      <View style={styles.cancelButtonContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Save" onPress={handleUpdateRestaurant} />
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

        <TextIconButton
          name="delete-outline"
          iconColor={COLORS['neutral-100']}
          text="Delete Entry"
          backgroundColor="#ce4257"
          style={styles.deleteIcon}
          onPress={() => setModalVisible(true)}
        />

      </ScrollView>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Button title="Delete" onPress={handleDeleteRestaurant} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

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
  },
  deleteIcon: {
    marginVertical: 60
  },
  modal: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: COLORS['neutral-700'],
    opacity: 0.6
  }
})