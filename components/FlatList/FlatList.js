import React from "react";
import { Image, StyleSheet, View, FlatList } from "react-native";
import data from "../../data/data";

function FlatListCarousel() {
  return (
    <View style={styles.flatList}>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => (
          <Image source={item} style={styles.img} key={data.indexOf(item)} />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
    height: 200,
  },
  img: {
    height: 200,
    width: 200,
  },
});

export default FlatListCarousel;
