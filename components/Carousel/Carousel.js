import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import data from "../../data/data";
import LeftArrow from "../../assets/left_light_arrow.png";
import DisabledLeftArrow from "../../assets/left_dark_arrow.png";
import RightArrow from "../../assets/right_light_arrow.png";
import DisabledRightArrow from "../../assets/right_dark_arrow.png";

const max_width = Dimensions.get("screen").width;
function Carousel() {
  const [auxValue, setAuxValue] = useState(0);
  const value = new Animated.Value(auxValue);
  const valueRef = useRef(value);

  const animateCarouselLeft = () => {
    Animated.timing(valueRef.current, {
      toValue: auxValue + max_width,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setAuxValue(auxValue + max_width);
    });
  };
  const animateCarouselRight = () => {
    Animated.timing(valueRef.current, {
      toValue: auxValue - max_width,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setAuxValue(auxValue - max_width);
    });
  };

  const auxStyle = {
    translateX: value,
  };

  return (
    <View style={styles.carouselCnt}>
      <Animated.View style={[styles.carousel, auxStyle]}>
        {data &&
          data.map((img) => {
            return (
              <Image source={img} style={styles.img} key={data.indexOf(img)} />
            );
          })}
      </Animated.View>
      <View style={styles.paginate}>
        <View style={styles.arrowCnt}>
          {auxValue < max_width ? (
            <TouchableOpacity onPress={() => animateCarouselLeft()}>
              <Image source={LeftArrow} style={styles.arrow} />
            </TouchableOpacity>
          ) : (
            <Image source={DisabledLeftArrow} style={styles.arrow} />
          )}
        </View>
        <View style={styles.arrowCnt}>
          {auxValue > -2 * max_width ? (
            <TouchableOpacity onPress={() => animateCarouselRight()}>
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
    marginLeft: max_width,
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
    marginLeft: max_width,
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
