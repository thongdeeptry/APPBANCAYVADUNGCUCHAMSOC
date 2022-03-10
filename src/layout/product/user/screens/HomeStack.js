import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import {Home} from './Home'; 
import {HomeDetai} from './HomeDetai'; 


const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HomeStack" component={HomeDetai} />
        </Stack.Navigator>
    )
}

export default HomeStack