import { StyleSheet, Dimensions } from "react-native";

const max_width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  flatList: {
    height: max_width / 2,
  },
  img: {
    height: max_width / 2,
    width: max_width / 2,
  },
});

export default styles;
