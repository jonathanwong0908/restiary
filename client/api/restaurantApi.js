import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiManager from "./ApiManager";

export const addRestaurant = async data => {
  try {
    let token = await AsyncStorage.getItem("token");
    token = JSON.parse(token);
    const result = await ApiManager("/restaurant/addNewRestaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      data: data
    })
    return result;
  } catch (error) {
    console.log(error);
  }
}