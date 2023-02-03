import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditEntryScreen from "../screens/EditEntryScreen";
import EntriesScreen from "../screens/EntriesScreen";
import RestaurantEntryScreen from "../screens/RestaurantEntryScreen";

const Stack = createNativeStackNavigator();

const EntriesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Entries" >
      <Stack.Screen name="Entries" component={EntriesScreen} />
      <Stack.Screen name="RestaurantEntry" component={RestaurantEntryScreen} />
      <Stack.Screen name="EditEntry" component={EditEntryScreen} />
    </Stack.Navigator>
  )
}

export default EntriesStack