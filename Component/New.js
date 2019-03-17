import React from 'react';
import { View, Image, TouchableOpacity, Text, Alert, FlatList, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

class New extends React.Component {

    render() {
        return (
            <View style={{ marginLeft: 5, marginRight:5 , marginTop:5 , justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', width: width/2.5, height:height/5 }}>
                <TouchableOpacity onPress = {this.props.navigation} style={{ flex: 1,}}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: width/2.5, height: height / 8, borderRadius: 10 }} source={{ uri: this.props.item.image1 }} />
                    </View>
                    <Text numberOfLines = {2} style={{ color: 'black', fontSize: width / 30, fontWeight: 'bold' }}>{this.props.item.title}</Text>
                    <View style={{ flexDirection: 'row', justifyContent:'flex-start', alignItems:'center'}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 20, height: 20 }} source={require('../image/free.png')} />
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: width / 32, marginLeft: 10 }}>Miễn phí</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
export default New