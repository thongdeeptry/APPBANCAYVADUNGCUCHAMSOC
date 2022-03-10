import React, {useState,useContext} from 'react'
import { StyleSheet, Text, View, Image, TextInput, Pressable, KeyboardAvoidingView, ScrollView, ToastAndroid } from 'react-native'
import {UserContext} from '../UserContext'
export const Login = (props) => {
    const {navigation} = props;
    const {onLogin} = useContext(UserContext);
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');

    const onPressLogin = async() =>{
        const res = await onLogin(email,password);
        console.log('Dang Nhap ',res);
        if (res==true) {
            ToastAndroid.show('Đăng Nhập Thành Công',ToastAndroid.CENTER);
        } if(res == false) {
            ToastAndroid.show('Đăng Nhập Thất Bại',ToastAndroid.CENTER);
        }
    }
    return (
        
        <KeyboardAvoidingView style={{width:'100%',height:'100%'}}>
            <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false} style={{width:'100%',height:'100%'}}>
        <View style={styles.container}>
            <View style={styles.logo}>
            <Image style={styles.logo} source={require('../../../../img/logo.png')}></Image>
            </View>
            <View style={styles.mainplanta}>
            <Text style={styles.textplanta}>Planta</Text>
            </View>
            <View style={styles.mainchitiet}>
            <Text style={styles.chitiet}>Mua sắm và trải nghiệm sản phẩm cây trồng cùng phụ kiện độc đáo duy nhất tại Việt Nam</Text>
            </View>
            <View >
             <TextInput value={email} onChangeText={setemail} style={styles.textinpute} placeholder="Email" ></TextInput>
             <TextInput value={password} onChangeText={setpassword} style={styles.textinpute1} placeholder="Password" ></TextInput>
             
            </View>
            <View>
            <Pressable style={styles.dangnhap} onPress={onPressLogin} >
                <Text style={styles.dangnhapText} >Đăng Nhập</Text>
            </Pressable>
            </View>
            <View>
                <Text  onPress={() =>navigation.navigate('Register')} style={styles.dangky}>Chưa có tài khoản?</Text>
            </View>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:'100%',
        height:400,
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
        marginTop:20,
        
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
        marginLeft:60,
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
        marginLeft:60,
        marginTop: 30,
        borderBottomColor:'#ABABAB',
        borderBottomWidth:1.5,
    },
    textinpute1:{
        width:'72%',
        borderBottomColor:'#ABABAB',
        height:40,
        justifyContent: 'center',
        marginLeft:60,
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

