import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, TextInput , Text,  TouchableOpacity  } from 'react-native';

import { retrieveAUser, saveAUser }  from '../firebase/firebaseHelper';

const Signin = ({navigation}) => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [fullname, setFullName] = useState(null);

    const handleOnPress = () => {
        // console.log("navigation", navigation);
        // console.log("the button signin is pressed", username);
        navigation.navigate('Home', {fullname: fullname})
    }
    const placeholder = "Enter your username"
    const placeholderPassword ="Enter your password"

    useEffect(()=>{


    }, [])


    const saveInfo = async() => {
        const data = {
            fullname : fullname
        }

        saveAUser(data)
        .then(result => {
            console.log("what is the result", result);
        })

    }

    const retrieveInfo = async() => {
        const data ={
            id : "40OMUOwvDsUVXcHb3J48",

        }

        // retrieveAUser(data)
        // .then(result => {
        //     console.log("who is the user? ", result);
        //     setFullName(result.fullname)
        // })
    }


    const handleOnPressSave = () => {
        saveInfo();
    }

    const handleOnPressRetrieve = ()=> {
        retrieveInfo();
    }
    return (
      
        <View style = {styles.container} >

            <TextInput placeholder={placeholder} value={username} 
            onChangeText={(text)=>setUsername(text)} style={styles.textinput} />

            {/* <TextInput placeholder={placeholderFullname} value={fullname} 
            onChangeText={(text)=>setFullName(text)} style={styles.textinput} /> */}


            <TextInput placeholder={placeholderPassword} value={password} keyboardType="default" password
            onChangeText={(text)=>setPassword(text)} style={styles.textinput} />


            <TouchableOpacity onPress={handleOnPress} style={styles.button} >
                <Text style={{
                       color:"black",
                       fontWeight:"bold",
                       fontSize:15,
                       marginTop:2,
                       marginHorizontal:10,
                       textAlign:"center"

                   }}>LOGIN</Text>
            </TouchableOpacity>

            <Text>{username}</Text>

            <Text>{fullname}</Text>


           
        </View>
    )

}

const styles = StyleSheet.create({

    textinput:{
        borderBottomColor:'gray',
        borderBottomWidth: 2,
        marginTop: 170

    },
    button:{
        borderColor:'silver',
        borderWidth:5,
    },
    // container: {
    //     flex: 1,
    //     flexDirection: 'row'
    // },
    // bannerContainer: {
    //     flex: 1,
    //     height: 30
    // },
    // banner: {
    //     flex: 1,
    //     width: '100%',
    //     height: 30
    // }

})

export default Signin;
