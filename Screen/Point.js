import React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Dimensions, Alert, ScrollView } from 'react-native';
import { firebaseApp } from './Fire';
const { width, height } = Dimensions.get('window');

export default class Point extends React.Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database();
        this.state = {
            point: 0,
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
                        <Text style={{ margin: 10, fontSize: width / 18, fontWeight: 'bold', color: 'black' }}>Điểm</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ width: width, backgroundColor: 'white', marginTop: 10, height: height / 6 }}>
                    <View style={{ flex: 1, marginLeft: 20, marginRight: 20, flexDirection: 'column' }}>
                        <View style={{ flex: 2, flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 0.3 }}>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: width / 10, height: width / 10, backgroundColor: '#EEEEEE', borderRadius: width / 16 }} source={require('../image/vallet.png')} />
                            </TouchableOpacity>
                            <View style={{ marginLeft: 10, flex: 7, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10, flexDirection: 'column' }}>
                                <Text style={{ fontSize: width / 30, color: 'black', fontWeight: '500', marginBottom: 10 }}>{this.state.point} điểm</Text>
                                <Text style={{ fontSize: width / 30, }}>Vui lòng nhập mã quà tặng để nhận thêm điểm</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ color: 'blue', fontSize: width / 28, fontWeight: '500' }}>Nạp điểm</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: width, backgroundColor: 'white', marginTop: 10, height: height / 4.5 }}>
                    <View style={{ flex: 1, marginLeft: 15, marginRight: 15, flexDirection: 'column' }}>
                        <View style={{  justifyContent: 'center', alignItems: 'flex-start', borderBottomColor: 'grey', borderBottomWidth: 0.3 }}>
                            <Text style={{ fontSize: width / 25, marginTop: 15, marginBottom:15, }}>LỊCH SỬ GIAO DỊCH</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start', borderBottomColor: 'grey', borderBottomWidth: 0.3 }}>
                            <Text style={{ fontSize: width / 30, marginTop: 20, marginBottom:20, }}>Bạn chưa có giao dịch trong tháng, dùng thẻ ngay để tích điểm và nhận ưu đãi hót của VinID</Text>
                        </View>
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',}}>
                            <Text style={{ color: 'blue', fontSize: width / 28, fontWeight: '500',marginTop: 15, marginBottom:20, }}>Dùng thẻ</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}