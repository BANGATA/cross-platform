import { ScrollView, View, TouchableOpacity, Image, Text } from "react-native";
import styles from "../App.styles";
import userData from "../data.json";

const UserList = ({ navigation }) => {
  return (
    <ScrollView>
      {userData.map((users) => {
        return (
          <View style={styles.userList} key={users.name}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Profile", { user: users })}
            >
              <Image
                source={{
                  uri: users.photo_url,
                }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.boldText}>{users.name}</Text>
                <Text>{users.email}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default UserList;
