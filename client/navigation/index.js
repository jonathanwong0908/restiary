import { useEffect, useState } from "react";
import SplashScreen from "../screens/SplashScreen";
import AuthStack from "./AuthStack";
import MainNavigator from "./MainNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../store/authSlice";
import { setRestaurants } from "../store/restaurantSlice";
import { getRestaurants } from "../api/restaurantApi";

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  const storedUser = useSelector(state => state.auth.user);
  const storedToken = useSelector(state => state.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      const user = await AsyncStorage.getItem("user");
      const token = await AsyncStorage.getItem("token");
      if (!user || !token) {
        return setIsLoading(false);
      }
      const response = await getRestaurants();
      const restaurants = response.data;
      dispatch(setRestaurants(restaurants));
      dispatch(setLogin({ user, token }));
      setIsLoading(false);
    }
    fetchUserData();
  }, []);

  if (isLoading) {
    return (<SplashScreen />)
  }

  return (
    <>
      {storedUser && storedToken ? <MainNavigator /> : <AuthStack />}
    </>
  )
}

export default RootNavigator;