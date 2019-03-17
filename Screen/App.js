import React from 'react-native';
import {createStackNavigator, createAppContainer } from 'react-navigation'
import Login from './Login';
import Register from './Register';
import Main from './Main';
import Home from './Home';
import PerInfo from './PerInfo';
import News from './News';
import Noti from './Noti';
import Up from './Up';
import ReadNews from './ReadNews';
import MyAcc from './MyAcc';
import Point from './Point';
import HistoryGD from './HistoryGD';
import Order from './Order';
import AllNews from './AllNews';
import HotNews from './HotNews';

 
const navigation = createStackNavigator({
    Login: {screen : Login, navigationOptions: { header:null }},
    Register: {screen : Register, navigationOptions: { header:null }},
    Main: {screen: Main, navigationOptions:{ header: null}},
    Home: {screen: Home, navigationOptions: {header: null}},
    News: {screen: News, navigationOptions:{header:null}},
    PerInfo: {screen: PerInfo, navigationOptions: {header:null}},
    Noti: {screen: Noti, navigationOptions:{header: null}},
    Up: {screen: Up, navigationOptions:{header:null}},
    ReadNews: {screen: ReadNews, navigationOptions:{header:null}},
    MyAcc: {screen: MyAcc, navigationOptions:{header:null}},
    Point: {screen: Point, navigationOptions:{header:null}},
    HistoryGD: {screen: HistoryGD, navigationOptions:{header:null}},
    Order: {screen: Order, navigationOptions:{header:null}},
    AllNews: {screen: AllNews, navigationOptions:{header:null}},
    HotNews: {screen: HotNews, navigationOptions:{header:null}},
},
{
    initialRouteName: 'Main'
});

export default App = createAppContainer(navigation)