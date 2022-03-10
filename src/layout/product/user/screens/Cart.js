import { StyleSheet, Text, View, FlatList, Image,Pressable, Dimensions,Modal,ToastAndroid } from 'react-native';
import React,{useContext,useEffect,useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ProductConText } from '../../ProductConText';
const CardItem = (props) => {
    const {cart,upDateCart } = props;
    const renderItem = ({ item }) => {
      
        const { product, quantity, price, checkbox } = item;
        

        return (
           
            <View style={styles.itemcontainer}>
                {/* <View style={styles.checkboxcontainer}>
                    {
                        checkbox == true ?
                            <FontAwesome name="check-square" size={24} color="black" />
                            :
                            <Feather name="square" size={24} color="black" />
                    }

                </View> */}
                <View style={styles.imagecontainer}>
                    <Image style={styles.image} resizeMode='cover' source={{ uri: product.images[0] }} />
                </View>
                <View style={styles.infocontainer}>
                    <View>
                        <Text numberOfLines={1} >{product.name}</Text>
                    </View>
                    <View>
                        <Text>{product.price}đ</Text>
                    </View>
                    <View style={styles.quantityAction}>
                        <Text onPress={()=>upDateCart(product, quantity>1?quantity-1:0, price, true )} style={styles.quantityRemove}>-</Text>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <Text onPress={()=>upDateCart(product, quantity+1, price, true )} style={styles.quantityAdd} >+</Text>
                        <Text style={styles.quantityXoa} >Xóa</Text>
                    </View>

                </View>

            </View>
           
        )
    }
    return (
        <FlatList
            data={cart}
            renderItem={renderItem}
            style={styles.flatlistContainer}
            keyExtractor={item => Math.random()}
        />
    )
}
const DeleteModel = (props) =>{
    const {isShowDeleteModel,setIsShowDeleteModel,setdata} = props;
    const {setcart} = useContext(ProductConText);
    const dl=()=>{
        setIsShowDeleteModel(false);
        setcart([...[]]);
        setdata([...[]]);
    }
    return(
        <Modal animationType="slide"
        transparent={true}
        visible={isShowDeleteModel}
        >
            <View style={styles.modelxoaConter}>
            <View style={styles.modelxoaView}>
                <Text style={{fontSize:20,textAlign:'center',marginTop:10,}}>Xác nhận xoá đơn hàng?</Text>
                <Text style={{fontSize:15,opacity:0.5,textAlign:'center',}}>Thao tác này sẽ không thể khôi phục</Text>
                
                <Pressable onPress={dl} style={styles.dongyxoa}  >
                <Text style={styles.dongyxoatext} >Đồng ý</Text>
                
            </Pressable>
            <Text onPress={() => setIsShowDeleteModel(false)} style={{fontSize:16,textAlign:'center',marginBottom:10,marginTop:10,}}>Hủy bỏ</Text>
            </View>
            </View>
        </Modal>
    )
}

