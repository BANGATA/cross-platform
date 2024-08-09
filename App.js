import { StyleSheet, View, TextInput } from "react-native";
import { Counter, Profile } from "./component";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleChangeName = (value) => {
    setName(value);
  };

  return (
    <View style={styles.container}>
      <Profile name={name} age={count} />
      <Counter
        value={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
      <TextInput
        onChange={(e) => handleChangeName(e.target.value)}
        value={name}
        placeholder="Input your name here"
        style={styles.input}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
