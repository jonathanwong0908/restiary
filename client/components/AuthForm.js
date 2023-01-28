import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import { COLORS } from '../constants/theme';
import { userSignup } from '../api/userApi';

const AuthForm = ({ screen }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  async function handleSubmit() {
    if (!username.length || !password.length) return;
    const response = await userSignup({ username, password });
    console.log(response.data);
    if (response.status == 200) {
      navigation.navigate("Login");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ width: "100%", justifyContent: "center" }}>
        <Text style={styles.title}>{screen === "login" ? "Login" : "Signup"}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.authInput}
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={styles.authInput}
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ color: "white" }}>{screen === "login" ? "Login" : "Sign Up"}</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={{ color: "white" }}>{screen === "login" ? "Don't have an account yet? " : "Already have an account? "}</Text>
          <TouchableOpacity onPress={() => navigation.navigate(screen === "login" ? "Signup" : "Login")}>
            <Text style={{ color: COLORS['primary-500'], fontWeight: "bold" }}>{screen === "login" ? "Signup" : "Login"}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default AuthForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: COLORS['neutral-700'],
  },
  title: {
    alignSelf: "center",
    marginBottom: 40,
    fontWeight: "bold",
    fontSize: 40,
    color: COLORS['primary-500']
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 2
  },
  authInput: {
    width: "80%",
    padding: 15,
    marginBottom: 10,
    borderRadius: 25,
    backgroundColor: COLORS['neutral-100']
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
    padding: 15,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: COLORS['primary-500']
  }
})