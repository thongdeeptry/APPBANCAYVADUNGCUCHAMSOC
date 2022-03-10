import React from 'react'
import { View, Image } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './user/screens/HomeStack'
import Card from './user/screens/Cart'
import SearchStack from './user/screens/SearchStack'
import ProfileStack from './user/screens/ProfileStack'

export default ProductNavigation = () => {
    return (
        <View style={{width:'100%',height:'100%'}}>
       
       <Tab.Navigator screenOptions={({route}) => ({
          tabBarIcon : ({focused,color,size}) =>{
            if (route.name == "Home") {
                return <Image source={require('../../img/home.png')}/>
            }
            if (route.name == "Search") {
                return <Image source={require('../../img/search.png')}/>
            }
            if (route.name == "Card") {
                return <Image source={require('../../img/Vector.png')}/>
            }
            if (route.name == "Profile") {
                return <Image source={require('../../img/user.png')}/>
            }
          },
          headerShown:false
       })}>
           <Tab.Screen name="Home" component={HomeStack}/>
           <Tab.Screen name="Search" component={SearchStack}/>
           <Tab.Screen name="Card" component={Card}/>
           <Tab.Screen name="Profile" component={ProfileStack}/>
       </Tab.Navigator>
      
       </View>
    )
}

