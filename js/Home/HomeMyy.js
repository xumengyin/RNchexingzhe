/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableNativeFeedback, Alert} from 'react-native';

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window');
const roadurl = 'https://m.cpsdna.com:1443/files/81044303087/takelook/20190129/thumb_2ce237ac4cd140b496ad979debb7e9af.jpg';
var imageWidth, imageHeight;
export default class HomeMyy extends Component<Props> {
    constructor(Props) {
        super(Props);
        imageWidth = width * 2 / 3;
        // imageHeight=imageWidth*9/16;
        imageHeight = 135;
        Alert.alert("---" + imageWidth + '--' + imageHeight)
        this.state = {}
    }


    render() {
        return (
            <View style={styles.contain}>
                <View style={[styles.containStyle, {justifyContent: 'space-between', marginTop: 10}]}>
                    <View style={styles.containStyle}>
                        <View style={{width: 3, height: 14, backgroundColor: '#598bff'}}/>
                        <Text style={{fontSize: 16, color: 'black', marginLeft: 10}}>路眼|全国路况直播</Text>
                    </View>
                    <View style={styles.containStyle}>
                        <Image style={styles.imageStyle1} source={require('../../res/images/img_shape1.png')}/>
                        <Image style={styles.imageStyle2} source={require('../../res/images/img_road_car.png')}/>
                        <Text style={{fontSize: 12}}>路况瞄一眼</Text>
                        <Image style={styles.imageStyle2} source={require('../../res/images/img_road_car.png')}/>
                        <Image style={styles.imageStyle1} source={require('../../res/images/img_shape2.png')}/>
                    </View>
                </View>
                <View style={{flexDirection: 'row', paddingLeft: 10, paddingRight: 10, marginTop: 10,paddingBottom:10}}>

                    <View >
                        <Image source={{uri: roadurl}}
                               style={{width: imageWidth, height: imageHeight, resizeMode: 'stretch'}}/>
                        <Text style={{
                            fontSize: 14,
                            color: 'white',
                            position: 'absolute',
                            bottom: 3,
                            backgroundColor: '#80000000',
                            marginStart: 5
                        }}>上海普陀区桃浦镇</Text>
                        <Image style={{width:48,height:48,position:'absolute',bottom:(imageHeight-48)/2,left:(imageWidth-48)/2}} source={require('../../res/images/play_img.png')}/>
                    </View>
                    <View style={{justifyContent: 'space-around', flexDirection: 'column',alignItems:'center', flex: 1}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{
                                fontSize: 14,
                                color: 'white',
                                borderRadius: 20,
                                backgroundColor: '#598bff',
                                padding:4,
                                paddingStart: 10,
                                paddingEnd:10
                            }}>瞄一眼</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={{width: 18, height: 18}}
                                   source={require('../../res/images/icon_miao_camera1.png')}/>
                            <Text style={{fontSize: 14, color: 'black'}}>手机拍照</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    font1: {
        fontSize: 13,
        marginTop: 10
    },

    contain: {
        backgroundColor: 'white',
        marginTop: 10
    },
    containStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageStyle1: {
        width: 26,
        height: 3.5
    },
    imageStyle2: {
        width: 15,
        height: 15
    }
});
