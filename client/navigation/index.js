import { useEffect, useState } from "react";
import SplashScreen from "../screens/SplashScreen";
import AuthStack from "./AuthStack";
import MainNavigator from "./MainNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../store/authSlice";

const RootNavigator = () => {
  const [stack, setStack] = useState(<SplashScreen />)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await AsyncStorage.getItem("user");
      const token = await AsyncStorage.getItem("token");
      if (!user || !token) {
        return setStack(<AuthStack />)
      }
      dispatch(setLogin({ user, token }));
      return setStack(<MainNavigator />);
    }
    fetchUserData();
  }, [])

  return (
    <>
      {isAuthenticated ? <MainNavigator /> : stack}
    </>
  )
}

export default RootNavigator;