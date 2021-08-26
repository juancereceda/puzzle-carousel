import React, { useRef } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import data from "../../data/data";
import LeftArrow from "../../assets/left_light_arrow.png";
import DisabledLeftArrow from "../../assets/left_dark_arrow.png";
import RightArrow from "../../assets/right_light_arrow.png";
import DisabledRightArrow from "../../assets/right_dark_arrow.png";
import styles from "./styles";

const max_width = Dimensions.get("screen").width;

function Carousel() {
  let startPosition = 0;
  const positionValue = new Animated.Value(startPosition);
  const positionValueRef = useRef(positionValue);

  const animateCarouselLeft = () => {
    Animated.timing(positionValueRef.current, {
      toValue: startPosition + Dimensions.get("screen").width,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      startPosition += Dimensions.get("screen").width;
    });
  };
  const animateCarouselRight = () => {
    Animated.timing(positionValueRef.current, {
      toValue: startPosition - Dimensions.get("screen").width,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      startPosition -= Dimensions.get("screen").width;
    });
  };

  const animationStyle = {
    translateX: positionValue,
  };

  return (
    <View style={styles.carouselCnt}>
      <Animated.View style={[styles.carousel, animationStyle]}>
        {data &&
          data.map((img) => {
            return (
              <Image source={img} style={styles.img} key={data.indexOf(img)} />
            );
          })}
      </Animated.View>
      <View style={styles.paginate}>
        <View style={styles.arrowCnt}>
          {startPosition < max_width ? (
            <TouchableOpacity onPress={() => animateCarouselLeft()}>
              <Image source={LeftArrow} style={styles.arrow} />
            </TouchableOpacity>
          ) : (
            <Image source={DisabledLeftArrow} style={styles.arrow} />
          )}
        </View>
        <View style={styles.arrowCnt}>
          {startPosition > -max_width ? (
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

export default Carousel;
