import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectLocationScreen from "../screens/SelectLocationScreen";
import AddDetailsScreen from "../screens/AddDetailsScreen";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const AddEntryStack = () => {
  const storedNewRestaurantName = useSelector(state => state.addRestaurant.name)

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Entries" >
      <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
      <Stack.Screen name="AddDetails" component={storedNewRestaurantName ? AddDetailsScreen : SelectLocationScreen} />
    </Stack.Navigator>
  )
}

export default AddEntryStack;