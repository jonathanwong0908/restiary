import { TouchableOpacity, Text, StyleSheet, Button, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, GENERAL } from '../constants/theme';
import Price from '../components/Price';
import Rating from '../components/Rating';
import Comment from '../components/Comment';
import AddPhoto from '../components/AddPhoto';
import DatePicker from "../components/DatePicker";

const AddDetailsScreen = ({ route }) => {
  const navigation = useNavigation();

  const restaurantLocation = route.params.restaurantLocation;
  const restaurantName = route.params.restaurantName;

  return (
    <SafeAreaView style={GENERAL.mainContainer}>
      <View style={styles.backButtonContainer}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
      <ScrollView style={{ width: "100%", flex: 1 }} contentContainerStyle={{ alignItems: "center" }}>
        <Text style={styles.title}>Where did you go?</Text>
        <DatePicker mode="addEntry" />
        <Price />
        <Rating mode="addEntry" />
        <Comment />
        <AddPhoto />

        <TouchableOpacity style={styles.addEntryButton}>
          <Text style={{ color: COLORS['neutral-100'], fontSize: SIZES.m, marginRight: 15 }}>Add entry</Text>
          <Icon name="note-plus-outline" type="material-community" color={COLORS['neutral-100']} />
        </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 40,
    padding: 15,
    borderRadius: 15,
    backgroundColor: COLORS['primary-500']
  },
})