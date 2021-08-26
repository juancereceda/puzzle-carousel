import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import data from "../../data/data";
import LeftArrow from "../../assets/left_light_arrow.png";
import DisabledLeftArrow from "../../assets/left_dark_arrow.png";
import RightArrow from "../../assets/right_light_arrow.png";
import DisabledRightArrow from "../../assets/right_dark_arrow.png";
import styles from "./styles";

function Paginated() {
  const totalResults = data.length;
  const resultsPerView = 2;
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(resultsPerView);
  let currentResults = data.slice(first, last);

  const handleLeft = () => {
    setFirst(first - resultsPerView);
    setLast(last - resultsPerView);
  };
  const handleRight = () => {
    setFirst(first + resultsPerView);
    setLast(last + resultsPerView);
  };

  return (
    <View style={styles.carouselCnt}>
      <View style={styles.carousel}>
        {data &&
          currentResults.map((img) => {
            return (
              <Image source={img} style={styles.img} key={data.indexOf(img)} />
            );
          })}
      </View>
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

export default Paginated;
