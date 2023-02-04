import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from "@rneui/themed";
import TouchableCard from './UI/TouchableCard';
import { RATING_ICONS, COLORS, SIZES } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';

const EntryContainer = ({ restaurant }) => {
  const navigation = useNavigation();

  const restaurantName = restaurant.name.split(",")[0];
  const visitedDate = getFormattedDate(new Date(restaurant.visitedDate));
  const icon = RATING_ICONS[restaurant.rating];
  const photos = restaurant.photos;

  function handleRestaurantPress() {
    navigation.navigate("RestaurantEntry", restaurant);
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableCard onPress={handleRestaurantPress}>
        <View style={styles.infoContainer}>
          <View style={{ flexDirection: "row", width: "85%", justifyContent: "space-between" }}>
            <Icon
              name={icon}
              type="material-community"
              color={COLORS['primary-500']}
              size={65}
            />
            <View style={{ marginLeft: 15, width: "80%" }}>
              <Text style={styles.text}>{visitedDate}</Text>
              <Text style={styles.restaurantName}>{restaurantName}</Text>
              <Text style={styles.text}>{`$${restaurant.price}`}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={[styles.text, styles.comment]}>{restaurant.comment}</Text>
              </View>
            </View>
          </View>
          <View style={{ justifyContent: "flex-start", height: "100%" }}>
            <Icon
              name="arrow-right"
              type="material-community"
              color={COLORS['neutral-100']}
            />
          </View>
        </View>
        {photos.length ? photos.map(imageUri => {
          return (
            <Image source={{ uri: imageUri }} style={styles.image} key={imageUri} />
          )
        }) : <></>}
      </TouchableCard>
    </View>
  )
}

export default EntryContainer;

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function getFormattedDate(date) {
  const month = MONTHS[date.getMonth()];
  const day = (date.getDate());
  return `${day} ${month}`;
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 15
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  text: {
    marginBottom: 2,
    color: COLORS['neutral-100'],
    fontSize: SIZES.m
  },
  restaurantName: {
    color: COLORS['neutral-100'],
    fontSize: SIZES.xl,
    fontWeight: "bold",
    flexWrap: "wrap"
  },
  comment: {
    flex: 1,
    flexShrink: "wrap",
    marginTop: 15,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginTop: 30,
  }
});