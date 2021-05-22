import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Home from '../screens/Home'

import Detail from '../screens/Detail'
import Detail2 from '../screens/Detail2'
import Detail3 from '../screens/Detail3'
import Detail4 from '../screens/Detail4'
import Detail5 from '../screens/Detail5'
import Detail6 from '../screens/Detail6'

import Signin from '../../auth/signin'

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown:false
}

const HomeStackNavigator = () => {
    return(
        
        <Stack.Navigator screenOptions={screenOptionStyle}>
        
         <Stack.Screen name="Signin" component={Signin}/> 
            <Stack.Screen name="Home" component={Home}/>
            
            {/* product button */}
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="Detail2" component={Detail2}/>
            <Stack.Screen name="Detail3" component={Detail3}/>
            <Stack.Screen name="Detail4" component={Detail4}/>
            <Stack.Screen name="Detail5" component={Detail5}/>
            <Stack.Screen name="Detail6" component={Detail6}/>

            {/* <Stack.Screen name="Cart" component={Cart}/> */}
            
        </Stack.Navigator>
      
    )
}
export default HomeStackNavigator;