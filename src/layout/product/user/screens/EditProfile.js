import { StyleSheet, Text, View ,TextInput,Pressable} from 'react-native';
import React , {useState} from 'react';

export const EditProfile = (props) => {
  const {email,_id,address,name,phone} = data;
  const [fullname,setFullname] = useState(name);
  const [email1,setEmail] = useState(email);
  const [diachi,setDiachi] = useState(address);
  const [sdt,setSdt] = useState(phone);
  return (
    <View style={{padding:40,height:'100%'}}>
      <Text style={styles.edit}>Chỉnh Sửa Thông Tin</Text>
      <Text style={styles.a}>Thông tin sẽ được lưu cho lần mua kế tiếp. Bấm vào thông tin chi tiết để chỉnh sửa.</Text>
      <View>
        <TextInput value='Ngô Thành Thông' onChangeText={setFullname} style={styles.ab}/>
        <TextInput value='ngothanhthongcode@gmail.com' onChangeText={setEmail} style={styles.ab}/>
        <TextInput value='Tay Hoa' onChangeText={setDiachi} style={styles.ab}/>
        <TextInput value='0334233235' onChangeText={setSdt} style={styles.ab}/>
      </View>
      <Pressable style={styles.muahang}  >
                <Text style={styles.muahangtext} >Save</Text>
            </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  muahang:{
    width:'100%',
    height:50,
    backgroundColor:'#7D7B7B',
    justifyContent: 'center',
    alignItems:'center',
    margin:38,
    flexDirection:'row',
    position:'absolute',
    bottom:10,
    borderRadius:8,

  },
  muahangtext:{
    justifyContent: 'center',
    alignItems:'center',
    textAlign:'center',
    fontSize:25,
    color:'white',
  },
  ab:{
    width:'100%',
    height:40,
    fontSize:20,
    marginTop:20,
    color:'#7D7B7B',
    borderBottomColor:'#ABABAB',
        borderBottomWidth:0.5,
  },
  edit:{
      textAlign:'center',
      fontSize:25,
  },
  a:{
    marginTop:20,
    fontSize:20,
},

});

var data = {
  "_id": "61dd7547b4c902001617bf36",
  "email": "ngothanhthongcode@gmail.com",
  "createdAt": "2022-01-11T12:17:11.715Z",
  "updatedAt": "2022-02-08T02:43:04.120Z",
  "address": "Tây Hòa Phú Yên",
  "avatar": "https://2.pik.vn/20228e132485-e812-4825-8ae5-34506c84acbe.jpg",
  "dob": "2000-08-20T00:00:00.000Z",
  "name": "Ngô Thành Thông",
  "phone": "0334233235"
}