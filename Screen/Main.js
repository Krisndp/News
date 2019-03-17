import { createBottomTabNavigator } from 'react-navigation';
import { View, Text, Image } from 'react-native';
import React from 'react';
import Home from './Home';
import News from './News';
import Noti from './Noti';
import PerInfo from './PerInfo';

const Main = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: null,
            tabBarIcon:({ tintColor }) => (
                <Image style={[{ width: 20, height: 20 },{ tintColor: tintColor }]} source={{uri: 'https://img.icons8.com/ios/50/000000/home-filled.png'}} />
            )
        }
    },
    News: {
        screen: News,
        navigationOptions: {
            tabBarLabel: null,
            tabBarIcon:({ tintColor }) => (
                <Image style={[{ width: 20, height: 20 },{ tintColor: tintColor }]} source={{uri: 'https://img.icons8.com/ios/50/000000/google-news-filled.png'}} />
            )
        }
    },
    Noti: {
        screen: Noti,
        navigationOptions: {
            tabBarLabel: null,
            tabBarIcon:({ tintColor }) => (
                <Image style={[{ width: 20, height: 20 },{ tintColor: tintColor }]} source={{uri:'https://img.icons8.com/ios/50/000000/appointment-reminders-filled.png'}} />
            )
        }
    },
    PerInfo: {
        screen: PerInfo,
        navigationOptions: {
            tabBarLabel: null,
            tabBarIcon:({ tintColor }) => (
                <Image style={[{ width: 20, height: 20 },{ tintColor: tintColor }]} source={{uri:'https://img.icons8.com/ios/26/000000/user-filled.png'}} />
            )
        }
    },
}, {
        tabBarOptions: {
            activeTintColor:'red',
            tabBarSelectedButtonColor: '#fff',
            showIcon: true, //this is default false on Android
            showLabel: false,
            style: {
                backgroundColor: '',
            },
            indicatorStyle: {
                opacity: 0
            }
        }
    }
);

export default Main
