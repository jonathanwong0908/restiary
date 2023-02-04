import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalendarScreen from "../screens/CalendarScreen";
import EditEntryScreen from "../screens/EditEntryScreen";
import RestaurantEntryScreen from "../screens/RestaurantEntryScreen";

const Stack = createNativeStackNavigator();

const CalendarStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MainCalendar" >
      <Stack.Screen name="MainCalendar" component={CalendarScreen} />
      <Stack.Screen name="RestaurantEntry" component={RestaurantEntryScreen} />
      <Stack.Screen name="EditEntry" component={EditEntryScreen} />
    </Stack.Navigator>
  )
}

export default CalendarStack;