import React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Dimensions, Alert, ScrollView, Linking } from 'react-native';
import { firebaseApp } from './Fire';
const { width, height } = Dimensions.get('window');

export default class PerInfo extends React.Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database();
        this.state = {
            username: 'Trần Thiên Phong',
            phone: '0367744951',
            avatar: 'https://cdn.dribbble.com/users/1220170/screenshots/5758802/new_avatar_2x.jpg',
            uid: '',
            email: 'abc@gmail.com',
            point: 0
        }
    }
    componentWillMount() {

    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5F5F5', }}>
                <View style={{height: width / 7, backgroundColor: 'white' }}>
                    <Text style={{ marginLeft:20, margin: 10, fontSize: width / 16, fontWeight: 'bold', color: 'black' }}>Tài khoản</Text>
                </View>
                <ScrollView>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('MyAcc')} style={{ backgroundColor: 'white', marginTop: 8, flexDirection: 'row' }}>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: width / 5, height: width / 5 }} source={{ uri: this.state.avatar }} />
                        </View>
                        <View style={{ flex: 7, justifyContent: 'center', flexDirection: 'column' }}>
                            <Text style={{ marginLeft: 10, color: 'black', fontSize: width / 26, fontWeight: '500' }}>
                                {this.state.username}
                            </Text>
                            <Text style={{ marginLeft: 10, fontSize: width / 26 }}>
                                {this.state.phone}
                            </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                            <Image style={{ width: width / 18, height: width / 18 }} source={{ uri: 'https://img.icons8.com/ios/50/000000/more-than.png' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Point')} style={{ flexDirection: 'row', backgroundColor: 'white', height: width / 8, borderBottomColor: 'grey', borderBottomWidth: 0.5, marginTop: 10 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                            <Image style={{ width: width / 18, height: width / 18, backgroundColor: '#FF0000', borderRadius: width / 36 }} source={require('../image/star1.png')} />
                        </View>
                        <View style={{ flex: 6, justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ color: 'black', fontSize: width / 28, fontWeight: '500' }}>Nạp & Quản lý điểm</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ color: '', fontSize: width / 28 }}>{this.state.point} điểm</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                            <Image style={{ width: width / 18, height: width / 18 }} source={{ uri: 'https://img.icons8.com/ios/50/000000/more-than.png' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('HistoryGD')} style={{ flexDirection: 'row', backgroundColor: 'white', height: width / 8, borderBottomColor: 'grey', borderBottomWidth: 0.5 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                            <Image style={{ width: width / 18, height: width / 18, borderRadius: width / 36 }} source={require('../image/note.png')} />
                        </View>
                        <View style={{ flex: 6, justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ color: 'black', fontSize: width / 28, fontWeight: '500' }}>Lịch sử giao dịch</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                            <Image style={{ width: width / 18, height: width / 18 }} source={{ uri: 'https://img.icons8.com/ios/50/000000/more-than.png' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Order')} style={{ flexDirection: 'row', backgroundColor: 'white', height: width / 8, }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                            <Image style={{ width: width / 18, height: width / 18, borderRadius: width / 36 }} source={require('../image/truck.png')} />
                        </View>
                        <View style={{ flex: 6, justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ color: 'black', fontSize: width / 28, fontWeight: '500' }}>Quản lý đơn hàng</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                            <Image style={{ width: width / 18, height: width / 18 }} source={{ uri: 'https://img.icons8.com/ios/50/000000/more-than.png' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', backgroundColor: 'white', height: width / 8 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                            <Image style={{ width: width / 18, height: width / 18, borderRadius: width / 36 }} source={require('../image/setting.png')} />
                        </View>
                        <View style={{ flex: 3, justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ color: 'black', fontSize: width / 28, fontWeight: '500' }}>Cài đặt</Text>
                        </View>
                        <View style={{ flex: 5, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ color: '', fontSize: width / 28 }}>Mật khẩu & bảo mật</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                            <Image style={{ width: width / 18, height: width / 18 }} source={{ uri: 'https://img.icons8.com/ios/50/000000/more-than.png' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { Linking.openURL('https://google.com') }} style={{ marginTop: 10, flexDirection: 'row', backgroundColor: 'white', height: width / 8, borderBottomColor: 'grey', borderBottomWidth: 0.5 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                            <Image style={{ width: width / 18, height: width / 18, borderRadius: width / 36 }} source={require('../image/medal.png')} />
                        </View>
                        <View style={{ flex: 8, justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ color: 'black', fontSize: width / 28, fontWeight: '500' }}>Quyền lợi thành viên</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                            <Image style={{ width: width / 18, height: width / 18 }} source={{ uri: 'https://img.icons8.com/ios/50/000000/more-than.png' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { Linking.openURL('https://google.com') }} style={{ flexDirection: 'row', backgroundColor: 'white', height: width / 8, borderBottomColor: 'grey', borderBottomWidth: 0.5 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                            <Image style={{ width: width / 18, height: width / 18, borderRadius: width / 36 }} source={require('../image/rule1.png')} />
                        </View>
                        <View style={{ flex: 8, justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ color: 'black', fontSize: width / 28, fontWeight: '500' }}>Điều khoản & điều kiện</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                            <Image style={{ width: width / 18, height: width / 18 }} source={{ uri: 'https://img.icons8.com/ios/50/000000/more-than.png' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { Linking.openURL('https://google.com') }} style={{ flexDirection: 'row', backgroundColor: 'white', height: width / 8, borderBottomColor: 'grey', borderBottomWidth: 0.5 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                            <Image style={{ width: width / 18, height: width / 18, borderRadius: width / 36 }} source={require('../image/question1.png')} />
                        </View>
                        <View style={{ flex: 8, justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ color: 'black', fontSize: width / 28, fontWeight: '500' }}>Câu hỏi thường gặp</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                            <Image style={{ width: width / 18, height: width / 18 }} source={{ uri: 'https://img.icons8.com/ios/50/000000/more-than.png' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { Linking.openURL('https://google.com') }} style={{ flexDirection: 'row', backgroundColor: 'white', height: width / 8 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                            <Image style={{ width: width / 18, height: width / 18, borderRadius: width / 36 }} source={require('../image/headphone.png')} />
                        </View>
                        <View style={{ flex: 8, justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ color: 'black', fontSize: width / 28, fontWeight: '500' }}>Liên hệ</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                            <Image style={{ width: width / 18, height: width / 18 }} source={{ uri: 'https://img.icons8.com/ios/50/000000/more-than.png' }} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ margin: 20, borderRadius: 30, backgroundColor: 'white', flexDirection: 'column' }}>
                        <View>
                            <Image style={{ width: width - 40, height: width / 7, borderTopLeftRadius: 30, borderTopRightRadius: 30 }} source={{ uri: "https://static.vinid.net/4/2018/09/29/1538212340945_5452066.jpg" }} />
                        </View>
                        <View style={{ height: width / 7, flexDirection: 'row', margin: 10 }}>
                            <View style={{ flexDirection: 'column', flex: 3 }}>
                                <Text style={{ color: 'black', fontSize: width / 28, fontWeight: '500' }}>Mã giới thiệu</Text>
                                <Text style={{ fontSize: width / 28, marginTop: 5 }}>Mã của bạn: {this.state.phone}</Text>
                            </View>
                            <TouchableOpacity onPress={() => { Linking.openURL('https://google.com') }} style={{ justifyContent: 'center', flex: 1, alignItems: 'flex-end' }}>
                                <Text style={{ color: 'blue', fontSize: width / 28 }}>Chia sẻ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ margin: 25, borderRadius: 10, backgroundColor: 'white', }}>
                        <TouchableOpacity style={{ height: width / 8, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#ff0000', fontSize: width / 28, fontWeight: '500' }}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width, justifyContent: 'center', alignItems: 'center', margin: 5, height: width / 12 }} >
                        <Text style={{ fontSize: width / 28, }}>Phiên bản: 5.1.1 (190306)</Text>
                    </View>
                    {/* <View style={{ width, justifyContent: 'center', alignItems: 'center', marginTop:15, }} >
                    </View> */}
                </ScrollView>
            </View>
        )
    }
}