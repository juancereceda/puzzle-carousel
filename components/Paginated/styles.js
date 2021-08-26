import { StyleSheet, Dimensions } from "react-native";
const max_width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  carousel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: max_width / 2,
    width: max_width / 2,
  },
  paginate: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    top: "35%",
    width: "97%",
    justifyContent: "space-between",
  },
  arrowCnt: {
    backgroundColor: "rgba(51, 55, 71,0.4)",
    borderRadius: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    height: 40,
    width: 40,
  },
});

export default styles;
