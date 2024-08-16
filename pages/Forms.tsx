import { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import { updatePostByID } from "../services/axios";

const Forms = ({ navigation, route }) => {
  const { posts } = route.params;
  const [title, setTitle] = useState(posts.title);
  const [body, setBody] = useState(posts.body);

  const handleChangeTitle = (value: string) => {
    setTitle(value);
  };

  const handleChangeBody = (value: string) => {
    setBody(value);
  };

  const handleUpdateData = () => {
    const sendData = {
      title: title,
      body: body,
    };
    updatePostByID(posts.id, sendData).then((res) => {
      if (res.status === 200) {
        navigation.navigate("Posts");
      }
    });
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <TextInput
        multiline={true}
        numberOfLines={2}
        style={styles.input}
        value={title}
        onChangeText={handleChangeTitle}
      />
      <TextInput
        multiline={true}
        style={styles.input}
        value={body}
        onChangeText={handleChangeBody}
      />
      <Button title="Update Post" onPress={handleUpdateData} />
      <Button title="Go Back" onPress={() => navigation.navigate("Posts")} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default Forms;
