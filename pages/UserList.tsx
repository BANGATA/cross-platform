import { ScrollView, View, Image, Text } from "react-native";
import styles from "../App.styles";
import userData from "../data.json";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useEffect } from "react";

const UserList = () => {

  const getAnimationDelay = (index) => {
    return (index * 100) % 500;
  };

  const useEntranceAnimation = (index) => {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(100);

    const animatedStyle = useAnimatedStyle(() => ({
      opacity: interpolate(opacity.value, [0, 1], [0, 1], Extrapolation.CLAMP),
      transform: [{ translateY: translateY.value }],
    }));

    const animateEntrance = () => {
      const delay = getAnimationDelay(index);

      setTimeout(() => {
        opacity.value = withTiming(1, { duration: 500 });
        translateY.value = withTiming(0, {
          duration: 500,
        });
      }, delay);
    };

    return { animatedStyle, animateEntrance };
  };

  return (
    <ScrollView>
      {userData.map((user, index) => {
        const { animatedStyle, animateEntrance } = useEntranceAnimation(index);

        useEffect(() => {
          animateEntrance();
        }, [animateEntrance]);

        return (
          <View style={styles.userList} key={user.name}>
            <Animated.View style={[styles.card, animatedStyle]}>
              <Image
                source={{
                  uri: user.photo_url,
                }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.boldText}>{user.name}</Text>
                <Text>{user.email}</Text>
              </View>
            </Animated.View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default UserList;
