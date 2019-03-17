import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window')

class Noti extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noti: ''
        }
    }

    noti() {
        if (this.state.noti == '') {
            return (
                <View style={{ flexDirection: 'column', width, justifyContent: 'center', alignItems: 'center', margin:30 }}>
                    <Image style={{ width: width/2, height: height * 0.5 }} source={require('../image/speaker.jpg')}></Image>
                    <Text style={{ fontSize: width / 28, color: 'black', fontWeight:'bold' }}>
                        Bạn chưa có thông báo
                    </Text>
                    <Text style={{ fontSize: width / 28, color: '' ,}}>
                        Nhiều thông tin ưu đãi hấp dẫn sẽ gửi tới bạn, 
                    </Text>
                    <Text style={{ fontSize: width / 28, color: '' ,}}>
                        đừng quên cập nhật thông báo mới!
                    </Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
                <View style={{ height: width / 7, backgroundColor: 'white' }}>
                    <Text style={{ marginLeft:20, margin: 10, fontSize: width / 16, fontWeight: 'bold', color: 'black' }}>Thông báo</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {this.noti()}
                </View>
            </View>
        )
    }
}
export default Noti
