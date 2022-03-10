import React, {useState} from 'react'
import { View, Text,Button,StyleSheet, Alert,Image ,Pressable} from 'react-native'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
export const Gametoan = () => {
    const [so1, setso1] = useState(1)
    const [so2, setso2] = useState(1)
    const [tong, settong] = useState(2)
    const [diem, setdiem] = useState(0)

    const TinhToan = (choose) =>{
       const n1 = Math.round(Math.random() * 5);
       const n2 = Math.round(Math.random() * 5);
       const n = Math.round(Math.random() * 10);
       setso1(n1);
       setso2(n2);
       settong(tong);
       if (choose == true) {
           if (so1+so2 == tong) {
               setdiem(diem+1);
               Alert.alert("Kết Quả","Xin chúc mừng. Bạn đã đúng\nẤn OK để tiếp tục trò chơi");
           } else {
               setdiem(diem-1);
               Alert.alert("Kết Quả","Chia Buồn. Bạn đã sai\nẤn OK để tiếp tục trò chơi");
           }
       }else{
        if (so1+so2 != tong) {
            setdiem(diem+1);
            Alert.alert("Kết Quả","Xin chúc mừng. Bạn đã đúng\nẤn OK để tiếp tục trò chơi");
        } else {
            setdiem(diem-1);
            Alert.alert("Kết Quả","Chia Buồn. Bạn đã sai\nẤn OK để tiếp tục trò chơi");
        }
       }

    }
    return (
        <View style={style.container}>
            
            <View style={style.score}>
            <Text style={style.textStyle}>Điểm : {diem} đ</Text>
            </View> 
            <View style={{ flexDirection: "row" }}>
            <Text style={[style.header, { color: "#E57E31" }]}>Thử</Text>
            <Text style={[style.header, { color: "#F1C431" }]}>Tài</Text>
            <Text style={[style.header, { color: "#E64C3C" }]}>Tính</Text>
            <Text style={[style.header, { color: "#68CC73" }]}>Toán</Text>
            </View>
            <View style={style.cauhoi}>
            <Text style={style.textStyle1}>{so1} + {so2} = {tong}</Text>
            </View>
          
            <View style={style.tong}>
            
            <Pressable style={style.chondung}  onPress={() =>TinhToan(true)} >
                <Text style={style.Pressable} >Đúng</Text>
            </Pressable>
            <Pressable style={style.chonsai} onPress={() =>TinhToan(false)}>
            <Text style={style.Pressable}>Sai</Text>
            </Pressable>
            </View>
            
            
        </View>
    )
}
const style = StyleSheet.create({
   
    score:{
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flexDirection:'row',
        backgroundColor:'#f2f2c4',
        width:'100%',
        fontSize: 50,
        fontStyle:'italic',
        paddingRight:30,
        marginTop:50,
        
    },
    header: {
        fontSize: 40,
        textAlign:'center',
        marginTop:40,
        marginLeft:40,
        color: "#ecf0f1",
        
      },
    cauhoi:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        backgroundColor:'#f2f2c4',
        width:'100%',
        fontSize: 50,
        marginTop:250,
        
    },
    tong:{
        justifyContent: 'space-around',
        flexDirection:'row',
    },
    chondung:{
        borderRadius:30,
        backgroundColor:'white',
        marginTop:300,
        width:100,
        height:100,
    },
    chonsai:{
        borderRadius:30,
        backgroundColor:'white',
        marginTop:300,
        width:100,
        height:100,
    },
    textStyle:{
        color:'#990000',
        fontSize:30,
        justifyContent:'center',

      },
      textStyle1:{
        color:'#990000',
        fontSize:50,
        justifyContent:'center',

      },
      Pressable:{
        marginTop:25,
        textAlign:'center',
        justifyContent:'space-around',
        fontSize:30,
        width:100,
        height:100,
      },
    container: {
        height:'100%',
        width:'100%',
        backgroundColor: '#f2f2c4',
        fontSize: 50,
      },
});
