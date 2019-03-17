import React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, Dimensions, Alert, ScrollView } from 'react-native';
import { firebaseApp } from './Fire';
const { width, height } = Dimensions.get('window');

export default class HistoryGD extends React.Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database();
        this.state = {
        }
    }



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5F5F5', }}>
                <View style={{ height: width / 7, backgroundColor: 'white', flexDirection: 'row' }}>
                    <TouchableOpacity onPress = {()=> this.props.navigation.pop()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <Image source={{ uri: 'https://img.icons8.com/material-outlined/96/000000/left.png' }} style={{ width: width / 14, height: width / 14 }} />
                    </TouchableOpacity>
                    <View style={{ flex: 8, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                        <Text style={{ margin: 10, fontSize: width / 18, fontWeight: 'bold', color: 'black' }}>Lịch sử giao dịch</Text>
                    </View>
                </View>

                <View style={{ width: width, backgroundColor: 'white', height: height, justifyContent:'center', alignItems:'center'}}>
                    <View style={{ justifyContent:'center', alignItems:'center'}}>
                        <Image style ={{width, height: height /3}} source = {require('../image/historyGD.jpg')} />
                    </View>
                    <Text style = {{ fontSize: width / 24,color:'black', fontWeight:'500'}}> Bạn chưa có giao dịch</Text>
                    <Text style = {{marginTop: 10, fontSize: width / 26, }}> Chưa có giao dịch phát sinh</Text>
                </View>

            </View>
        )
    }
}