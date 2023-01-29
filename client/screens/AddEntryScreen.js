import { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { COLORS, GENERAL, SIZES } from '../constants/theme';
import { GOOGLE_MAPS_API_KEY } from "@env";

const AddEntryScreen = () => {
  const [currentRestaurant, setCurrentRestaurant] = useState("");

  return (
    <SafeAreaView style={GENERAL.mainContainer}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Where did you go?</Text>

      <GooglePlacesAutocomplete
        styles={{
          container: { flex: 0, width: "92.5%" },
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
  }
})