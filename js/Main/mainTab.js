import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    Platform,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomeFragment from '../Home/homeFragment';
import Find from '../Find/find';
import Mine from '../Mine/mine';
import More from '../More/more';
import {Navigator} from "react-native-deprecated-custom-components"
export default class MainTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'  //默认选中主页
        }
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="首页"
                    renderIcon={() => <Image source={require('../../res/images/tab_home.png')} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require('../../res/images/tab_home_hl.png')} style={styles.iconStyle} />}
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => this.setState({ selectedTab: 'home' }) }
                >
                    <Navigator
                        initialRoute={{
                            name:"首页",
                            component:HomeFragment
                        }
                        }
                        renderScene={
                            (router,navigator)=>{
                                   let Component= router.component;
                                   return <Component {...router.params} navigator={navigator}/>
                            }

                        }/>

                </TabNavigator.Item>
                <TabNavigator.Item

                    title='后服市场'
                    renderIcon={() => <Image source={require('../../res/images/tab_car.png')} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require('../../res/images/tab_car_hl.png')} style={styles.iconStyle} />}
                    selected={this.state.selectedTab === 'shop'}
                    onPress={() => this.setState({ selectedTab: 'shop' }) }
                >

                    <Find />

                </TabNavigator.Item>
                <TabNavigator.Item

                    title="资讯"
                    renderIcon={() => <Image source={require('../../res/images/tab_new.png')} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require('../../res/images/tab_new_hl.png')} style={styles.iconStyle} />}
                    selected={this.state.selectedTab === 'news'}
                    onPress={() => this.setState({ selectedTab: 'news' }) }
                >
                    <Mine />
                </TabNavigator.Item>
                <TabNavigator.Item

                    title="数据"
                    renderIcon={() => <Image source={require('../../res/images/tab_data.png')} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require('../../res/images/tab_data_hl.png')} style={styles.iconStyle} />}
                    selected={this.state.selectedTab === 'data'}
                    onPress={() => this.setState({ selectedTab: 'data' }) }
                >
                    <Mine />
                </TabNavigator.Item>
                <TabNavigator.Item

                    title="我的"
                    renderIcon={() => <Image source={require('../../res/images/tab_user.png')} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={require('../../res/images/tab_user_hl.png')} style={styles.iconStyle} />}
                    selected={this.state.selectedTab === 'more'}
                    onPress={() => this.setState({ selectedTab: 'more' }) }
                >
                    <More />
                </TabNavigator.Item>

            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    }

});