import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EntriesScreen from "../screens/EntriesScreen";

const Stack = createNativeStackNavigator();

const EntriesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Entries" >
      <Stack.Screen name="Entries" component={EntriesScreen} />
    </Stack.Navigator>
  )
}

export default EntriesStack