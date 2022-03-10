import React from 'react'
import { View, Text ,StyleSheet,TextInput,FlatList,Image,Pressable} from 'react-native'
import { ProductConText } from '../../ProductConText';
export const Search = (props) => {
    const {navigation} = props;
    const {onSearch} = useContext(ProductConText);

    const renderItem = ({ item }) => {
        const {images, name,price ,quantity,_id} = item;
        return(
            <Pressable onPress={() => navigation.navigate('HomeStack', {id: _id})} style={styles.product}>
                <View style={styles.productImageContainer}>
                    <Image source={{uri: images[0]}} style={styles.productImage}  resizeMode='cover'/>
                </View>
                <View style={styles.productInfoContainer}>
                <Text numberOfLines={1} style={styles.productName}>{name}</Text>
                <Text style={styles.productPrice}>{price} VNĐ</Text>
                <Text style={styles.productQuanlity}>Còn {quantity} sản phẩm</Text>
                </View>
            </Pressable>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.textcontainer}>
            <Text style={styles.textSearch}>Tìm Kiếm</Text>
            </View>
            <View style={styles.textinputcontainer} showsVerticalScrollIndicator={false}>
            <TextInput  placeholder='Tìm Kiếm' style={styles.textInput}/>
            <View style={styles.searchIcon}>
            <Image source={require('../../../../img/search.png')}/>
            </View>
            </View>
            <FlatList
                      showsVerticalScrollIndicator={false}
                      data={data}
                      keyExtractor={()=> Math.random()}
                      renderItem={renderItem}

             />
        </View>
        
    )
}

const styles = StyleSheet.create({
    productQuanlity:{
        fontSize:14,
    },
    productPrice:{
        fontSize:16,
        fontWeight:'500',
    },
    productName:{
        fontSize:16,
        fontWeight:'500',
    },
    productInfoContainer:{
        marginLeft:15,
    },
    productImage:{
        width:'77%',
        height:'77%',
    },
    productImageContainer:{

        width:77,
        height:77,
        borderRadius:8,
        backgroundColor:'#F6F6F6',
        alignItems:'center',
        justifyContent:'center',
    },
    product:{
        flexDirection:'row',
        height:107,
        marginTop:20,
        paddingHorizontal:20,
    },
    searchIcon:{
        position:'absolute',
        right:30,
        top:8,
    },
    textInput: {
        width:'100%',
        height:'100%',
        borderBottomColor:'#221F1F',
        borderBottomWidth:1.5,
        paddingRight:25,
     },
     textinputcontainer: {
        paddingHorizontal:25,
        height:40,
        marginTop:4,
        position:'relative'
     },
    textSearch: {
        fontSize:16,
        fontWeight:'500',
        textTransform:'uppercase',
     },
     textcontainer: {
        justifyContent:'center',
        alignItems:'center',
     },
    container: {
        width:'100%',
        height:'100%',
        flexGrow:1,
        backgroundColor:'white',
        paddingTop:32,
        paddingHorizontal:30,
    },
})

