import React, { } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { OffWhite } from '../../config/theme';
import { FlatList } from 'react-native-gesture-handler';
import { PRODUCT_IMAGE } from '../../config/constants';
import Tech4BizButton from '../common/Tech4BizButton';

const ProductCard = (props) => {
    const { products } = props

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.productContainer}>
                <Image style={styles.productImage} source={{ uri: PRODUCT_IMAGE + item.image }} />
                <Text style={[styles.productName, styles.bold]}>{item.name}</Text>
                <Text style={styles.productName}>40ml</Text>{/* measurement */}
                <View style={styles.priceContainer}>
                    <View>
                        <Text style={[styles.productName, styles.currentPrice]}>₹{item.sell_price}</Text>
                        <Text style={[styles.productName, styles.mainPrice]}>₹{item.main_price}</Text>
                    </View>
                    <View>
                        <Tech4BizButton title="Add" style={styles.addButton} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={false}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    productContainer: {
        margin: 5,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: OffWhite,
        width: '48%',
    },
    productImage: {
        width: '100%',
        height: 110,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    productName: {
        marginTop: 5,
        width: '100%',
        flexWrap: 'wrap',
        fontSize: 12
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 15
    },
    mainPrice: {
        textDecorationLine: 'line-through',
        fontSize: 11
    },
    currentPrice: {
        fontWeight: 'bold'
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addButton: {
        backgroundColor: OffWhite,
        textAlign: 'center',
    }

});

export default ProductCard;
