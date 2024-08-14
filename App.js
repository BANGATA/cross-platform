import { StyleSheet, View, Dimensions, Text } from "react-native";
import { useEffect, useState } from "react";
import Animated, {
  SlideInLeft,
  SlideInRight,
  SlideInDown,
} from "react-native-reanimated";
import UserList from "./pages/UserList";

export default function App() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const [orientation, setOrientation] = useState("potrait");

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get("window");
      if (width < height) {
        setOrientation("potrait");
      } else {
        setOrientation("landscape");
      }
    };
    Dimensions.addEventListener("change", updateOrientation);
  });

  return <UserList />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: "#b58df1",
    borderRadius: 20,
  },
});
