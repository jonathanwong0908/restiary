import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps';

const Map = ({ lat, lng, mode }) => {
  return (
    <MapView
      style={{ flex: 1, borderRadius: 18 }}
      initialRegion={{
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04
      }}
    />
  )
}

export default Map

const styles = StyleSheet.create({})