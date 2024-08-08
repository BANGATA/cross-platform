import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import userData from "./data.json";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://media.licdn.com/dms/image/v2/D5603AQEc3qXS89u8TQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708780105360?e=1728518400&v=beta&t=DMnhQLqAeWrB05k58l_OOlcD_jpHP0QKoub3_fiM7GQ",
          }}
          style={{ width: 100, height: 100 }}
        />
        <Text>Atanasius Raditya Herkristito</Text>
        <Text>00000044898</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://media.licdn.com/dms/image/D5603AQHiKyP90ULvhQ/profile-displayphoto-shrink_200_200/0/1690903939823?e=1728518400&v=beta&t=9Mh0CYRTOcm4ga2x0rq2QBNbSXfOGWZVF16JenhISNA",
          }}
          style={{ width: 100, height: 100 }}
        />
        <Text>Farion Tekkry</Text>
        <Text>00000056034</Text>
      </View>
      {userData.map((users) => {
        return (
          <View style={styles.container}>
            <Image
              source={{
                uri: users.photo_url,
              }}
              style={{ width: 100, height: 100 }}
            />
            <Text>{users.name}</Text>
            <Text>{users.email}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    display: "flex",
  },
});
