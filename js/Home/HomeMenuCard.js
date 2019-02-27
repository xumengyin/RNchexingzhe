/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import HomeMenu2 from './HomeMenu2'

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window');
const roadurl = 'https://m.cpsdna.com:1443/files/81044303087/takelook/20190129/thumb_2ce237ac4cd140b496ad979debb7e9af.jpg';
var data=[[{title:'汽车4s',title_en:'4s automobile',icon: require('../../res/images/icon_4sautomobile.png'),bg: require('../../res/images/img_4sautomobile.png')},
    {title:'维小保会员',title_en:'member\\WeiXiaoBao',icon: require('../../res/images/icon_memberweixiaobao.png'),bg: require('../../res/images/img_memberweiwiaobao.png')}],
    [{title:'行车优品',title_en:'Driving Product',icon: require('../../res/images/img_xcyp.png'),bg: require('../../res/images/img_shakenavigation.png')},
    {title:'百宝箱',title_en:'Treasure box',icon: require('../../res/images/icon_treasurebox.png'),bg: require('../../res/images/img_treasurebox.png')}]]
export default class HomeMenuCard extends Component<Props> {
    constructor(Props) {
        super(Props);
        this.state={
            data:data
        }
    }


    renderCard()
    {
        var item=[]
        for(var i=0;i<this.state.data.length;i++)
        {
            item.push(<View style={styles.contain}>
                <HomeMenu2 key={i+""+0} {...this.state.data[i][0]}/>
                <HomeMenu2 key={i+""+1}{...this.state.data[i][1]}/>
            </View>)
        }
        return item;
    }


    render() {
        return (
            <View style={{marginTop:10}}>
                {this.renderCard()}
            </View>
        );
    }

}
const styles = StyleSheet.create({
    contain: {
     flexDirection:'row'
    }
});
