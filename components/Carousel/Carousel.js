import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import data from "../../data/data";
import LeftArrow from "../../assets/left_light_arrow.png";
import DisabledLeftArrow from "../../assets/left_dark_arrow.png";
import RightArrow from "../../assets/right_light_arrow.png";
import DisabledRightArrow from "../../assets/right_dark_arrow.png";

function Carousel() {
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(2);
  const totalResults = data.length;
  const resultsPerView = 2;
  const animation = useRef(new Animated.Value(0));

  function handleLeft() {
    setFirst(first - resultsPerView);
    setLast(last - resultsPerView);
    Animated.spring(animation.current, {
      toValue: -Dimensions.get("screen").width,
      useNativeDriver: true,
    }).start();
  }
  function handleRight() {
    setFirst(first + resultsPerView);
    setLast(last + resultsPerView);
  }

  return (
    <View style={styles.carouselCnt}>
      <Animated.View style={styles.carousel} ref={animation}>
        {data &&
          data.slice(first, last).map((img) => {
            return (
              <Image source={img} style={styles.img} key={data.indexOf(img)} />
            );
          })}
      </Animated.View>
      <View style={styles.paginate}>
        <View style={styles.arrowCnt}>
          {first > 0 ? (
            <TouchableOpacity onPress={() => handleLeft()}>
              <Image source={LeftArrow} style={styles.arrow} />
            </TouchableOpacity>
          ) : (
            <Image source={DisabledLeftArrow} style={styles.arrow} />
          )}
        </View>
        <View style={styles.arrowCnt}>
          {last < totalResults ? (
            <TouchableOpacity onPress={() => handleRight()}>
              <Image source={RightArrow} style={styles.arrow} />
            </TouchableOpacity>
          ) : (
            <Image source={DisabledRightArrow} style={styles.arrow} />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 200,
    width: 200,
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

export default Carousel;
