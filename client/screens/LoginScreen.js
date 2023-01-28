import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthForm from '../components/AuthForm';

const LoginScreen = () => {
  return (
    <AuthForm screen="login" />
  )
}

export default LoginScreen

const styles = StyleSheet.create({

})