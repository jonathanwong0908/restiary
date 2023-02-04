import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from "@rneui/themed";
import { setLogout } from '../store/authSlice';
import { COLORS, GENERAL, SIZES } from '../constants/theme'

const SettingScreen = () => {
  const dispatch = useDispatch();

  async function handleLogout() {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    dispatch(setLogout());
  }

  return (
    <SafeAreaView style={GENERAL.mainContainer}>
      <Text style={GENERAL.title}>Setting</Text>
      <View style={{ width: "100%", marginTop: 15 }}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={{ color: COLORS['neutral-100'], fontSize: SIZES.m }}>Logout</Text>
          <Icon name="logout" type="material-community" color="#ce4257" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: COLORS['neutral-600']
  }
})