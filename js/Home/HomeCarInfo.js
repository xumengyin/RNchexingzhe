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

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window');
import HomeTopListView from './HomeTopListView'

export default class HomeCarInfo extends Component<Props> {
    constructor(Props) {
        super(Props);

        this.state = {}
    }

    renderBottom() {
        return (<View style={styles.containStyle2}>
                <Text style={styles.font1}>今日碳排放参考值--</Text>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                    <Image style={{width: 15, height: 15, resizeMode: 'cover'}}
                           source={require('../../res/images/cxz_weather_heavy_rain.png')}/>
                    <Text style={styles.font1}>10~15不限行 不宜洗车</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.containStyle}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: '#00ff00', width: width * 5 / 9}}></View>
                    <View style={{paddingLeft: 15}}>
                        <Text style={{fontSize: 14, color: '#000000'}}>南京出租车</Text>
                        <Text style={{fontSize: 12, color: '#598bff', marginTop: 10}}>静止 公开 0km/h</Text>
                        <Text style={{fontSize: 12, marginTop: 10}}>2019-02-20 16:40:33</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity activeOpacity={0.5}>
                                <Text style={{
                                    flex: 0,
                                    borderRadius: 20,
                                    backgroundColor: '#598bff',
                                    marginTop: 10,
                                    color: 'white',
                                    fontSize: 14,
                                    padding: 4,
                                    paddingLeft: 10,
                                    paddingRight: 10
                                }}>违章代缴</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.diver}/>
                {this.renderBottom()}
            </View>
        );
    }

}
const styles = StyleSheet.create({
    font1: {
        fontSize: 12,
    },
    diver: {
        height: 0.5,
        marginTop: 6,
        paddingLeft:10,
        paddingRight:10,
        width: width,
        backgroundColor: 'gray'
    },

    indicatorStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10
    },
    containStyle: {
        width: width,
        padding: 10,
        backgroundColor: '#ffffff',
        marginTop: 5
    },
    containStyle2: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between'
    }
});
