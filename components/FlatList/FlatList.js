import React from "react";
import { Image, StyleSheet, View, FlatList, Dimensions } from "react-native";
import data from "../../data/data";

const max_width = Dimensions.get("screen").width;

function FlatListCarousel() {
  return (
    <View style={styles.flatList}>
      <FlatList
        pagingEnabled
        bounces={false}
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
    height: max_width / 2,
  },
  img: {
    height: max_width / 2,
    width: max_width / 2,
  },
});

export default FlatListCarousel;
