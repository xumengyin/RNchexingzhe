/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableNativeFeedback, Alert, ImageBackground} from 'react-native';

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window');
const roadurl = 'https://m.cpsdna.com:1443/files/81044303087/takelook/20190129/thumb_2ce237ac4cd140b496ad979debb7e9af.jpg';
export default class HomeMenu2 extends Component<Props> {
    constructor(Props) {
        super(Props);

    }


    render() {
        return (
            <ImageBackground imageStyle={{borderRadius:5}} style={{flex: 1,margin:3,overlayColor:'#ffffff',borderRadius:30}} source={this.props.bg}>
                <View style={styles.contain}>
                    <View>
                        <Text style={styles.font1}>{this.props.title}</Text>
                        <Text style={styles.font2}>{this.props.title_en}</Text>
                    </View>
                    <Image style={styles.image} source={this.props.icon}/>
                </View>
            </ImageBackground>

        );
    }

}
const styles = StyleSheet.create({
    font1: {
        fontSize: 16,
        color:'white'
    },
    font2: {
        fontSize: 13,
        color: 'white'
    },
    image: {
        width: 54,
        height: 54,
        position:'absolute',
        right:5
    },

    contain: {
        flex: 1,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:10,
        paddingEnd:10
    },
    containStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },

});
