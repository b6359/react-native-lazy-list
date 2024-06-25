import React, { lazy, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Tech4BizView from '../common/Tech4BizView';
import ProductCard from '../products/ProductCard';
import { GET_PRODUCTS } from '../../config/constants';
import DataFetcher from '../../helper/DataFetcher';

const Products = ({ selectedCategory }) => {
    const dataFetcher = new DataFetcher();
    const [productList, setProductList] = useState([]);
    const [bkpProductList, setBkpProductList] = useState([]);
    const fetchData = async () => {
        try {
            const result = await dataFetcher.fetchData(GET_PRODUCTS, "GET", null);
            setProductList(result.data)
            setBkpProductList(result.data)
        } catch (error) {
        } finally {
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        setProductList(bkpProductList.filter(x => x.category_id == selectedCategory))
    }, [selectedCategory]);
    return (
        <Tech4BizView style={styles.container}>
            <ProductCard products={productList} />
        </Tech4BizView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    typeList: {
        paddingTop: 10,
        paddingBottom: 10,
    },

});

export default Products;
