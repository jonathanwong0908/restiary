import { StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants/theme'

const TouchableCard = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

export default TouchableCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 18,
    backgroundColor: COLORS['neutral-600']
  }
})