import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import {Search} from './Search'; 
import {HomeDetai} from './HomeDetai'; 
const SearchStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="HomeStack" component={HomeDetai} />
        </Stack.Navigator>
    )
}

export default SearchStack