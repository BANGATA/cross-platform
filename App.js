import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  PermissionsAndroid,
} from "react-native";
import { useState } from "react";
import Geolocation from "react-native-geolocation-service";

export default function App() {
  const [coords, setCoords] = useState(null);
  const hasLocationPermission = async () => {
    if (Platform.OS === "android" && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      console.log("Location permission denied by user.");
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      console.log("Location permission denied by user.");
    }

    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        setCoords(position.coords);
        console.log(position);
      },
      (error) => {
        console.error(`Code ${error.code}`, error.message);
        console.log(error);
      },
      {
        accuracy: {
          android: "high",
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
        forceLocationManager: true,
        showLocationDialog: true,
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text>Atanasius Raditya Herkristito - 0000044898</Text>
      <Button title="Get Geo Location" onPress={getLocation} />
      <Text>
        Longitude: {coords && coords.longitude ? coords.longitude : "-"}
      </Text>
      <Text>Latitude: {coords && coords.latitude ? coords.latitude : "-"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
