import { View, Text, Dimensions, FlatList } from 'react-native';
import React from 'react';
import { firebaseApp } from './Fire';
const { width, height } = Dimensions.get('window');
import NewsItem from '../Component/NewsItem'

class News extends React.Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database();
        this.state = {
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
            <View style={{ flex: 1 }}>
                <View style={{ height: width / 7, backgroundColor: 'white' }}>
                    <Text style={{  marginLeft:20,margin: 10, fontSize: width / 16, fontWeight: 'bold', color: 'black' }}>Tin tức</Text>
                </View>
                <View style={{marginBottom:60}}>
                    <FlatList
                        data={this.state.item}
                        renderItem={({ item }) => <NewsItem navigation = {()=> this.props.navigation.navigate('ReadNews', {item: item})} item={item} />}
                        keyExtractor={(item) => { item.id }}
                        showsVerticalScrollIndicator = {false}
                    />
                </View>


            </View>
        )
    }
}
export default News
