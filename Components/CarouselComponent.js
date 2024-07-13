import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import JVDView from "./common/JVDView";

var width = Dimensions.get("window").width;
const CarouselComponent = ({ children }) => {
  return (
    <JVDView style={styles.container}>
      <SliderBox
        images={children}
        sliderBoxHeight={200}
        autoplay
        circleLoop
        parentWidth={width - 30}
        resizeMethod={"resize"}
        resizeMode={"contain"}
        ImageComponentStyle={{ borderRadius: 15 }}
      />
    </JVDView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
export default CarouselComponent;
