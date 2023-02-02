import { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';

const Map = ({ mode, restaurantLocation, setRestaurantLocation = null }) => {
  const storedNewRestaurantLocation = useSelector(state => state.addRestaurant.location);
  const [markers, setMarkers] = useState(() => {
    if (restaurantLocation) {
      return [{ lat: restaurantLocation.lat, lng: restaurantLocation.lng }]
    }
    return [];
  });

  useEffect(() => {
    if (!restaurantLocation) return;
    setMarkers([{ lat: restaurantLocation.lat, lng: restaurantLocation.lng }]);
  }, [restaurantLocation])

  useEffect(() => {
    if (!storedNewRestaurantLocation && mode === "addEntry") setMarkers([]);
  }, [storedNewRestaurantLocation])

  function handleMapPress(event) {
    const coordinates = event.nativeEvent.coordinate;
    if (mode === "addEntry") {
      setMarkers([{ lat: coordinates.latitude, lng: coordinates.longitude }]);
      setRestaurantLocation({ lat: coordinates.latitude, lng: coordinates.longitude });
    }
  }

  return (
    <MapView
      style={{ flex: 1, borderRadius: 18 }}
      onPress={handleMapPress}
    >
      {mode === "addEntry" && markers.length ? (
        <Marker
          coordinate={{ latitude: markers[0].lat, longitude: markers[0].lng }}
          draggable
        />)
        : <></>
      }
      {mode === "editViewRestaurant" && markers.length ? (
        <Marker
          coordinate={{ latitude: markers[0].lat, longitude: markers[0].lng }}
          draggable
        />)
        : <></>
      }
    </MapView>
  )
}

export default Map;