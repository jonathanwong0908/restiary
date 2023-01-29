import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from "@rneui/themed";
import { COLORS, SIZES, GENERAL } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';

const EntriesScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={GENERAL.mainContainer}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.addEntryButton} onPress={() => navigation.navigate("AddEntry")}>
        <Text style={{ color: "white", fontSize: SIZES.m, fontWeight: "bold" }}>Add new entry</Text>
        <Icon name="plus" type="material-community" color={COLORS["neutral-100"]} />
      </TouchableOpacity>
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
    marginTop: 15,
    width: "92.5%",
    borderRadius: 18,
    backgroundColor: COLORS['primary-500']
  }
})