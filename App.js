import { StyleSheet, View, Text } from "react-native";
import Input from "./ui-kit/Input";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState(0);

  const handleChangeName = (value) => {
    setName(value);
  };

  const handleChangeNIM = (value) => {
    setNim(value);
  };

  return (
    <View style={styles.container}>
      <Text>
        {name ? name : "Tukul"} - {nim ? nim : 12345}
      </Text>
      <Input
        value={name}
        placeholder="Input your name"
        label="Name"
        onChangeText={handleChangeName}
      />
      <Input
        value={nim}
        placeholder="Input your NIM"
        label="NIM"
        onChangeText={handleChangeNIM}
        keyboardType="numeric"
      />
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
