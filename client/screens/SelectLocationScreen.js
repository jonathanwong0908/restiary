import { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, GENERAL, SIZES } from '../constants/theme';
import { GOOGLE_MAPS_API_KEY } from "@env";
import Map from '../components/Map';
import { setNewRestaurantName, setNewRestaurantLocation } from '../store/addRestaurantSlice';
import TextIconButton from '../components/UI/TextIconButton';

const AddEntryScreen = () => {
  const storedName = useSelector(state => state.addRestaurant.name);
  const storedLocation = useSelector(state => state.addRestaurant.location);

  const [restaurantName, setRestaurantName] = useState(() => {
    return storedName ? storedName : "";
  });
  const [restaurantLocation, setRestaurantLocation] = useState(() => {
    return storedLocation ? storedLocation : null;
  });

  useEffect(() => {
    setRestaurantName(storedName);
  }, [storedName]);

  useEffect(() => {
    setRestaurantLocation(storedLocation);
  }, [storedLocation]);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  function goToAddDetailsPage() {
    if (!restaurantName || !restaurantLocation) return;
    dispatch(setNewRestaurantName(restaurantName));
    dispatch(setNewRestaurantLocation(restaurantLocation));
    navigation.navigate("AddDetails")
  }

  return (
    <SafeAreaView style={GENERAL.mainContainer}>
      {/* <StatusBar barStyle="light-content" /> */}
      <Text style={GENERAL.title}>Where did you go?</Text>

      <GooglePlacesAutocomplete
        disableScroll={true}
        styles={{
          container: { flex: 0, width: "92.5%", marginBottom: 15 },
          textInput: { borderRadius: 30, fontSize: SIZES.m, paddingHorizontal: 15 },
          listView: { borderRadius: 18 }
        }}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: "en",
          components: "country:hk"
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
        style={styles.input}
        placeholder="Restaurant name"
        value={restaurantName}
        onChangeText={text => setRestaurantName(text)}
      />

      <TextIconButton
        backgroundColor={COLORS['primary-500']}
        iconColor={COLORS['neutral-100']}
        name="arrow-right"
        text="Next"
        style={styles.nextButton}
        onPress={goToAddDetailsPage}
      />

    </SafeAreaView>
  )
}

export default AddEntryScreen

const styles = StyleSheet.create({
  mapContainer: {
    height: 350,
    width: "92.5%"
  },
  input: {
    width: "92.5%",
    padding: 15,
    marginVertical: 15,
    borderRadius: 25,
    fontSize: SIZES.m,
    backgroundColor: COLORS['neutral-100']
  },
  nextButton: {
    marginTop: 30,
    marginBottom: 40,
  },
})
