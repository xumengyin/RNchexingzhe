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
    Alert
} from 'react-native';

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window');
import HomeTopListView from './HomeTopListView'

export default class HomeViewPager extends Component<Props> {
    constructor(Props) {
        super(Props);
        const data = [
            {"title": "车行者，让你的车秒变智慧网联汽车", uri: 'https://static.cpsdna.com/upload/vsp/20190222/19022211370982585.PNG'},
            {
                "title": "针对新注册或转入登记汽车 广州7月执行国六",
                uri: 'https://static.cpsdna.com/upload/vsp/20190221/19022111271683414.JPG'
            },
            {
                "title": "扎堆布局出行服务 车企在寒冬下的自救之路",
                uri: 'https://static.cpsdna.com/upload/vsp/20190109/19010915113542111.JPG'
            }
        ];
        this.state = {
            data,
            currenentPage: 0
        }
    }

    renderScrollItem() {
        var itemArr = [];
        for (var i = 0; i < this.state.data.length; i++) {
            itemArr.push(<HomeTopListView key={i} dataArr={this.state.data[i]}/>)
        }
        return itemArr;
    }

    renderIndicator() {
        var indicatorArr = [];
        // var  number '10'   ==number2  10
        for (var i = 0; i < this.state.data.length; i++) {
            //== 一般等于  ====严格等于
            var style = (i == this.state.currenentPage) ? {color: 'red'} : {color: 'gray'}
            indicatorArr.push(<Text key={i} style={[{fontSize: 25}, style]}>&bull;</Text>)
        }
        return indicatorArr;
    }

    renderViewpager() {
        var pages = [];
        for (var i = 0; i < this.state.data.length; i++) {
            pages.push(<Image style={{flex: 1, resizeMode: 'cover'}} key={i}
                              source={{uri: this.state.data[i].uri}}></Image>)
            //  pages.push(<View style={{flex: 1,alignItems: 'center'}} key={i}><Text>afafafafafaf</Text></View>)
        }
        return pages;
    }

    render() {
        return (
            <View style={styles.containStyle}>
                <ViewPagerAndroid style={styles.pagerStyle} initialPage={0} onPageSelected={(e) => {
                   // Alert.alert("f"+e.nativeEvent.position)
                    this.setState({currenentPage: e.nativeEvent.position})
                }}
                >
                    {this.renderViewpager()}
                </ViewPagerAndroid>
                <View style={styles.indicatorStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    }

}
const ratio = 10 / 23;
const styles = StyleSheet.create({
    pagerStyle: {
        width: width,
        height: width * ratio,
        backgroundColor: '#0000ff'
    },
    indicatorStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10
    },
    containStyle: {
        width: width,
        height: width * ratio,
        alignItems: 'center',
        backgroundColor: '#00ff00'
    }
});
