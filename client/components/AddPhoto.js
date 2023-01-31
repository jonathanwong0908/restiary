import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import Modal from "react-native-modal";
import { COLORS, SIZES } from '../constants/theme';
import TouchableCard from "./TouchableCard";

const AddPhoto = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  function toggleModal() {
    setModalVisible(!isModalVisible);
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    console.log(result);

    if (!result.canceled) {
      setImages(prevImages => [...prevImages, result.assets[0].uri]);
    }
  }

  const deleteImage = (imageUri) => {
    images.length <= 1 ? setImages([]) : setImages(images => images.filter(image => image !== imageUri));
    setModalVisible(false);
    setSelectedImage(null);
  }

  return (
    <View style={styles.container}>
      <TouchableCard onPress={pickImage}>
        <Text style={{ fontSize: SIZES.m, color: COLORS['neutral-100'] }}>Tap to add photo</Text>
      </TouchableCard>

      {images.length > 0 ? images.map(image => (
        <TouchableOpacity onPress={() => {
          toggleModal();
          setSelectedImage(image);
        }}>
          <Image source={{ uri: image }} style={styles.image} key={image} />
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
    opacity: 0.6
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginTop: 15
  }
})