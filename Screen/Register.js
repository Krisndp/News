import React from 'react';
import { View, Text, Dimensions, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
const { width, height } = Dimensions.get('window');
import { firebaseApp } from './Fire';
import HeadComponent from '../Component/HeadComponent'

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rewritePassword: '',
        }

    }

    // Hàm đăng nhập sau khi đăng ký thành công
    Login() {
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { this.props.navigation.push('Main'), this.setState({ email: '', password: '' }) })
            .catch((error) => {
                console.log(error);
                Alert.alert(
                    'Đăng nhập thất bại'
                )
            })
    }

    // Hàm đăng ký tài khoản firebase
    Register() {
        if (this.state.password == this.state.rewritePassword) {
            firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    Alert.alert(
                        'Thông báo',
                        'Đăng ký thành công!',
                        [{ text: 'OK', onPress: () => { this.Login() } }]
                    )
                })
                .catch(function (error) {
                    console.log(error)
                    Alert.alert(
                        'Thông báo',
                        'Đăng ký thất bại!',
                        [{ text: 'OK' }]
                    )
                });
        } else {
            Alert.alert('Mật khẩu không trùng khớp!')
        }
    }

    // render giao diện chữ đăng ký TK
    signUp() {

        if (this.state.email == '' || this.state.password.length < 8 || this.state.rewritePassword == '') {
            return (
                <View style={{ opacity: 0.3, backgroundColor: '#4876FF', width: width * 3 / 4, height: width / 10, marginTop: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                    <Text style={{ color: 'white', fontSize: width / 20 }}>Đăng ký</Text>
                </View>
            )
        } else {
            return (
                <View style={{ backgroundColor: '#4876FF', width: width * 3 / 4, height: width / 10, marginTop: 20, borderRadius: 20 }}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => this.Register()}>
                        <Text style={{ color: 'white', fontSize: width / 20 }}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeadComponent nameHead='' back={() => this.props.navigation.navigate('Login')} />

                <View style={{ flex: 9, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                    <View>
                        <Image source={{ uri: "https://news.sky.com/resources/sky-news-logo.png?v=1?bypass-service-worker" }} style={{ width: width / 1.2, height: width / 9 }} />
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
                    <View style={{ marginTop: 8 }}>
                        <TextInput
                            placeholder="Nhập lại mật khẩu."
                            onChangeText={(rewritePassword) => { this.setState({ rewritePassword }) }}
                            value={this.state.rewritePassword}
                            style={{ fontSize: width / 22, paddingLeft: 20, backgroundColor: '#F5F5F5', height: height / 14, width: width * 3 / 4, }}
                            underlineColorAndroid='black'
                            multiline={false}
                            secureTextEntry={true}
                        />
                    </View>

                    <View>
                        {this.signUp()}
                    </View>

                </View>
            </View>
        )
    }
}