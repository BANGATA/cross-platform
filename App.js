import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  PermissionsAndroid,
  Image,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
const RNFS = require("react-native-fs");
export default function App() {
  const [uri, setUri] = useState("");
  const openImagePicker = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      },
      handleResponse
    );
  };

  const handleCameraLaunch = () => {
    launchCamera(
      {
        mediaType: "photo",
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      },
      handleResponse
    );
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message: "This app needs access to your camera to take photos.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission granted");
        handleCameraLaunch();
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const saveImage = async (uri, file_name) => {
    const destPath = `${RNFS.PicturesDirectoryPath}/${file_name}`;
    try {
      await RNFS.copyFile(uri, destPath);
      console.log("Success", "Image saved to gallery");
    } catch (error) {
      console.log("Error saving image:", error);
    }
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.error) {
      console.log("Image picker error: ", response.error);
    } else if (response.assets && response.assets.length > 0) {
      const imageUri = response.assets[0].uri;
      const imageName = response.assets[0].fileName;
      saveImage(imageUri, imageName);
      setUri(imageUri);
    } else {
      console.log("No assets found in the response");
    }
  };

  const saveFile = async () => {
    const path = RNFS.DownloadDirectoryPath + "/test.txt";
    RNFS.writeFile(path, "Lorem ipsum dolor sit amet", "utf8")
      .then((res) => {
        console.log("Success create file. Check your download folder");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Atanasius Raditya Herkristito - 0000044898</Text>
      <Button
        title="Open Camera"
        onPress={() => {
          if (Platform.OS === "android") {
            requestCameraPermission();
          } else {
            handleCameraLaunch();
          }
        }}
      />
      <Button title="Open Gallery" onPress={openImagePicker} />
      <Button title="Create File" onPress={saveFile} />
      {uri && (
        <Image source={{ uri: uri }} style={{ width: 200, height: 200 }} />
      )}
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
