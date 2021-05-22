import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Cart = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text> Feedback </Text>
        <Button
        title=" Go back home "
        onPress={() => navigation.navigate("Home")}
        /> 
      </View>
    );
  };

  export default Cart; 

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
