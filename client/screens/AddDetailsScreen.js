import { Text, StyleSheet, Button, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, GENERAL } from '../constants/theme';
import Price from '../components/Price';
import Rating from '../components/Rating';
import Comment from '../components/Comment';
import AddPhoto from '../components/AddPhoto';
import DatePicker from "../components/DatePicker";
import { addRestaurant } from '../api/restaurantApi';
import { resetAllNewRestaurantState } from "../store/addRestaurantSlice";
import { setRestaurants } from '../store/restaurantSlice';
import TextIconButton from '../components/UI/TextIconButton';

const AddDetailsScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const newRestaurantDetails = useSelector(state => state.addRestaurant);

  async function submitRestaurant() {
    const response = await addRestaurant(newRestaurantDetails);
    if (response.status == 200) {
      dispatch(resetAllNewRestaurantState());
      const restaurants = response.data;
      dispatch(setRestaurants(restaurants));
      navigation.navigate("EntriesStack");
    };
  }

  const MODE = "addEntry";

  return (
    <SafeAreaView style={GENERAL.mainContainer}>
      <View style={styles.backButtonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
      <ScrollView style={{ width: "100%", flex: 1 }} contentContainerStyle={{ alignItems: "center" }}>
        <Text style={styles.title}>Where did you go?</Text>
        <DatePicker mode={MODE} />
        <Price mode={MODE} />
        <Rating mode={MODE} />
        <Comment mode={MODE} />
        <AddPhoto mode={MODE} />

        <TextIconButton
          iconColor={COLORS['neutral-100']}
          backgroundColor={COLORS['primary-500']}
          text="Add entry"
          name="note-plus-outline"
          style={styles.addEntryButton}
          onPress={submitRestaurant}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddDetailsScreen;

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,
    fontSize: SIZES.l,
    fontWeight: "bold",
    color: COLORS['neutral-100']
  },
  backButtonContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingHorizontal: 16,
  },
  addEntryButton: {
    marginTop: 30,
    marginBottom: 40,
  },
})