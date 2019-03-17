import React from 'react';
import { View, Image, TouchableOpacity, Text, Alert, FlatList, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

class NewsItem extends React.Component {

    render() {
        return (
            <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: width - 40, marginTop:5 }}>
                <TouchableOpacity onPress = {this.props.navigation} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: width - 40, height: height / 4, borderRadius: 20 }} source={{ uri: this.props.item.image1 }} />
                    </View>
                    <Text numberOfLines = {2} style={{ color: 'black', fontSize: width / 26, fontWeight: 'bold' }}>{this.props.item.title}</Text>
                    <View style={{ width, flexDirection: 'row' }}>
                        <View style={{ marginLeft: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 30, height: 30 }} source={require('../image/free.png')} />
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: width / 30, marginLeft: 10 }}>Miễn phí</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
export default NewsItem