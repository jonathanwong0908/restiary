import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Map from '../components/Map';
import Card from "../components/UI/Card";
import TextIconButton from "../components/UI/TextIconButton";
import { GENERAL, SIZES, COLORS } from '../constants/theme';

const CollectionScreen = () => {
  const restaurants = useSelector(state => state.restaurant.restaurants);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={GENERAL.mainContainer}>
      <Text style={GENERAL.title}>Visited Restaurants</Text>
      <View style={styles.mapContainer}>
        <Map mode="viewAllRestaurants" />
      </View>
      <Card>
        <Text style={{ fontSize: SIZES.m, fontWeight: "bold", color: COLORS['neutral-100'] }}>Total restaurants visited</Text>
        <Text style={styles.restaurantCount}>{restaurants.length && restaurants.length}</Text>
      </Card>
      <TextIconButton
        iconColor={COLORS['neutral-100']}
        name="eye-outline"
        text="View entries"
        backgroundColor={COLORS['primary-500']}
        onPress={() => navigation.navigate("EntriesStack")}
        style={styles.navigationButton}
      />
    </SafeAreaView>
  )
}

export default CollectionScreen

const styles = StyleSheet.create({
  mapContainer: {
    marginBottom: 20,
    width: "92.5%",
    height: 425
  },
  restaurantCount: {
    marginTop: 15,
    fontSize: 50,
    fontWeight: "bold",
    color: COLORS['neutral-100']
  },
  navigationButton: {
    marginTop: 20
  }
})