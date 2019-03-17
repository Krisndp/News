import React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Dimensions, Alert, ScrollView } from 'react-native';
import { firebaseApp } from './Fire';
const { width, height } = Dimensions.get('window');

export default class Order extends React.Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database();
        this.state = {
        }
    }



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5F5F5', }}>
                <TouchableOpacity onPress = {()=> this.props.navigation.pop()} style={{ height: width / 7, backgroundColor: 'white', flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <Image source={{ uri: 'https://img.icons8.com/material-outlined/96/000000/left.png' }} style={{ width: width / 14, height: width / 14 }} />
                    </View>
                    <View style={{ flex: 8, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                        <Text style={{ margin: 10, fontSize: width / 18, fontWeight: 'bold', color: 'black' }}>Đơn hàng đã đặt</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ width: width, backgroundColor: '#F5F5F5', height: height, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width, marginRight:20 }}>
                        <Image style={{ width, height: height / 3 }} source={require('../image/order.jpg')} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center',width, marginRight:20 }}>
                        <Text style={{ fontSize: width / 28,marginRight:20  }}> Bạn chưa có đơn hàng nào, quét mã sản phẩm</Text>
                        <Text style={{ fontSize: width / 28, marginTop: 5, marginRight:20 }}>và mua sắm ngay!</Text>
                        <Text style={{ marginTop: 20, fontSize: width / 28, color: 'blue', fontWeight: '500', marginRight:20 }} onPress={() => { }}> Quét sản phẩm</Text>
                    </View>
                </View>
            </View>
        )
    }
}