var data = [
    {
        "sold": 97,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa48",
        "name": "Morisonia americana L.",
        "price": 2,
        "madein": "Brazil",
        "quantity": 5228445665,
        "category": "61d11bf386511f0016f490c9",
        "size": "L",
        "createdAt": "2021-12-29T13:27:45.000Z",
        "updatedAt": "2021-12-03T16:19:32.000Z"
    },
    {
        "sold": 97,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa40",
        "name": "Scrophularia montana Wooton",
        "price": 2,
        "madein": "China",
        "quantity": 3822710584,
        "category": "61d11bf386511f0016f490c9",
        "size": "XL",
        "createdAt": "2021-12-20T19:38:35.000Z",
        "updatedAt": "2021-05-20T13:39:15.000Z"
    },
    {
        "sold": 79,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa47",
        "name": "Guillenia Greene",
        "price": 3,
        "madein": "Portugal",
        "quantity": 5817928099,
        "category": "61d11bf386511f0016f490c9",
        "size": "XS",
        "createdAt": "2021-12-15T21:41:35.000Z",
        "updatedAt": "2020-12-17T14:45:51.000Z"
    },
    {
        "sold": 73,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa3a",
        "name": "Lygeum Loefl. ex L.",
        "price": 3,
        "madein": "Mexico",
        "quantity": 3781040078,
        "category": "61d11bf386511f0016f490c9",
        "size": "2XL",
        "createdAt": "2021-11-18T02:13:41.000Z",
        "updatedAt": "2021-12-21T06:00:50.000Z"
    },
    {
        "sold": 87,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa3c",
        "name": "Oryctes nevadensis S. Watson",
        "price": 3,
        "madein": "Indonesia",
        "quantity": 2432908536,
        "category": "61d11bf386511f0016f490c9",
        "size": "XS",
        "createdAt": "2021-10-29T23:33:53.000Z",
        "updatedAt": "2020-12-16T02:06:23.000Z"
    },
    {
        "sold": 85,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa43",
        "name": "Vicia villosa Roth ssp. varia (Host) Corb.",
        "price": 1,
        "madein": "South Africa",
        "quantity": 4472671289,
        "category": "61d11bf386511f0016f490c9",
        "size": "S",
        "createdAt": "2021-10-22T01:43:56.000Z",
        "updatedAt": "2021-06-21T03:37:57.000Z"
    },
    {
        "sold": 79,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa41",
        "name": "Dermatocarpon intestiniforme (Körb.) Hasse",
        "price": 2,
        "madein": "China",
        "quantity": 8447881237,
        "category": "61d11bf386511f0016f490c9",
        "size": "3XL",
        "createdAt": "2021-09-10T05:50:34.000Z",
        "updatedAt": "2021-07-20T22:40:06.000Z"
    },
    {
        "sold": 57,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa49",
        "name": "Spergularia diandra (Guss.) Held. & Sart.",
        "price": 3,
        "madein": "China",
        "quantity": 4012724728,
        "category": "61d11bf386511f0016f490c9",
        "size": "XS",
        "createdAt": "2021-08-31T15:26:30.000Z",
        "updatedAt": "2021-03-09T20:53:17.000Z"
    },
    {
        "sold": 74,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa44",
        "name": "Verrucaria elaeomelaena (A. Massal.) Arnold",
        "price": 2,
        "madein": "Estonia",
        "quantity": 7197080353,
        "category": "61d11bf386511f0016f490c9",
        "size": "M",
        "createdAt": "2021-08-30T22:50:41.000Z",
        "updatedAt": "2021-09-29T06:57:30.000Z"
    },
    {
        "sold": 74,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa3f",
        "name": "Astragalus feensis M.E. Jones",
        "price": 3,
        "madein": "China",
        "quantity": 9418140500,
        "category": "61d11bf386511f0016f490c9",
        "size": "XS",
        "createdAt": "2021-08-27T16:27:46.000Z",
        "updatedAt": "2021-06-22T08:50:29.000Z"
    },
    {
        "sold": 89,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa45",
        "name": "Angelica archangelica L. ssp. norvegica (Rupr.) Nordh.",
        "price": 2,
        "madein": "Portugal",
        "quantity": 9568154498,
        "category": "61d11bf386511f0016f490c9",
        "size": "M",
        "createdAt": "2021-05-22T22:58:01.000Z",
        "updatedAt": "2021-05-10T07:46:32.000Z"
    },
    {
        "sold": 90,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa3b",
        "name": "Eucalyptus delegatensis R.T. Baker",
        "price": 2,
        "madein": "Indonesia",
        "quantity": 3801758691,
        "category": "61d11bf386511f0016f490c9",
        "size": "3XL",
        "createdAt": "2021-03-25T23:21:45.000Z",
        "updatedAt": "2021-10-07T08:02:19.000Z"
    },
    {
        "sold": 94,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa46",
        "name": "Gentiana douglasiana Bong.",
        "price": 3,
        "madein": "Georgia",
        "quantity": 9419950686,
        "category": "61d11bf386511f0016f490c9",
        "size": "XL",
        "createdAt": "2021-03-01T07:13:38.000Z",
        "updatedAt": "2021-05-29T16:59:48.000Z"
    },
    {
        "sold": 82,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa3e",
        "name": "Aethusa cynapium L.",
        "price": 2,
        "madein": "Somalia",
        "quantity": 1632117070,
        "category": "61d11bf386511f0016f490c9",
        "size": "L",
        "createdAt": "2021-02-16T08:01:58.000Z",
        "updatedAt": "2021-07-04T15:18:34.000Z"
    },
    {
        "sold": 81,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa4a",
        "name": "Viola purpurea Kellogg",
        "price": 2,
        "madein": "Nigeria",
        "quantity": 8412462128,
        "category": "61d11bf386511f0016f490c9",
        "size": "S",
        "createdAt": "2021-02-14T13:28:37.000Z",
        "updatedAt": "2021-03-24T07:40:07.000Z"
    },
    {
        "sold": 70,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa3d",
        "name": "Cardamine nuttallii Greene",
        "price": 2,
        "madein": "Japan",
        "quantity": 3475860462,
        "category": "61d11bf386511f0016f490c9",
        "size": "L",
        "createdAt": "2021-01-18T16:41:57.000Z",
        "updatedAt": "2020-12-18T04:01:41.000Z"
    },
    {
        "sold": 65,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa42",
        "name": "Centrosema sagittatum (Humb. & Bonpl. ex Willd.) Brandegee ex Riley",
        "price": 3,
        "madein": "Guatemala",
        "quantity": 8551595221,
        "category": "61d11bf386511f0016f490c9",
        "size": "XS",
        "createdAt": "2021-01-15T10:05:56.000Z",
        "updatedAt": "2020-12-16T23:03:48.000Z"
    },
    {
        "sold": 92,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa4b",
        "name": "Capsicum baccatum L.",
        "price": 2,
        "madein": "Ukraine",
        "quantity": 1298544477,
        "category": "61d11bf386511f0016f490c9",
        "size": "XS",
        "createdAt": "2020-12-16T06:39:04.000Z",
        "updatedAt": "2021-04-08T22:08:54.000Z"
    },
    {
        "sold": 54,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa4c",
        "name": "Potamogeton ×prussicus Hagstr.",
        "price": 3,
        "madein": "Russia",
        "quantity": 8556745887,
        "category": "61d11bf386511f0016f490c9",
        "size": "3XL",
        "createdAt": "2020-12-08T05:10:42.000Z",
        "updatedAt": "2021-05-03T16:20:30.000Z"
    },
    {
        "sold": 85,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa4d",
        "name": "Pediocactus simpsonii (Engelm.) Britton & Rose var. simpsonii",
        "price": 1,
        "madein": "Portugal",
        "quantity": 4392236119,
        "category": "61d11bf386511f0016f490c9",
        "size": "M",
        "createdAt": "2020-12-03T02:31:49.000Z",
        "updatedAt": "2021-04-08T18:02:31.000Z"
    }
]