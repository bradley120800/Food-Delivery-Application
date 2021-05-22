import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './src/navigations/Navigator'
import FacebookSignin from './auth/account'
// import 

const App = () => {
  return (
    // <NavigationContainer>
    //   <Signin/>
    //   {/* <HomeStackNavigator/> */}
    // </NavigationContainer>
    <NavigationContainer>
      <HomeStackNavigator />
      <FacebookSignin/>
    </NavigationContainer>
  )
}
export default App;