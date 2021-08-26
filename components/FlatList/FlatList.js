import React from "react";
import { Image, View, FlatList } from "react-native";
import data from "../../data/data";
import styles from "./styles";

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
        keyExtractor={(item, index) => index.toString()}
      ></FlatList>
    </View>
  );
}

export default FlatListCarousel;
