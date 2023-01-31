import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectLocationScreen from "../screens/SelectLocationScreen";
import AddDetailsScreen from "../screens/AddDetailsScreen";

const Stack = createNativeStackNavigator();

const AddEntryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Entries" >
      <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
      <Stack.Screen name="AddDetails" component={AddDetailsScreen} />
    </Stack.Navigator>
  )
}

export default AddEntryStack;