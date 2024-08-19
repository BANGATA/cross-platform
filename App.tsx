import { StyleSheet, View, Text, Button } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./utils/redux/store";
import React from "react";
import { decrement, increment } from "./utils/redux/slice/counter.slice";

const Counter = () => {
  const currCount = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <View style={styles.container}>
      <Text>Atanasius Raditya Herkristito - 0000044898</Text>
      <Text>Current count: {currCount}</Text>
      <Button title="INCREMENT" onPress={handleIncrement} />
      <Button title="DECREMENT" onPress={handleDecrement} />
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
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
