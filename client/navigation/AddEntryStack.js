import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddEntryScreen from "../screens/AddEntryScreen";

const Stack = createNativeStackNavigator();

const AddEntryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Entries" >
      <Stack.Screen name="Entries" component={AddEntryScreen} />
    </Stack.Navigator>
  )
}

export default AddEntryStack;