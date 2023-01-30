import { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Location from "expo-location";
import { COLORS, GENERAL, SIZES } from '../constants/theme';
import { GOOGLE_MAPS_API_KEY } from "@env";
import Map from '../components/Map';

const AddEntryScreen = () => {
  const [isLoadingCurrentLocation, setIsLoadingCurrentLocation] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("no permission")
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setCurrentLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
      setIsLoadingCurrentLocation(false);
    }
    getLocation();
    console.log(currentLocation);
  }, []);

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
          console.log(data.description, details.geometry.location);
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        placeholder="Search Restaurant"
      />

      <View style={styles.mapContainer}>
        {isLoadingCurrentLocation
          ? <Text>Loading</Text>
          : <Map
            lat={currentLocation.lat}
            lng={currentLocation.lng}
            mode="addEntry"
          />}
      </View>

      <Text style={{ color: "white", marginTop: 15, fontSize: SIZES.m }}>
        Can't find? Tap on map to create a draggable pin
      </Text>

      <TextInput
        style={{
          width: "92.5%"
        }}
      />
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
    height: "50%",
    width: "92.5%"
  }
})

// get location
// set map location
// onpress add marker(draggable)
