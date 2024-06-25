import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Tech4BizView from '../common/Tech4BizView';
import RoundCategory from './RoundCategory';
import { CAT_IMAGE, GET_CATEGORIES } from '../../config/constants';
import DataFetcher from '../../helper/DataFetcher';
const Categories = ({ chooseCategory }) => {
    const dataFetcher = new DataFetcher();
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const fetchData = async () => {
        try {
            const result = await dataFetcher.fetchData(GET_CATEGORIES, "GET", null);
            setCategoryList(result.data)
        } catch (error) {
        } finally {
        }
    };
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <Tech4BizView style={styles.container}>
            <ScrollView style={styles.typeList} horizontal={true} showsHorizontalScrollIndicator={false}>
                {categoryList.map((res, index) => {
                    return <RoundCategory
                        key={index}
                        label={res.name}
                        image={CAT_IMAGE + res.cat_image}
                        isSelected={res.id === selectedCategory}
                        onPress={() => { chooseCategory(res.id) }}
                    />
                })}
            </ScrollView>
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

export default Categories;
