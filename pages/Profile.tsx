import { Button, Text, View, Image } from "react-native";
import styles from "../App.styles";

const Profile = ({ navigation, route }) => {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={{
          uri: user.photo_url,
        }}
        style={styles.avatar}
      />
      <Text>{user.name}&apos;s Profile</Text>
      <Text>{user.email}</Text>
      <Button title="Go Back" onPress={() => navigation.navigate("UserList")} />
    </View>
  );
};

export default Profile;
