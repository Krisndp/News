import { View, Text, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');

class ReadNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.getParam('item')
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5F5F5', }}>
                <TouchableOpacity onPress={() => this.props.navigation.pop()} style={{ height: width / 7, backgroundColor: 'white', flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <Image source={{ uri: 'https://img.icons8.com/material-outlined/96/000000/left.png' }} style={{ width: width / 14, height: width / 14 }} />
                    </View>
                    <View style={{ flex: 8, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10 }}>
                        <Text numberOfLines={1} style={{ margin: 10, fontSize: width / 24, fontWeight: 'bold', color: 'black' }}>{this.state.item.title}</Text>
                    </View>
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator = {false}>
                    <View style={{ marginTop: 10, backgroundColor: 'white', width}}>
                        <View style={{ marginLeft: 20, marginRight: 20 }}>
                            <Text style={{marginTop:10 ,color: 'black', fontSize: width / 28, fontWeight: '500', fontStyle: 'italic' }}>{this.state.item.path1}</Text>
                            <Image style={{marginTop:10 , width: width - 40, height: height / 4, borderRadius: 15 }} source={{ uri: this.state.item.image1 }} />
                            <Text style={{marginTop:10 , color: 'black', fontSize: width / 30 }}>{this.state.item.path2}</Text>
                            <Image style={{marginTop:10 , width: width - 40, height: height / 4, borderRadius: 15 }} source={{ uri: this.state.item.image2 }} />
                            <Text style={{marginTop:10 , color: 'black', fontSize: width / 30, fontStyle: 'italic' }}>{this.state.item.path3}</Text>
                            <Image style={{marginTop:10 , width: width - 40, height: height / 4, borderRadius: 15 }} source={{ uri: this.state.item.image3 }} />
                            <Text style={{marginTop:10 , color: 'black', fontSize: width / 30, fontWeight: '500' }}>{this.state.item.path4}</Text>
                            <Text style={{marginTop:10 , color: 'black', fontSize: width / 30, }}>{this.state.item.path5}</Text>
                            <Image style={{ marginTop:10 ,width: width - 40, height: height / 4, borderRadius: 15 }} source={{ uri: this.state.item.image4 }} />
                            <Text style={{ marginTop:10 , marginBottom:10 ,color: 'black', fontSize: width / 30, fontWeight: '500', fontStyle: 'italic' }}>{this.state.item.path6}</Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default ReadNews
