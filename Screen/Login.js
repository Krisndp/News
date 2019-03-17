import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
const { width, height } = Dimensions.get('window');
import { firebaseApp } from './Fire';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

    }
    // Đăng nhập firebase
    Login() {
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {console.log('s'),this.props.navigation.push('Main'),this.setState({email:'', password:''}), console.log('d')})
            .catch((error) => {
                console.log(error);
                Alert.alert(
                    'Đăng nhập thất bại'
                )
            });
            
    }

    // render giao diện chữ đăng nhập
    signIn() {
        if (this.state.email == '' || this.state.password.length < 8) {
            return (
                <View style={{ opacity: 0.3, backgroundColor: '#4876FF', width: width * 3 / 4, height: width / 10, marginTop: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                    <Text style={{ color: 'white', fontSize: width / 19 }}>Đăng nhập</Text>
                </View>
            )
        } else {
            return (
                <View style={{ backgroundColor: '#4876FF', width: width * 3 / 4, height: width / 10, marginTop: 20, borderRadius: 20 }}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => this.Login()}>
                        <Text style={{ color: 'white', fontSize: width / 19 }}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 8, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Image source={{ uri: "https://news.sky.com/resources/sky-news-logo.png?v=1?bypass-service-worker" }} style={{ width: width/1.2, height: width / 9 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput
                            placeholder="Nhập email của bạn."
                            onChangeText={(email) => { this.setState({ email }) }}
                            value={this.state.email}
                            style={{ fontSize: width / 22, paddingLeft: 20, backgroundColor: '#F5F5F5', height: height / 14, width: width * 3 / 4, }}
                            underlineColorAndroid='black'
                            multiline={false}
                        />
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <TextInput
                            placeholder="Nhập mật khẩu."
                            onChangeText={(password) => { this.setState({ password }) }}
                            value={this.state.password}
                            style={{ fontSize: width / 22, paddingLeft: 20, backgroundColor: '#F5F5F5', height: height / 14, width: width * 3 / 4, }}
                            underlineColorAndroid='black'
                            multiline={false}
                            secureTextEntry={true}
                        />
                    </View>

                    <View>
                        {this.signIn()}
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#4169E1', fontSize: width / 22 }}>Quên mật khẩu?</Text>
                    </View>
                </View>
                <View style={{ flex: 2, justifyContent: "center", alignItems: 'center', backgroundColor: 'white' }}>
                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View>
                            <Image source={{ uri: 'https://img.icons8.com/office/100/000000/horizontal-line.png' }} style={{ width: width / 3, height: height / 1000 }} />
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: width / 35 }} >HOẶC</Text>
                        </View>
                        <View>
                            <Image source={{ uri: 'https://img.icons8.com/office/100/000000/horizontal-line.png' }} style={{ width: width / 3, height: height / 1000 }} />
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={{ width: width * 2 / 3, height: width / 12, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: width / 21, color: 'white' }} >Tạo tài khoản mới</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}