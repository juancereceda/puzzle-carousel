import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlatListCarousel from "./components/FlatList/FlatList";
import Constants from "expo-constants";
import Carousel from "./components/Carousel/Carousel";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlatList</Text>
      <FlatListCarousel />
      <Text style={styles.title}>Left-Right Carousel</Text>
      <Carousel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    marginVertical: 30,
    fontSize: 30,
  },
});
