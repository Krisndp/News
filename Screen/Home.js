import { View, Text, ImageBackground, TouchableOpacity, Alert, Dimensions, FlatList, ScrollView, Image } from 'react-native';
import React from 'react';
import { firebaseApp } from './Fire';
import HotItem from '../Component/HotItem';
const { width, height } = Dimensions.get('window');
import New from '../Component/New';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database();
        this.state = {
            username: '',
            point: 0,
            item: [
                {
                    id: Math.round(Math.random() * 10000000000),
                    title: "Mourinho: 'Không có Messi, Ronaldo đã giành 10 QBV và ngược lại'",
                    path1: "Cựu HLV của Man United cho rằng Ronaldo và Messi vừa may mắn, lại vừa không may khi phải chơi bóng cùng thời với nhau.",
                    path2: "Loạt trận vòng 1/8 Champions League giữa tuần qua chính là sân khấu cho Ronaldo và Messi. Nếu như Ronaldo tỏa sáng với cú hat-trick tung lưới Atletico Madrid thì Messi cũng đóng góp 2 bàn thắng, 2 kiến tạo trong chiến thắng 5-1 của Barca trước Lyon.",
                    path3: 'Màn trình diễn của 2 ngôi sao này khiến cả thế giới một lần nữa phải so sánh họ với nhau. Khi được hỏi về Messi và Ronaldo, HLV Jose Mourinho thừa nhận đây là 2 cầu thủ xuất sắc nhất trong 10 năm trở lại đây.',
                    path4: 'Mourinho thể hiện góc nhìn của mình trên RT Sport:"Tôi nghĩ Messi và Ronaldo vừa may, lại vừa không may khi chơi cùng thời với nhau. Họ may mắn bởi lẽ họ cạnh tranh lẫn nhau, luôn nhìn vào nhau. Xét theo cách tích cực, họ là động lực của nhau với hàng loạt hat-trick, hàng loạt chức vô địch hay Chiếc giày vàng".',
                    path6: 'Ông nói: "Tôi gọi họ là những tên "tiểu quỷ", những người chỉ đứng sau Ronaldo và Messi. Chính 2 cầu thủ này là những đồng lực tuyệt vời cho Neymar, Mbappe hay Griezmann phấn đấu bởi lẽ, Ronaldo và Messi sẽ không thể chơi bóng mãi".',
                    path5: 'Mourinho cho rằng những cái tên thách thức bộ đôi này phải lấy chính CR7 hay M10 làm động lực.',
                    image1: 'https://znews-photo.zadn.vn/w660/Uploaded/mdf_usoddd/2019_03_15/messinoigivehattrickcuaronaldoochampionsleague1552525774.jpg',
                    image2: 'https://znews-photo.zadn.vn/w660/Uploaded/pgi_ubnvgunau/2019_03_15/2_4.jpg',
                    image3: 'https://znews-photo.zadn.vn/w660/Uploaded/pgi_ubnvgunau/2019_03_15/194938188jpggallery.jpg',
                    image4: 'https://znews-photo.zadn.vn/w660/Uploaded/pgi_ubnvgunau/2019_03_15/0_GettyImages1128305332_2.jpg',
                    creatTime: '15/03/2019'
                },
                {
                    id: Math.round(Math.random() * 10000000000),
                    title: "Mourinho: 'Không có Messi, Ronaldo đã giành 10 QBV và ngược lại'",
                    path1: "Cựu HLV của Man United cho rằng Ronaldo và Messi vừa may mắn, lại vừa không may khi phải chơi bóng cùng thời với nhau.",
                    path2: "Loạt trận vòng 1/8 Champions League giữa tuần qua chính là sân khấu cho Ronaldo và Messi. Nếu như Ronaldo tỏa sáng với cú hat-trick tung lưới Atletico Madrid thì Messi cũng đóng góp 2 bàn thắng, 2 kiến tạo trong chiến thắng 5-1 của Barca trước Lyon.",
                    path3: 'Màn trình diễn của 2 ngôi sao này khiến cả thế giới một lần nữa phải so sánh họ với nhau. Khi được hỏi về Messi và Ronaldo, HLV Jose Mourinho thừa nhận đây là 2 cầu thủ xuất sắc nhất trong 10 năm trở lại đây.',
                    path4: 'Mourinho thể hiện góc nhìn của mình trên RT Sport:"Tôi nghĩ Messi và Ronaldo vừa may, lại vừa không may khi chơi cùng thời với nhau. Họ may mắn bởi lẽ họ cạnh tranh lẫn nhau, luôn nhìn vào nhau. Xét theo cách tích cực, họ là động lực của nhau với hàng loạt hat-trick, hàng loạt chức vô địch hay Chiếc giày vàng".',
                    path6: 'Ông nói: "Tôi gọi họ là những tên "tiểu quỷ", những người chỉ đứng sau Ronaldo và Messi. Chính 2 cầu thủ này là những đồng lực tuyệt vời cho Neymar, Mbappe hay Griezmann phấn đấu bởi lẽ, Ronaldo và Messi sẽ không thể chơi bóng mãi".',
                    path5: 'Mourinho cho rằng những cái tên thách thức bộ đôi này phải lấy chính CR7 hay M10 làm động lực.',
                    image1: 'https://znews-photo.zadn.vn/w660/Uploaded/mdf_usoddd/2019_03_15/messinoigivehattrickcuaronaldoochampionsleague1552525774.jpg',
                    image2: 'https://znews-photo.zadn.vn/w660/Uploaded/pgi_ubnvgunau/2019_03_15/2_4.jpg',
                    image3: 'https://znews-photo.zadn.vn/w660/Uploaded/pgi_ubnvgunau/2019_03_15/194938188jpggallery.jpg',
                    image4: 'https://znews-photo.zadn.vn/w660/Uploaded/pgi_ubnvgunau/2019_03_15/0_GettyImages1128305332_2.jpg',
                    creatTime: '15/03/2019'
                },
                {
                    id: Math.round(Math.random() * 10000000000),
                    title: "Mourinho: 'Không có Messi, Ronaldo đã giành 10 QBV và ngược lại'",
                    path1: "Cựu HLV của Man United cho rằng Ronaldo và Messi vừa may mắn, lại vừa không may khi phải chơi bóng cùng thời với nhau.",
                    path2: "Loạt trận vòng 1/8 Champions League giữa tuần qua chính là sân khấu cho Ronaldo và Messi. Nếu như Ronaldo tỏa sáng với cú hat-trick tung lưới Atletico Madrid thì Messi cũng đóng góp 2 bàn thắng, 2 kiến tạo trong chiến thắng 5-1 của Barca trước Lyon.",
                    path3: 'Màn trình diễn của 2 ngôi sao này khiến cả thế giới một lần nữa phải so sánh họ với nhau. Khi được hỏi về Messi và Ronaldo, HLV Jose Mourinho thừa nhận đây là 2 cầu thủ xuất sắc nhất trong 10 năm trở lại đây.',
                    path4: 'Mourinho thể hiện góc nhìn của mình trên RT Sport:"Tôi nghĩ Messi và Ronaldo vừa may, lại vừa không may khi chơi cùng thời với nhau. Họ may mắn bởi lẽ họ cạnh tranh lẫn nhau, luôn nhìn vào nhau. Xét theo cách tích cực, họ là động lực của nhau với hàng loạt hat-trick, hàng loạt chức vô địch hay Chiếc giày vàng".',
                    path6: 'Ông nói: "Tôi gọi họ là những tên "tiểu quỷ", những người chỉ đứng sau Ronaldo và Messi. Chính 2 cầu thủ này là những đồng lực tuyệt vời cho Neymar, Mbappe hay Griezmann phấn đấu bởi lẽ, Ronaldo và Messi sẽ không thể chơi bóng mãi".',
                    path5: 'Mourinho cho rằng những cái tên thách thức bộ đôi này phải lấy chính CR7 hay M10 làm động lực.',
                    image1: 'https://znews-photo.zadn.vn/w660/Uploaded/mdf_usoddd/2019_03_15/messinoigivehattrickcuaronaldoochampionsleague1552525774.jpg',
                    image2: 'https://znews-photo.zadn.vn/w660/Uploaded/pgi_ubnvgunau/2019_03_15/2_4.jpg',
                    image3: 'https://znews-photo.zadn.vn/w660/Uploaded/pgi_ubnvgunau/2019_03_15/194938188jpggallery.jpg',
                    image4: 'https://znews-photo.zadn.vn/w660/Uploaded/pgi_ubnvgunau/2019_03_15/0_GettyImages1128305332_2.jpg',
                    creatTime: '15/03/2019'
                }
            ],
        }
    }

    // componentWillMount() {
    //     this.listenForItem(this.itemRef);
    // }

    // listenForItem(itemRef) {
    //     console.log('Kk')
    //     var item = [];
    //     itemRef.ref('News/Hot').on('child_added', (data) => {
    //         console.log('Kk');
    //         item.push({
    //             id: data.key,
    //             creatTime: data.val().creatTime,
    //             title: data.val().title,
    //             image1: data.val().image1,
    //             seen: data.val().seen,
    //         });

    //         console.log(item.sort(function (a, b) { return b.creatTime - a.creatTime }));
    //         this.setState({ item: item.sort(function (a, b) { return b.creatTime - a.creatTime }), value: item });

    //     })
    // }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5F5F5', }}>
                <ScrollView >
                    <ImageBackground style={{ width: width, height: height / 3 - 30, flexDirection: 'column' }} source={{ uri: "https://t3.ftcdn.net/jpg/01/12/48/06/240_F_112480637_NthVilGI1uV3H6nKozu4pr5SGF4FC0qQ.jpg" }}>
                        <View style={{ marginLeft: 20, justifyContent: 'center', marginTop: 20 }}>
                            <Text style={{ color: 'white', fontSize: width / 28 }}>Xin chào {this.state.username}</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20, backgroundColor: 'white', borderRadius: 15, flexDirection: 'column', borderColor: 'grey', borderWidth: 0.3 }}>
                            <TouchableOpacity onPress= {()=> this.props.navigation.navigate('Point')} style={{ borderRadius: 20, flexDirection: 'row', height: width / 8, borderBottomColor: ' grey', borderBottomWidth: 0.3 }}>
                                <View style={{ justifyContent: 'center', flex: 6 }}>
                                    <Text style={{ marginLeft: 20, color: 'black', fontWeight: 'bold', fontSize: width / 28 }}>Điểm tích lũy</Text>
                                </View>
                                <View style={{ justifyContent: 'flex-end', flex: 4, flexDirection: 'row', alignItems: 'center', marginRight:10 }}>
                                    <Image style={{ width: 30, height: 30 }} source={require('../image/free.png')} />
                                    <Text>{this.state.point}</Text>
                                    <Image style={{ width: width / 18, height: width / 18 }} source={{ uri: 'https://img.icons8.com/ios/50/000000/more-than.png' }} />
                                </View>
                            </TouchableOpacity>

                            <View style={{ backgroundColor: 'white', borderRadius: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                                <TouchableOpacity  style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1 }}>
                                    <Image style={{ width: width / 8, height: width / 8 }} source={require('../image/addFolder.png')} />
                                    <Text style={{ fontSize: width / 32, color: 'black', fontWeight: 'bold' }}> Nạp điểm</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1 }}>
                                    <Image style={{ width: width / 8, height: width / 8 }} source={require('../image/voucher.png')} />
                                    <Text style={{ fontSize: width / 32, color: 'black', fontWeight: 'bold' }}> vouchers</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress= {()=> this.props.navigation.navigate('HistoryGD')} style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1 }}>
                                    <Image style={{ width: width / 8, height: width / 8 }} source={require('../image/listView.png')} />
                                    <Text style={{ fontSize: width / 32, color: 'black', fontWeight: 'bold' }}> Giao dich</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>

                    <TouchableOpacity style={{ height: height / 11, marginLeft: 20, marginRight: 20, margin: 10, backgroundColor: 'white', borderRadius: 15, flexDirection: 'row', borderColor: 'grey', borderWidth: 0.3 }}>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: width / 8, height: width / 8 }} source={{ uri: 'https://media.istockphoto.com/vectors/scan-qr-code-with-mobile-phone-symbol-app-electronic-digital-barcode-vector-id1030355144' }} />
                        </View>
                        <View style={{ flex: 7, justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ fontSize: width / 28, color: 'black', fontWeight: 'bold' }}>Trải nghiệm Scan & Go</Text>
                            <Text style={{ fontSize: width / 34 }}>Thanh toán siêu tốc-Khuyến mại cực sốc</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                            <Image style={{ width: width / 18, height: width / 18 }} source={{ uri: 'https://img.icons8.com/ios/50/000000/more-than.png' }} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ width: width -20, backgroundColor: 'white', flexDirection: 'column',marginLeft: 10, marginRight:10 }}>
                        <View style={{ flex: 1, margin: 10, flexDirection: 'row' }}>
                            <View style={{ flex: 6, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ color: 'black', fontSize: width / 27, fontWeight: 'bold' }}>Tin nóng</Text>
                            </View>
                            <TouchableOpacity  onPress = {()=> this.props.navigation.navigate('HotNews')} style={{ flex: 4, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ color: 'blue', fontSize: width / 27, }}>Tất cả</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10, marginRight: 10 }}>
                            <FlatList
                                data={this.state.item}
                                renderItem={({ item }) => <HotItem navigation = {()=> this.props.navigation.navigate('ReadNews', {item: item})} item={item} />}
                                keyExtractor={(item) => { item.id }}
                                horizontal={true}
                                refreshing = {true}
                                removeClippedSubviews = {true}
                                showsHorizontalScrollIndicator = {false}
                            />
                        </View>
                    </View>
                    <View style={{width: width -20, backgroundColor: 'white', flexDirection: 'column',marginLeft: 10, marginRight: 10, }}>
                        <View style={{ flex: 1, margin: 10, flexDirection: 'row' }}>
                            <View style={{ flex: 6, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ color: 'black', fontSize: width / 27, fontWeight: 'bold' }}>Tin tức</Text>
                            </View>
                            <TouchableOpacity onPress = {()=> this.props.navigation.navigate('AllNews')} style={{ flex: 4, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ color: 'blue', fontSize: width / 27, }}>Tất cả</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10, marginRight: 10, marginBottom:10 }}>
                            <FlatList
                                data={this.state.item}
                                renderItem={({ item }) => <New navigation = {()=> this.props.navigation.navigate('ReadNews', {item: item})} item={item} />}
                                keyExtractor={(item) => { item.id }}
                                horizontal={true}
                                refreshing = {true}
                                removeClippedSubviews = {true}
                                showsHorizontalScrollIndicator = {false}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default Home
