import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { KeyboardAvoidingView } from "react-native";
import { Icon } from "@rneui/themed";
import { View, StyleSheet } from "react-native";
import SettingScreen from "../screens/SettingScreen";
import CollectionScreen from "../screens/CollectionScreen";
import CalendarScreen from "../screens/CalendarScreen";
import EntriesStack from "./EntriesStack";
import AddEntryStack from "./AddEntryStack";
import { COLORS } from "../constants/theme";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <Tab.Navigator
            initialRouteName="EntriesStack"
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: COLORS["neutral-100"],
              tabBarInactiveTintColor: COLORS["primary-300"],
              tabBarStyle: {
                padding: 5,
                backgroundColor: COLORS["primary-500"]
              }
            }}
          >
            <Tab.Screen
              name="EntriesStack"
              component={EntriesStack}
              options={{
                tabBarIcon: ({ color }) => (<Icon name="book-marker-outline" type="material-community" color={color} />),
                tabBarLabel: "Entries"
              }}
            />
            <Tab.Screen
              name="Collection"
              component={CollectionScreen}
              options={{
                tabBarIcon: ({ color }) => (<Icon name="bookmark-box-multiple-outline" type="material-community" color={color} />)
              }}
            />
            <Tab.Screen
              name="AddEntry"
              component={AddEntryStack}
              options={{
                tabBarIcon: () => (
                  <View style={styles.addIcon}>
                    <Icon name="plus" type="material-community" color={COLORS["primary-500"]} />
                  </View>
                ),
                tabBarLabel: ""
              }}
            />
            <Tab.Screen
              name="Calendar"
              component={CalendarScreen}
              options={{
                tabBarIcon: ({ color }) => (<Icon name="calendar-blank-outline" type="material-community" color={color} />)
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingScreen}
              options={{
                tabBarIcon: ({ color }) => (<Icon name="dots-horizontal-circle-outline" type="material-community" color={color} />)
              }}
            />
          </Tab.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  addIcon: {
    width: 60,
    height: 60,
    alignItems: "center",
    borderRadius: "50%",
    borderWidth: 4,
    borderColor: COLORS["primary-500"],
    justifyContent: "center",
    backgroundColor: "white",
  }
})

export default MainNavigator;
