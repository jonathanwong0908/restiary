import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { KeyboardAvoidingView } from "react-native";
import { Icon } from "@rneui/themed";
import EntriesScreen from "../screens/EntriesScreen";
import SettingScreen from "../screens/SettingScreen";
import CollectionScreen from "../screens/CollectionScreen";
import CalendarScreen from "../screens/CalendarScreen";
import AddEntryScreen from "../screens/AddEntryScreen";

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
          <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Entries">
            <Tab.Screen
              name="Entries"
              component={EntriesScreen}
              options={{
                tabBarIcon: () => (<Icon name="book-marker-outline" type="material-community" />)
              }}
            />
            <Tab.Screen
              name="Collection"
              component={CollectionScreen}
              options={{
                tabBarIcon: () => (<Icon name="bookmark-box-multiple-outline" type="material-community" />)
              }}
            />
            <Tab.Screen
              name="Add entry"
              component={AddEntryScreen}
              options={{
                tabBarIcon: () => (<Icon name="plus" type="material-community" />)
              }}
            />
            <Tab.Screen
              name="Calendar"
              component={CalendarScreen}
              options={{
                tabBarIcon: () => (<Icon name="calendar-blank-outline" type="material-community" />)
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingScreen}
              options={{
                tabBarIcon: () => (<Icon name="dots-horizontal-circle-outline" type="material-community" />)
              }}
            />
          </Tab.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default MainNavigator;