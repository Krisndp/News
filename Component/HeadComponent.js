import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

class HeadComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, width: width, backgroundColor: 'white', flexDirection: 'row'}}>
                <View style={{ flex: 1 / 10, marginLeft: 10 }}>
                    <TouchableOpacity style={{ flex: 1 ,  justifyContent: 'center', }} >
                        <Image source={{uri:"https://img.icons8.com/material-sharp/24/000000/left.png"}} style={{ width: width / 15, height: width / 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={{flex: 0.8, alignItems: 'flex-start', justifyContent:'center' }}>
                    <Text style={{ color: 'black', fontSize: width / 18, fontWeight: '100', marginLeft:20 }}></Text>
                </View>
                {this.props.next}
            </View>
        )
    }

}
export default HeadComponent