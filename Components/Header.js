import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Black, OffWhite, White, colorBlack } from '../config/theme';
import Tech4BizView from './common/Tech4BizView';
const Header = () => {
    return (
        <Tech4BizView style={styles.container}>
            <Tech4BizView style={styles.content}>
                <Icon name="grid-outline" size={25} color={colorBlack} style={styles.icon} />
                <Icon name="notifications-outline" size={25} color={colorBlack} style={styles.icon} />
            </Tech4BizView>
        </Tech4BizView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    icon: {
        backgroundColor: OffWhite,
        padding: 10,
        borderRadius: 50
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
});

export default Header;
