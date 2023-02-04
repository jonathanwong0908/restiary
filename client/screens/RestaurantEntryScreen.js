import { Image, StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from "@rneui/themed";
import { GENERAL, COLORS, SIZES, RATING_ICONS } from '../constants/theme';
import Map from '../components/Map';
import TextIconButton from '../components/UI/TextIconButton';

const RestaurantEntryScreen = ({ route }) => {
  const navigation = useNavigation();

  const restaurant = route.params.restaurant;
  const origin = route.params.origin;
  const restaurantName = restaurant.name.split(",")[0];
  const icon = RATING_ICONS[restaurant.rating];
  const visitedDate = getFormattedDate(new Date(restaurant.visitedDate));
  const photos = restaurant.photos;

  function goToEditEntryScreen() {
    navigation.navigate("EditEntry", { restaurant, origin });
  }

  return (
    <SafeAreaView style={GENERAL.mainContainer}>
      <View style={styles.backButtonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.topContainer}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: COLORS['neutral-100'], marginRight: 10 }}>{restaurantName}</Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text style={{ fontSize: SIZES.m, color: COLORS['neutral-100'] }}>{visitedDate}</Text>
            <Text style={{ marginLeft: 50, fontSize: SIZES.m, color: COLORS['neutral-100'] }}>{`$${restaurant.price}`}</Text>
          </View>
        </View>
        <TextIconButton
          backgroundColor={COLORS['primary-500']}
          name="pencil-outline"
          text="Edit"
          iconColor={COLORS['neutral-100']}
          onPress={goToEditEntryScreen}
        />
      </View>
      <View style={styles.mapContainer}>
        <Map mode="viewRestaurant" restaurantLocation={restaurant.location} />
      </View>
      <ScrollView style={{ width: "92.5%%", marginTop: 35 }} contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.infoContainer}>
          <Icon name={icon} type="material-community" color={COLORS['primary-500']} size={65} />
          <View style={{ width: "78%", justifyContents: "flex-start", height: "90%" }}>
            <Text style={{ fontSize: SIZES.l, color: COLORS['neutral-100'], marginBottom: 3 }}>Comments: </Text>
            <Text style={{ fontSize: SIZES.m, color: COLORS['neutral-100'] }}>{restaurant.comment}</Text>
          </View>
        </View>
        {photos.length > 0 ? photos.map(imageUri => {
          return (
            <Image source={{ uri: imageUri }} style={GENERAL.image} key={imageUri} />
          )
        }) : <></>}
      </ScrollView>
    </SafeAreaView>
  )
}

export default RestaurantEntryScreen;

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function getFormattedDate(date) {
  const month = MONTHS[date.getMonth()];
  const day = (date.getDate());
  return `${day} ${month}`;
}

const styles = StyleSheet.create({
  mapContainer: {
    height: 200,
    width: "92.5%"
  },
  backButtonContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingHorizontal: 16,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    width: "92.5%",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 15,
    backgroundColor: COLORS['primary-500']
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: "15",
    backgroundColor: COLORS['neutral-600'],
    width: "100%"
  }
})

// edit whole state management