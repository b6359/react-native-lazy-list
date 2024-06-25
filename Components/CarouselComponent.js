import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import Tech4BizView from './common/Tech4BizView';

var width = Dimensions.get('window').width;
const CarouselComponent = ({ children }) => {
    return (
        <Tech4BizView style={styles.container}>
            <SliderBox
                images={children}
                sliderBoxHeight={200}
                autoplay
                circleLoop
                parentWidth={width - 30}
                resizeMethod={'resize'}
                resizeMode={'contain'}
                ImageComponentStyle={{ borderRadius: 15 }}
            />
        </Tech4BizView>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    }
});
export default CarouselComponent;