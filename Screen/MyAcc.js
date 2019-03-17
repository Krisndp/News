import React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Dimensions, Alert, ScrollView } from 'react-native';
import { firebaseApp } from './Fire';
const { width, height } = Dimensions.get('window');

export default class MyAcc extends React.Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database();
        this.state = {
            username: 'Trần Thiên Phong',
            phone: '0367744951',
            avatar: 'https://cdn.dribbble.com/users/1220170/screenshots/5758802/new_avatar_2x.jpg',
            uid: '',
            email: 'abc@gmail.com',
            point: 0,
            birth: '11/04/1997',
            gender: 'Nam',
            email:'thangtran.6419@gmail.com',
            address:'Hà Nội',
        }
    }
    componentWillMount() {

    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5F5F5', }}>
                <View style={{ height: width / 7, backgroundColor: 'white', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }} onPress = {()=> this.props.navigation.pop()}>
                        <Image source={{ uri: 'https://img.icons8.com/material-outlined/96/000000/left.png' }} style={{ width: width / 14, height: width / 14 }} />
                    </TouchableOpacity>
                    <View style={{ flex: 8, justifyContent: 'center', alignItems: 'flex-start', marginLeft:10 }}>
                        <Text style={{ margin: 10, fontSize: width / 18, fontWeight: 'bold', color: 'black' }}>Tài khoản của tôi</Text>
                    </View>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                        <Text style={{ fontSize: width / 28, color: 'blue' }}>Sửa</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: width, backgroundColor: 'white', flexDirection: 'column', marginTop: 10, height: height / 5 }}>
                    <View style={{ flex: 1, marginLeft: 10, marginRight:10 }}>
                        <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 0.3 }}>
                            <View style={{ flex: 1, margin: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: width / 30 }}>Họ và tên</Text>
                            </View>
                            <View style={{ flex: 2, margin: 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: width / 28, color: 'black', fontWeight: '500' }}>{this.state.username}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 0.3,}}>
                            <View style={{ flex: 1, margin: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: width / 30 }}>Số điện thoại</Text>
                            </View>
                            <View style={{ flex: 2, margin: 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: width / 28, color: 'black', fontWeight: '500' }}>{this.state.phone}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <View style={{ flex: 1, margin: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: width / 30 }}>Mã thẻ cứng</Text>
                            </View>
                            <View style={{ flex: 2, margin: 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: width / 28, color: 'black', fontWeight: '500' }}>8888 1014 7591 1831</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ width: width, backgroundColor: 'white', flexDirection: 'column', marginTop: 10, height: height / 5 }}>
                    <View style={{ flex: 1, marginLeft: 10, marginRight:10 }}>
                        <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 0.3 }}>
                            <View style={{ flex: 1, margin: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: width / 30 }}>Ngày sinh</Text>
                            </View>
                            <View style={{ flex: 2, margin: 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: width / 28, color: 'black', fontWeight: '500' }}>{this.state.birth}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 0.3,}}>
                            <View style={{ flex: 1, margin: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: width / 30 }}>Giới tính</Text>
                            </View>
                            <View style={{ flex: 2, margin: 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: width / 28, color: 'black', fontWeight: '500' }}>{this.state.gender}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <View style={{ flex: 1, margin: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: width / 30 }}>Email</Text>
                            </View>
                            <View style={{ flex: 2, margin: 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: width / 28, color: 'black', fontWeight: '500' }}>{this.state.email}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ width: width, backgroundColor: 'white', flexDirection: 'column', marginTop: 10, height: height / 15 }}>
                    <View style={{ flex: 1, marginLeft: 10, marginRight:10 }}>
                        <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 0.3 }}>
                            <View style={{ flex: 1, margin: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: width / 30 }}>Địa chỉ</Text>
                            </View>
                            <View style={{ flex: 2, margin: 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: width / 28, color: 'black', fontWeight: '500' }}>{this.state.address}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}