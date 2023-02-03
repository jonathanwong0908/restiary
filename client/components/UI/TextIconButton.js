import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from "@rneui/themed";
import { COLORS, SIZES } from '../../constants/theme';

const TextIconButton = ({ iconColor, name, text, backgroundColor, style = null, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { ...style, backgroundColor }]} onPress={onPress}>
      <Text style={{ color: COLORS['neutral-100'], fontSize: SIZES.m, marginRight: 15 }}>{text}</Text>
      <Icon name={name} type="material-community" color={iconColor} />
    </TouchableOpacity>
  )
}

export default TextIconButton

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 15,
  }
})