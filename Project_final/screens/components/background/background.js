import React from 'react';
import { View, StyleSheet } from 'react-native';


const background = () => {
    return (
        <View style={StyleSheet.absoluteFill} >
            <View flex={1 / 3} backgroundColor="black" />
            <View flex={1 / 3}  />
            <View flex={1 / 3} />


        </View>
    )
}

export default Background;