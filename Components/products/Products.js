import React, { lazy, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import JVDView from "../common/JVDView";
import ProductCard from "../products/ProductCard";
import { GET_PRODUCTS } from "../../config/constants";
import DataFetcher from "../../helper/DataFetcher";

const Products = ({ selectedCategory }) => {
  const dataFetcher = new DataFetcher();
  const [productList, setProductList] = useState([]);
  const [bkpProductList, setBkpProductList] = useState([]);
  const fetchData = async () => {
    try {
      const result = await dataFetcher.fetchData(GET_PRODUCTS, "GET", null);
      setProductList(result.data);
      setBkpProductList(result.data);
    } catch (error) {
    } finally {
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setProductList(
      bkpProductList.filter((x) => x.category_id == selectedCategory)
    );
  }, [selectedCategory]);
  return (
    <JVDView style={styles.container}>
      <ProductCard products={productList} />
    </JVDView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  typeList: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default Products;
