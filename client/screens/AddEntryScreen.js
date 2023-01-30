import { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from '@react-navigation/native';
import { COLORS, GENERAL, SIZES } from '../constants/theme';
import { GOOGLE_MAPS_API_KEY } from "@env";
import Map from '../components/Map';
import DatePicker from '../components/DatePicker';

const AddEntryScreen = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState(null);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={GENERAL.mainContainer}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Where did you go?</Text>

      <GooglePlacesAutocomplete
        styles={{
          container: { flex: 0, width: "92.5%", marginBottom: 15 },
          textInput: { borderRadius: 30, fontSize: SIZES.m, paddingHorizontal: 15 }
        }}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: "en"
        }}
        onPress={(data, details = null) => {
          setRestaurantName(data.description);
          setRestaurantLocation({
            lat: details.geometry.location.lat,
            lng: details.geometry.location.lng
          })
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        placeholder="Search Restaurant"
      />

      <View style={styles.mapContainer}>
        <Map
          mode="addEntry"
          restaurantLocation={restaurantLocation}
          setRestaurantLocation={setRestaurantLocation}
        />
      </View>

      <Text style={{ color: "white", marginTop: 15, fontSize: SIZES.m }}>
        Can't find? Tap on map to create a draggable pin
      </Text>

      <TextInput
        style={styles.manualInput}
        placeholder="Restaurant name"
        value={restaurantName}
        onChangeText={text => setRestaurantName(text)}
      />

      <DatePicker />

    </SafeAreaView>
  )
}

export default AddEntryScreen

const styles = StyleSheet.create({
  title: {
    marginVertical: 15,
    fontSize: SIZES.l,
    fontWeight: "bold",
    color: COLORS['neutral-100']
  },
  mapContainer: {
    height: "40%",
    width: "92.5%"
  },
  manualInput: {
    width: "92.5%",
    padding: 15,
    marginTop: 15,
    borderRadius: 25,
    fontSize: SIZES.m,
    backgroundColor: COLORS['neutral-100']
  },
  nextIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: COLORS['primary-500'],
  }
})
