import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiManager from "./ApiManager";

export const addRestaurant = async data => {
  try {
    let token = await AsyncStorage.getItem("token");
    token = JSON.parse(token);
    const response = await ApiManager("/restaurant/addNewRestaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      data: data
    })
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getRestaurants = async () => {
  try {
    let token = await AsyncStorage.getItem("token");
    token = JSON.parse(token);
    const response = await ApiManager("/restaurant/getRestaurants", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const updateRestaurant = async data => {
  try {
    let token = await AsyncStorage.getItem("token");
    token = JSON.parse(token);
    const response = await ApiManager("/restaurant/updateRestaurant", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data
    })
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const deleteRestaurant = async data => {
  try {
    let token = await AsyncStorage.getItem("token");
    token = JSON.parse(token);
    const response = await ApiManager("/restaurant/deleteRestaurant", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      data: data
    })
    return response;
  } catch (error) {
    console.log(error);
  }
}