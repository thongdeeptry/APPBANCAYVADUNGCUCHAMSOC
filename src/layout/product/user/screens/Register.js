import React, {useState,useContext} from 'react'
import { StyleSheet, Text, View, Image, TextInput, Pressable, KeyboardAvoidingView, ScrollView ,ToastAndroid} from 'react-native'
import {UserContext} from '../UserContext'

export const Register = (props) => {
    const {navigation} = props;
    const {onReg} = useContext(UserContext);
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [cfpassword,setcfpassword] = useState('');
    const onPressReg = async() =>{
        if(cfpassword.trim()== password.trim()){
            const res = await onReg(email,password);
            
            if (res==false) {
                ToastAndroid.show('Đăng Ký Thất Bại',ToastAndroid.CENTER);
               
            }else{
                ToastAndroid.show('Đăng Ký Thành Công',ToastAndroid.CENTER);
                navigation.navigate('Login');
            }
        }else{
            ToastAndroid.show('Mật Khẩu Không Trùng Khớp',ToastAndroid.CENTER);
        }
        
    }
    return (
        //KeyboardAvoidingView style={{width:'100%',height:'100%'}}>
            <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false} style={{width:'100%',height:'100%'}}>
        <View style={styles.container}>
            
            <View style={styles.mainplanta}>
            <Text style={styles.textplanta}>Planta</Text>
            </View>
            <View style={styles.mainchitiet}>
            <Text style={styles.chitiet}>Mua sắm và trải nghiệm sản phẩm cây trồng cùng phụ kiện độc đáo duy nhất tại Việt Nam</Text>
            </View>
            <View >
             <TextInput value={email} onChangeText={setemail} style={styles.textinpute} placeholder="Email" ></TextInput>
             <TextInput value={password} onChangeText={setpassword} style={styles.textinpute1} placeholder="Password" ></TextInput>
             <TextInput value={cfpassword} onChangeText={setcfpassword} style={styles.textinpute1} placeholder="Confirm Password" ></TextInput>
            </View>
            <View>
            <Pressable style={styles.dangnhap} onPress={onPressReg} >
                <Text style={styles.dangnhapText} >Đăng Ký</Text>
            </Pressable>
            </View>
            <View>
                <Text  onPress={() =>navigation.navigate('Login')} style={styles.dangky}>Đã có tài khoản?</Text>
            </View>
        </View>
        </ScrollView>
       //</KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    logo:{
        width:'100%',
        height:550,
    },
    dangky:{
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:17,
        color:'black',
        marginTop:20,
    },
    mainplanta:{
        justifyContent: 'space-around',
        alignItems:'center',
        flexDirection:'row',
        marginTop:80,
        
    },
    textplanta:{
        fontWeight:'700',
        fontSize:45,
        textAlign:'center',
        color:'#007537',
        
    },
    dangnhap:{
        width:'72%',
        height:50,
        backgroundColor:'#221F1F',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:20,
        marginLeft:70,
        borderRadius:8,
    },
    dangnhapText:{
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:19,
        color:'white',
    },
    mainchitiet:{
        justifyContent: 'space-around',
        alignItems:'center',
        flexDirection:'row',
        marginTop:20,
        marginLeft:52,
        marginRight:52,
        
    },
    chitiet:{
        fontSize:18,
        textAlign:'center',
        color:'#000000',
    },
   
    textinpute:{
        width:'72%',
        borderBottomColor:'#ABABAB',
        height:40,
        justifyContent: 'center',
        marginLeft:70,
        marginTop: 30,
        borderBottomColor:'#ABABAB',
        borderBottomWidth:1.5,
    },
    textinpute1:{
        width:'72%',
        borderBottomColor:'#ABABAB',
        height:40,
        justifyContent: 'center',
        marginLeft:70,
        marginTop: 5,
       borderBottomColor:'#ABABAB',
       borderBottomWidth:1.5,
    },
    
    container: {
      width: '100%',
      height:'100%',
      backgroundColor: '#FFFFFF',
    },
  });

