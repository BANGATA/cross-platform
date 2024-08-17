import { addDoc, collection } from "firebase/firestore";
import { StyleSheet, View, Text, Button, Platform } from "react-native";
import { db } from "./utils/firebaseConfig";

export default function App() {
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Vincentius",
        last: "Kurniawan",
        born: "2024",
      });
      if (Platform.OS === "android") {
        console.log("Document written from phone with ID: ", docRef.id);
      } else {
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (err) {
      console.error("Error occured ", err);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Atanasius Raditya Herkristito - 0000044898</Text>
      <Button title="Add User" onPress={addData} />
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
