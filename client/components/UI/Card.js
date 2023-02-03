import { StyleSheet, View } from 'react-native'
import { COLORS } from '../../constants/theme'

const Card = ({ children, onPress }) => {
  return (
    <View style={styles.container} onPress={onPress}>
      {children}
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    padding: 15,
    width: "92.5%",
    borderRadius: 18,
    backgroundColor: COLORS['neutral-600']
  }
})