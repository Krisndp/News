import React from 'react';
import {View, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { firebaseApp } from './Fire';

export default class Up extends React.Component{
    constructor(props){
        super(props);
        this.itemRef = firebaseApp.database();
        this.state = {
            title:'',
            path1:'',
            path2:'',
            path3:'',
            path4:'',
            path5: '',
            path6:'',
            image1:'',
            image2:'',
            image3:'',
            image4:'',
            image5:'',
            image6:'',
            seen:0,
            
        
        }
    }

    get creatTime(){
        return firebase.database.ServerValue.TIMESTAMP;
    }

    componentWillMount() {
        console.log('kk')
        var creatTime = firebase.database.ServerValue.TIMESTAMP;
        console.log(this.creatTime + 'hh');
        var time = new Date(this.creatTime);
        console.log(time);
                //var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.setState({ creatTime: time.getHours() + ':' + time.getMinutes() + ':' + time.getDay() })
    }
    up(){
        this.itemRef.ref('News').child('World').push({
            title: this.state.title,
            path1: this.state.path1,
            path2: this.state.path2,
            path3: this.state.path3,
            path4: this.state.path4,
            path5: this.state.path5,
            path6: this.state.path6,
            image1: this.state.image1,
            image2: this.state.image2,
            image3: this.state.image3,
            image4: this.state.image4,
            image5: this.state.image5,
            image6: this.state.image6,
            seen: this.state.seen,
            //username: this.state.username,
            creatTime: this.creatTime,
            //sex: this.state.sex,
        }).then(() => {
            Alert.alert('Cập nhật thông tin.')
        }).catch((error) => { console.log(error) });
    }

    render(){
        return(
            <View>
                <TouchableOpacity style = {{width: 60, height: 100, backgroundColor: 'blue'}} onPress={()=> this.up()}>
                    
                </TouchableOpacity>
            </View>
        )
    }
}