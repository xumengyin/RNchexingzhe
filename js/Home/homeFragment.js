/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Image, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import HomeDetail from './HomeDetail';
import HomeViewPager from "./HomeViewPager";
import HomeCarInfo from "./HomeCarInfo";
import HomeMenuInfo from "./HomeMenuInfo";
import HomeMyy from "./HomeMyy";
import HomeMenuCard from "./HomeMenuCard";

var Dimensions =require('Dimensions')
var {width, height} = Dimensions.get('window');
export default class HomeFragment extends Component<Props> {
    _pressButton(){
        const {navigator} = this.props;
        if (navigator) {
            //startActivity
            navigator.push({
                name:"详情页面",
                component:HomeDetail
            })
        }
    }
    render() {
        // <HomeMenuInfo/>
        return (
            <View>
                <StatusBar
                    backgroundColor='#598bff'
                    barStyle="light-content"
                    />
                {this.renderNavBar()}
                <ScrollView style={{backgroundColor:'#efefef',marginBottom: 60}}>
                    <HomeViewPager/>
                    <HomeCarInfo/>
                    <HomeMenuInfo/>
                    <HomeMyy/>
                    <HomeMenuCard/>
                </ScrollView>


            </View>
        );
    }

    renderNavBar() {
       return (
           <View style={styles.navBarStyle}>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <Image source={require('../../res/images/home_nav_btn_car_change_light.png')} style={[styles.navRightImg,{marginLeft: 30}]}></Image>
                <Text style={{fontSize: 16,color: 'white'}}>南京市</Text>
                <Image source={require('../../res/images/home_nav_btn_pull_down.png')} style={{width:20,height:20}}></Image>
            </View>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <Image source={require('../../res/images/home_nav_btn_message_light.png')} style={styles.navRightImg}></Image>
                <Image source={require('../../res/images/home_nav_btn_sys_light.png')} style={styles.navRightImg}></Image>
            </View>
           </View>
       )



    }
}

const styles = StyleSheet.create({
    navBarStyle:{
        backgroundColor:'#598bff',
        height:60,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',

    },
    navRightImg:{
        width:20,
        height:20,
        marginLeft:10,
        marginRight:10
    },
    topInputStyle:{
        width:width*0.7,
        height:40,
        backgroundColor: 'white',
        borderRadius:16,
        paddingLeft:10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
