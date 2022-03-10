import { StyleSheet, Text, View ,Image,Pressable,ToastAndroid} from 'react-native';
import React,{useContext,useEffect,useState} from 'react';
import PagerView from 'react-native-pager-view';
import { ProductConText } from '../../ProductConText';

const PagerViewer = (props) =>{
  const {product}= props; 
  const {price,madein,size,quantity,_id} = product;
  const {  upDateCart,cart } = useContext(ProductConText);
  
   
    const getQuantity = () => {
      if(cart.length ==0){
          return 0;
      }
      let item = cart.filter(i => i.product._id == _id);
      if (item.length > 0){
          return item[0].quantity;
      }
      return 0;
  }

  const [number, setNumber] = useState(getQuantity());

  const onNumberChange = (isAdd) => {
      if (isAdd == true) {
          setNumber(number + 1);
      } else if (isAdd == false && number >= 1) {
          setNumber(number - 1);
      }
  }
    
    const chonMua=()=>{
      if(number==0){
        ToastAndroid.show('So Luong Khong Duoc Bang 0',ToastAndroid.BOTTOM);
      }else{
        upDateCart(product,number,price,true);
        ToastAndroid.show('Cập Nhật Giỏ Hàng Thành Công',ToastAndroid.BOTTOM);
      }
       
    }
    return(
      <>
      <View style={styles.productinfo}>
      <Text style={styles.productinfogia} >{price}đ</Text>
      <Text style={styles.productinfochitiettext}>Chi tiết sản phẩm</Text>
      <View style={styles.productinfosize}>
      <Text >Kích Cỡ</Text>
      <Text >{size}</Text>
      </View>
      <View style={styles.productinfomadein}>
      <Text >Xuất xứ</Text>
      <Text >{madein}</Text>
      </View>
      <View style={styles.productinfoquality}>
      <Text >Tình trạng</Text>
      <Text style={{color:'#007537'}}>Còn {quantity} sp</Text>
      </View>
      
      
    </View>

    <View style={styles.cardProcessContainer}>

    <View style={styles.processQualyti}>
      <Text style={styles.quantityText}>Đã chọn {number} sản phẩm</Text>
      <View style={styles.quantityAction}>
        <Text style={styles.quantityRemove} onPress={() => onNumberChange(false)}>-</Text>
        <Text style={styles.quantity}>{number}</Text>
        <Text style={styles.quantityAdd} onPress={() => onNumberChange(true)}>+</Text>
      </View>
    </View>
    <View style={styles.processTotal}>
    <Text style={styles.quantityTamtinh}>Tạm Tính</Text>
    <Text style={styles.quantityTien}>{number * price}đ</Text>
    </View>

    </View>
    <View>
            <Pressable onPress={chonMua} style={[styles.muahang,number>0?styles.changecolor : null]}  >
                <Text  style={styles.muahangtext} >Chọn Mua</Text>
            </Pressable>
            </View>
      </>
    )
}
export const HomeDetai = (props) => {
    const {navigation,route:{params: { id }}} = props;
    
    const { onGetProductDetai,cart } = useContext(ProductConText);
    const [product, setProduct] = useState(null);
    
    useEffect(async () => {
      const res = await onGetProductDetai(id);
      setProduct(res);
      return () => {
        res;
      }
    }, [])
    
   if (!product) {
     return (<></>)
   }
   const {name,images,price,madein,size,quantity,_id} = product;
  return (
    <View style={styles.container}>
      <View style={styles.productNamecontainer}>
      <Text style={styles.productName}>{name}</Text>
    </View>
    <View style={styles.productImage}>
      <PagerView style={styles.productPageView} initialPage={0} orientation='horizontal'>
        {
          images.map(img => <Image key={Math.random()} source={{uri: img}} style={styles.image} resizeMode='cover'></Image>)
        }
      </PagerView>
    </View>
    <PagerViewer product={product}/>
    </View>
  );
};

const styles = StyleSheet.create({
  changecolor:{
   backgroundColor:'#007537',
   width:'85%',
    height:50,
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'column',
    marginTop:30,
    marginLeft:30,
    borderRadius:8,
  },
  muahang:{
    width:'85%',
    height:50,
    backgroundColor:'#3A3A3A',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'column',
    marginTop:30,
    marginLeft:30,
    borderRadius:8,

  },
  muahangtext:{
    justifyContent: 'center',
    alignItems:'center',
    textAlign:'center',
    fontSize:25,
    color:'white',
  },
  processQualyti:{
    marginLeft:30,
  },
  quantityText:{
   
    color:'#3A3A3A',
    fontSize:16,
  },
  quantityAction:{
   
    marginTop:5,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  quantityRemove:{
    borderRadius:5,
    borderWidth:0.5,
    width:22.5,
    height:22.5,
    textAlign:'center',
    color:'#3A3A3A',
    fontSize:18,
  },
  quantity:{
    color:'#3A3A3A',
    fontSize:18,
  },
  quantityAdd:{
    borderRadius:5,
    borderWidth:0.5,
    width:22.5,
    height:22.5,
    textAlign:'center',
    color:'#3A3A3A',
    fontSize:18,
  },
  processTotal:{
  marginRight:30,
  },
  quantityTamtinh:{
    color:'#3A3A3A',
    fontSize:16,
  },
  quantityTien:{
    color:'#3A3A3A',
    fontSize:18,
    textAlign:'right',
  },
  cardProcessContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  productinfo:{
    paddingHorizontal:48,
    paddingVertical:32
  },
  productinfogia:{
    fontSize:35,
    fontWeight:'500',
    color:'green'
  },
  productinfochitiettext:{
    fontSize:20,
    fontWeight:'500',
    color:'#3A3A3A',
    borderBottomColor:'#221F1F',
    borderBottomWidth:0.2,
    marginTop:10
  },
  productinfosize:{
    justifyContent:'space-between',
    flexDirection:'row',
    borderBottomColor:'#221F1F',
    borderBottomWidth:0.2,
    marginTop:15
  },
  productinfomadein:{
    justifyContent:'space-between',
    flexDirection:'row',
    borderBottomColor:'#221F1F',
    borderBottomWidth:0.2,
    marginTop:15
  },
  productinfoquality:{
    justifyContent:'space-between',
    flexDirection:'row',
    borderBottomColor:'#221F1F',
    borderBottomWidth:0.2,
    marginTop:15,
    
  },
  image: {
    width:'100%',
    height:'100%'
  },
  productImage: {
    width:'100%',
    height:270
  },
  productPageView: {
    flex:1
  },
  productNamecontainer:{
    justifyContent:'center',
    alignItems:'center',
    height:55
  },
  productName: {
    
   fontSize:20,
   fontWeight:'600'
},
container: {
  paddingTop:20,
   flexGrow:1,
   backgroundColor:'white'

},
})


