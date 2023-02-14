import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from "react-native-modal";
import * as ImagePicker from "expo-image-picker";
import { COLORS, GENERAL, SIZES } from '../constants/theme';
import { setNewRestaurantPhoto } from '../store/addRestaurantSlice';
import TouchableCard from "./UI/TouchableCard";

const AddPhoto = ({ mode, visitedRestaurantPhotos = null, setVisitedRestaurantPhotos = null }) => {
  const storedPhotos = useSelector(state => state.addRestaurant.photo);

  const [images, setImages] = useState(() => {
    if (mode === "addEntry") {
      return storedPhotos ? storedPhotos : [];
    }

    if (mode === "editRestaurant") {
      return visitedRestaurantPhotos ? visitedRestaurantPhotos : [];
    }
    return [];
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  async function pickImage() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      })

      if (result.canceled) return;
      const imageUri = result.assets[0].uri;
      setImages(prevImages => [...prevImages, imageUri]);
      if (mode === "addEntry") {
        dispatch(setNewRestaurantPhoto(imageUri));
      }
      if (mode === "editRestaurant") {
        setVisitedRestaurantPhotos(imageUri);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function deleteImage(imageUri) {
    const newImages = images.length <= 1 ? [] : images => images.filter(image => image !== imageUri);
    setImages(newImages)
    if (mode === "addEntry") {
      dispatch(setNewRestaurantPhoto(newImages));
    }
    if (mode === "editRestaurant") {
      setVisitedRestaurantPhotos(newImages)
    }
    setSelectedImage(null);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <TouchableCard onPress={pickImage}>
        <Text style={{ fontSize: SIZES.m, color: COLORS['neutral-100'] }}>Tap to add photo</Text>
      </TouchableCard>

      {images.length > 0 ? images.map(image => (
        <TouchableOpacity key={image} onPress={() => {
          setModalVisible(true);
          setSelectedImage(image);
        }}>
          <Image source={{ uri: image }} style={GENERAL.image} key={image} />
        </TouchableOpacity>
      ))
        : <></>
      }

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Button title="Delete" onPress={() => deleteImage(selectedImage)} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  )
}

export default AddPhoto;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: COLORS['neutral-700'],
    opacity: 0.8
  }
})