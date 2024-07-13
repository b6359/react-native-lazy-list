import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Black, OffWhite, White, colorBlack } from "../config/theme";
import JVDView from "./common/JVDView";
import JVDTextInput from "./common/JVDTextInput";
const Search = ({ searchChange }) => {
  return (
    <JVDView style={styles.container}>
      <Icon name="search" size={25} style={styles.iconSearch} />
      <JVDTextInput
        placeholder={`Search...`}
        style={styles.inputSectionView}
        onChangeText={searchChange}
      />
    </JVDView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  iconSearch: {
    position: "absolute",
    top: 20,
    left: 30,
    zIndex: 1,
    color: "#7a888b",
  },
  inputSectionView: {
    backgroundColor: OffWhite,
    marginVertical: 10,
    borderRadius: 50,
    paddingHorizontal: 50,
    paddingVertical: 10,
    width: "100%",
    alignSelf: "center",
    position: "relative",
  },
});

export default Search;
