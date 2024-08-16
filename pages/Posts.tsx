import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { getPosts } from "../services/axios";
import { useEffect, useState } from "react";

const Posts = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const getAllPosts = () => {
    getPosts().then((res) => {
      if (res.status === 200) {
        setPosts(res.data);
      }
    });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => {
        return (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
            }}
            key={post.id}
          >
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
                padding: 5,
              }}
              onPress={() => navigation.navigate("Forms", { posts: post })}
            >
              <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                {post.title}
              </Text>
              <Text style={{ textAlign: "justify" }}>{post.body}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default Posts;
