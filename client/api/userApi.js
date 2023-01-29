import ApiManager from "./ApiManager";

export const userSignup = async data => {
  try {
    const result = await ApiManager("/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      data: data
    })
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const userLogin = async data => {
  try {
    const result = await ApiManager("auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      data: data
    })
    return result;
  } catch (error) {
    console.log(error);
  }
}