const CheckoutModel = (props) =>{
    const {isShowModel,setIsShowModel,setdata} = props;
    const {  SaveCart } = useContext(ProductConText);
    const checkO = async()=>{
        await SaveCart();
        setdata([...[]]);
        ToastAndroid.show('Thanh Toan Thành Công',ToastAndroid.BOTTOM);
        setIsShowModel(false);
    }
    return(
        <Modal animationType="slide"
        transparent={true}
        visible={isShowModel}
        
        >
            <View style={styles.modelConter}>
            <View style={styles.modelView}>
                <Text style={{fontSize:20,textAlign:'center',marginTop:10,}}>Xác nhận thanh toán</Text>
                <Pressable onPress={checkO} style={styles.dongy}  >
                <Text  style={styles.dongytext} >Đồng ý</Text>
                
            </Pressable>
            <Text onPress={() => setIsShowModel(false)} style={styles.cancer}>Hủy bỏ</Text>
            </View>
            </View>
        </Modal>
    )
}
const Cart = (props) => {
    const{navigation} = props;
    
    const {  upDateCart,getCart,setcart,cart } = useContext(ProductConText);
    const [data, setdata] = useState([...cart]);
    useEffect(() => {
        setdata([]);
       
        const unsubscribe = navigation.addListener('focus', () => {
            const res = getCart();
            setdata([...res]);
        });
    
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
      }, [navigation]);
    
      
   
    const [isShowModel,setIsShowModel] = useState(false);
    const [isShowDeleteModel,setIsShowDeleteModel] = useState(false);
    const isShowcheckout=()=>{
        const items = data.filter(item => item) || [];
        let total=0;
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            total += element.quantity * element.price;
        }
        return {isShow: items.length>0,total:total};
        
    }
    return (
        
        <View style={styles.container}>
            <View style={styles.textcontainer}>
                <Text style={styles.textgiohang}>GIỎ HÀNG</Text>
                <FontAwesome onPress={() => setIsShowDeleteModel(true)} style={styles.trash} name="trash-o" size={24} color="black" />
            </View>
            <View >
                {
                    data.length == 0 ?
                        <View>
                            <Text style={styles.emty}>Giỏ hàng của bạn đang trống</Text>
                        </View> :
                        <CardItem upDateCart={upDateCart} cart={data}/>
                }
            </View>
            <View style={styles.checkoutContainer}>
                {
                    isShowcheckout().isShow==true?
                    <>
                    <View style={styles.totolContainer}>
                    <Text style={{opacity:0.5,fontSize:16,}}>Tạm Tính</Text>
                    <Text style={{fontSize:20,}}>{isShowcheckout().total}đ</Text>
                </View>
                <Pressable style={styles.muahang} onPress={() => setIsShowModel(true)} >
                <Text style={styles.muahangtext} >Tiếp Tục Thanh Toán</Text>
                <AntDesign name="arrowright" size={24} color="white" />
            </Pressable>
                    </>:<></>
                }
                
            </View>
           <CheckoutModel isShowModel={isShowModel} setIsShowModel={setIsShowModel} setdata={setdata}/>
           <DeleteModel isShowDeleteModel={isShowDeleteModel} setIsShowDeleteModel={setIsShowDeleteModel} setdata={setdata}/>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    cancer:{
        textAlign:'center',marginBottom:10,marginTop:10,
        fontSize:16,
    },
    dongytext:{
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:20,
        color:'white',
    },
    dongy:{
        width:300,
        height:40,
        backgroundColor:'#007537',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:10,
        paddingHorizontal:26,
        borderRadius:4,
    },
    modelView:{
        paddingHorizontal:28,
        textAlign:'center',
        backgroundColor:'white',
        alignItems:'center',
        margin:20,
        width:'90%',
        borderRadius:8,
        padding:20,
    },
    modelConter:{
        justifyContent:'flex-end',
        alignItems:'center',
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        
    },
    dongyxoatext:{
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:20,
        color:'white',
    },
    dongyxoa:{
        width:300,
        height:40,
        backgroundColor:'#007537',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:10,
        paddingHorizontal:26,
        borderRadius:4,
    },
    modelxoaView:{
        paddingHorizontal:28,
        textAlign:'center',
        backgroundColor:'white',
        alignItems:'center',
        margin:20,
        width:'90%',
        borderRadius:8,
        padding:20,
    },
    modelxoaConter:{
        justifyContent:'flex-end',
        alignItems:'center',
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    flatlistContainer:{
        maxHeight:Dimensions.get('window').height -180,
    },
    muahang:{
        width:'100%',
        height:50,
        backgroundColor:'#007537',
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginTop:10,
        paddingHorizontal:26,
    
        borderRadius:8,
    
      },
      muahangtext:{
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:25,
        color:'white',
      },
    totolContainer:{
     justifyContent:'space-between',
     flexDirection:'row',
    },
    checkoutContainer:{
        paddingHorizontal:28,
        position:'absolute',
        width:'100%',
        bottom:10,
       },
    trash:{
       position:'absolute',
       right:20,
    },
    quantityXoa: {
        borderBottomColor: 'black',
        fontSize: 16,
        borderBottomWidth: 1,
    },
    quantityRemove: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 22.5,
        height: 22.5,
        textAlign: 'center',
        color: '#3A3A3A',
        fontSize: 18,
    },
    quantity: {
        color: '#3A3A3A',
        fontSize: 18,
    },
    quantityAdd: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 22.5,
        height: 22.5,
        textAlign: 'center',
        color: '#3A3A3A',
        fontSize: 18,
    },
    quantityAction: {

        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: '80%',
        height: '80%',
    },
    infocontainer: {
      
    },
    imagecontainer: {
        width: 77,
        height: 77,
        borderRadius: 8,
        marginLeft: 16,
    },
    checkboxcontainer: {
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemcontainer: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        marginVertical: 24,
    },
    emty: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: '500',
    },
    textgiohang: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',

    },
    textcontainer: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative',
    },
    container: {
        flex: 1,
       
        
        backgroundColor: 'white',
        position:'relative',
    },
});

