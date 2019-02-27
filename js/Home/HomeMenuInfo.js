/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    StatusBar,
    ScrollView,
    ViewPagerAndroid,
    Alert,
    TouchableOpacity
} from 'react-native';

import HomeMenu from './HomeMenu'
var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window');

export default class HomeMenuInfo extends Component<Props> {
    constructor(Props) {
        super(Props);

        this.state = {}
    }



    render() {
        return (
            <View style={styles.containStyle}>
                <HomeMenu  pic={require('../../res/images/main_zhoubian.png')} title={'周边服务'}/>
                <HomeMenu  pic={require('../../res/images/main_zhoubian.png')} title={'驾驶行为'}/>
                <HomeMenu  pic={require('../../res/images/main_zhoubian.png')} title={'车况档案'}/>
                <HomeMenu  pic={require('../../res/images/main_zhoubian.png')} title={'行车导航'}/>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    containStyle: {
        flexDirection:'row',
        marginTop:10,
        backgroundColor: '#ffffff',
        paddingTop:10,
        paddingBottom:10
    },
    containStyle2: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between'
    },
    homeMenu: {
        flex:1
    }
});
