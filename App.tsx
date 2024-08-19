import { StyleSheet, View, Text, Button } from "react-native";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "./utils/redux/store";
import React from "react";
import { fetchPostsCount } from "./utils/redux/slice/counter.slice";
import { useAppDispatch } from "./utils/hooks";

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.counter.count);
  const status = useSelector((state: RootState) => state.counter.status);
  const error = useSelector((state: RootState) => state.counter.error);

  const handleFetchPosts = () => {
    dispatch(fetchPostsCount());
  };

  return (
    <View style={styles.container}>
      <Text>Atanasius Raditya Herkristito - 0000044898</Text>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      <Text>Current count: {count}</Text>
      <Button title="Fetch Data" onPress={handleFetchPosts} />
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
