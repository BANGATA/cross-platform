import { StyleSheet, View, Dimensions, Text } from "react-native";
import { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from "react-native-reanimated";

export default function App() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const [orientation, setOrientation] = useState("potrait");
  // const offset = useSharedValue(200);

  // const animatedStyles = useAnimatedStyle(() => ({
  //   transform: [
  //     orientation === "landscape"
  //       ? { translateX: offset.value }
  //       : { translateY: offset.value },
  //   ],
  // }));

  // useEffect(() => {
  //   offset.value = withRepeat(
  //     withTiming(-offset.value, { duration: 1500 }),
  //     -1,
  //     true
  //   );
  // }, []);

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

  return (
    <View style={styles.container}>
      <Text>Screen width: {screenWidth}</Text>
      <Text>Screen height: {screenHeight}</Text>
      <Text>Orientation: {orientation}</Text>
      {/*<Animated.View style={[styles.box, animatedStyles]} /> */}
    </View>
  );
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
