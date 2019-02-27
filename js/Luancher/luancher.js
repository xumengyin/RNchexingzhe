/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,StatusBar} from 'react-native';
var Demensions = require('Dimensions');

import MainTab from '../Main/mainTab';
//初始化宽高
var {width, height} = Demensions.get('window');
// import HomeDetail from './HomeDetail';
export default class Luancher extends Component<Props> {
    //onResume  1次
    componentDidMount(): void {
        setTimeout(()=>{
            this.props.navigator.replace({
                component:MainTab
            })
        },1000)
    }

    render() {

        return (
            <View style={ {flex:1,alignItems:'center',backgroundColor: 'white' }}>
                <StatusBar
                    backgroundColor='rgba(0,0,0,0.0)'
                    hidden={true}
                />
                <Image source={require('../../res/images/splash_icon.png')}  style={styles.luanchImageStyle}/>
            </View>
           );
    }


}

const styles = StyleSheet.create({
    luanchImageStyle:{
        //568 160
        width:156,
        height:54,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应（拉伸整个屏幕）
        resizeMode:'contain',
         position:'absolute',
         bottom:80,
        // alignItems:'center'

    }
});
