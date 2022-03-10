import React from 'react'
import { View, Text ,Pressable,Image,StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export const Profile = (props) => {
    const {navigation} = props;
    const {_id,email,name,address,avatar,phone,dob} = data;
    return (
        <View style={{padding:40}}>
      <Text style={{fontSize:30,textAlign:'center'}}>Profile</Text>
      <View style={styles.container}>
      <View style={styles.containerimg}>
          {
               avatar.trim().length == 0?
              <AntDesign  name="user" size={24} color="black" />
              :
              <Image source={{uri: avatar}} resizeMode='cover' style={styles.img}/>
          }
          
          </View>
          <View style={styles.ten}>
          <Text numberOfLines={1} style={styles.name}>{name}</Text>
          <Text numberOfLines={1} style={styles.email}>{email}</Text>
      </View>
      </View>
      <View style={styles.containeraction}>
          <Text style={styles.actionTitle}>Chung</Text>
          <Text onPress={() => navigation.navigate('EditProfile')} style={styles.action}>Chỉnh Sửa Thông Tin</Text>
          <Text style={styles.action} onPress={() => navigation.navigate('CardHistory')}>Lịch Sử Giao Dịch</Text>
          <Text style={styles.actionTitle}>Ứng Dụng</Text>
          <Text style={styles.action,{color:'red',fontSize:20,marginVertical:8}}>Đăng Xuất</Text>
      </View>
     
       
    </View>
    )
}
const styles = StyleSheet.create({
    containeraction:{
      marginTop:48,

    },
    action:{
        marginVertical:8,
        fontSize:20,
    },
    actionTitle:{
        fontSize:20,
        borderBottomColor:'#ABABAB',
        borderBottomWidth:1,
        color:'#7F7F7F',
    },
    name:{
        fontSize:20,
        color:'black'
    },
    email:{
     fontSize:14,
     color:'#7F7F7F'
    },
    ten:{
        marginLeft:26,
       },
    container:{
        marginTop:20,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
    },
    img:{
        width:'80%',
        height:'80%',
        borderRadius:20,
    },
});

var data = 
    {
        "_id": "61dd7547b4c902001617bf36",
        "email": "ngothanhthongcode@gmail.com",
        "createdAt": "2022-01-11T12:17:11.715Z",
        "updatedAt": "2022-02-05T15:20:40.647Z",
        "address": "Tây Hòa Phú Yên",
        "avatar": "",
        "dob": "2000-08-20T00:00:00.000Z",
        "name": "Ngô Thành Thông",
        "phone": "0334233235"
    }

