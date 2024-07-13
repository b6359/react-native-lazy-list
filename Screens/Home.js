import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Header from "../Components/Header";
import { colorBlack, colorWhite } from "../config/theme";
import Search from "../Components/Search";
import CarouselComponent from "../Components/CarouselComponent";
import JVDView from "../Components/common/JVDView";
import Categories from "../Components/category/Categories";
import Products from "../Components/products/Products";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const Slider1 = require("../images/slider1.png");
  const Slider2 = require("../images/slider2.png");
  const Slider3 = require("../images/slider3.png");
  const productData = {
    images: [Slider1, Slider2, Slider3],
  };
  const chooseCategory = (id) => {
    setSelectedCategory(id);
  };

  return (
    <JVDView style={{ backgroundColor: colorWhite, height: "100%" }}>
      <Header />
      <Search />
      <ScrollView>
        <CarouselComponent children={productData.images} />
        <Categories chooseCategory={chooseCategory} />
        <Products selectedCategory={selectedCategory} />
      </ScrollView>
    </JVDView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    textAlign: "center",
    color: colorBlack,
    fontSize: 20,
  },
});

export default Home;
