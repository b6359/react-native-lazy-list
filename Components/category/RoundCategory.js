import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { OffWhite } from "../../config/theme";
import Tech4BizText from "../common/Tech4BizText";
const RoundCategory = (props) => {
  const { label, image, isSelected, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.container, isSelected ? styles.selectedCategory : null]}
      onPress={onPress}
    >
      <Image style={styles.imageContainer} source={{ uri: image }} />
      <Tech4BizText style={styles.userNameStyle}>{label}</Tech4BizText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    margin: 2,
  },
  selectedCategory: {
    borderBottomColor: "red",
    borderBottomWidth: 3,
    borderBottomColor: OffWhite,
  },
  imageContainer: {
    height: 65,
    width: 65,
    borderRadius: 65,
    resizeMode: "cover",
  },
  userNameStyle: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 14,
    flexWrap: "wrap",
    width: 85,
    textAlign: "center",
  },
});

export default RoundCategory;
