import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restiary</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS['neutral-700']
  },
  title: {
    fontSize: 70,
    color: COLORS['primary-500']
  }
})