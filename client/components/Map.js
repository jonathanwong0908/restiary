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
    const lat = coordinates.latitude;
    const lng = coordinates.longitude;
    if (mode === "addEntry") {
      setMarkers([{ lat, lng }]);
      setRestaurantLocation({ lat, lng })
    }
  }

  function handleDragMarker(event) {
    const coordinates = event.nativeEvent.coordinate;
    const lat = coordinates.latitude;
    const lng = coordinates.longitude;
    if (mode === "addEntry" || mode === "editRestaurant") {
      setMarkers([{ lat, lng }]);
      setRestaurantLocation({ lat, lng })
    }
  }

  return (
    <MapView
      style={{ flex: 1, borderRadius: 18 }}
      onPress={handleMapPress}
    >
      {(mode === "addEntry" || mode === "editRestaurant" || mode === "viewRestaurant") && markers.length ? (
        <Marker
          draggable={mode === "addEntry" || mode === "editRestaurant"}
          coordinate={{ latitude: markers[0].lat, longitude: markers[0].lng }}
          onDragEnd={handleDragMarker}
        />)
        : <></>
      }
    </MapView>
  )
}

export default Map;