/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class TestComponent extends Component<Props> {
    componentDidMount(): void {
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    }
    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    }
    componentWillUnmount(): void {
    }
    componentWillMount(): void {
    }
    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
    }
    render() {
        return (
            <View>
                <Text>
                    TestComponent
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
