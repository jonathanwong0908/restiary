import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from "@rneui/themed";
import { COLORS, SIZES, GENERAL } from '../constants/theme';
import { useSelector } from 'react-redux';
import EntryContainer from '../components/EntryContainer';

const EntriesScreen = () => {
  const restaurants = useSelector(state => state.restaurant.restaurants);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={GENERAL.mainContainer}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.addEntryButton} onPress={() => navigation.navigate("AddEntry")}>
        <Text style={{ color: "white", fontSize: SIZES.m, fontWeight: "bold" }}>Add new entry</Text>
        <Icon name="plus" type="material-community" color={COLORS["neutral-100"]} />
      </TouchableOpacity>
      <FlatList
        style={{ width: "92.5%" }}
        contentContainerStyle={{ width: "100%", paddingBottom: 50 }}
        data={restaurants}
        renderItem={({ item }) => <EntryContainer restaurant={item} />}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  )
}

export default EntriesScreen;

const styles = StyleSheet.create({
  addEntryButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 15,
    width: "92.5%",
    borderRadius: 18,
    backgroundColor: COLORS['primary-500']
  }
})