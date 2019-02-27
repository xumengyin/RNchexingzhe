/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View,TouchableNativeFeedback} from 'react-native';

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window');

var pic;
export default class HomeMenuInfo extends Component<Props> {
    constructor(Props) {
        super(Props);
        pic = this.props.pic;
        // Alert.alert("---"+pic)
        this.state = {}
    }


    render() {
        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.containStyle}>
                <Image source={pic} style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35
                }}/>
                <Text style={styles.font1}>{this.props.title}</Text>
            </View>
                </TouchableNativeFeedback>
        );
    }

}
const styles = StyleSheet.create({
    font1: {
        fontSize: 13,
        marginTop: 10
    },

    containStyle: {
        alignItems: 'center',
        flex:1
    },
    imageStyle: {}
});
