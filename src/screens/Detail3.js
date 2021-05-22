import React from 'react'
import {View,Text, Image} from 'react-native'
import { ScrollView, TouchableOpacity} from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'


export default class Detail3 extends React.Component{
    state={
        quantity:1
    }

    addQuantity = (quantity) => {
        this.setState({quantity: this.state.quantity + 1});
    }
    subtractQuantity = (quantity) => {
      if (this.state.quantity > 0) {
        this.setState({quantity: this.state.quantity - 1});
      }
       
    }

    render(){
        return(
            <View style={{backgroundColor:"#FFF"}}>
               <ScrollView>
                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       marginTop:40,
                       marginHorizontal:20
                   }}>
                       <View style={{width:"10%"}}>
                            <TouchableOpacity
                                onPress={()=>this.props.navigation.goBack()}
                            >
                                <Image
                                    source={require('../images/2.png')}
                                />
                            </TouchableOpacity>
                       </View>
                       <View style={{width:"80%",alignItems:"center"}}>
                            <View style={{
                                flexDirection:"row",
                                alignItems:"center",
                                alignSelf:"center"
                            }}>
                                <Image
                                    source={require('../images/3.png')}
                                    style={{height:25,width:20}}
                                />
                                <Text style={{
                                    paddingHorizontal:10,
                                    fontWeight:"bold",
                                    fontSize:16
                                }}>420 Calories</Text>
                            </View>
                       </View>
                       <View style={{width:"10%"}}>
                                <Icon
                                    name="heart"
                                    color="#f9dd7a"
                                    size={30}
                                />
                       </View>
                   </View>
                   <Image
                        source={require('../images/6.png')}
                        style={{
                            height:300,
                            width:300,
                            alignSelf:"center"
                        }}
                   />
                   <View
                    style={{
                        flexDirection:"row",
                        alignSelf:"center",
                        alignItems:"center",
                        backgroundColor:"#f6f3fb",
                        paddingHorizontal:20,
                        paddingVertical:8,
                        borderRadius:20
                    }}
                   >
                      <TouchableOpacity
                       onPress={this.addQuantity}
                      >
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:18
                          }}>+</Text>
                      </TouchableOpacity> 
                      
                      <Text style={{
                          fontSize:18,
                          fontWeight:"bold",
                          paddingHorizontal:20
                      }}>
                          {this.state.quantity}
                      </Text>

                      <TouchableOpacity
                       onPress={this.subtractQuantity}
                      >
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:18
                          }}>-</Text>
                      </TouchableOpacity> 
                   </View>

                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       marginHorizontal:20,
                       marginTop:30
                   }}>
                       <View>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:25
                           }}> Pizza ng Ina mo </Text>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:15,
                               color:"#a4a4a9"
                           }}>
                               A slice of Pizza
                           </Text>
                       </View>
                      <Text style={{
                          fontWeight:"bold",
                          fontSize:28,
                          marginLeft:80
                      }}>$1.99</Text>
                   </View>
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:20,
                       marginTop:30,
                       marginHorizontal:20
                   }}>
                       Add-ons
                   </Text>
                   
                   <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:20,marginHorizontal:20}}
                   >
                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/11.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/13.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/12.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/8.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/bl.png')}
                            style={{height:30,width:30}}
                           />
                       </View>

                       <View style={{
                           borderRadius:15,
                           borderWidth:0.1,
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                           <Image
                            source={require('../images/7.png')}
                            style={{height:30,width:30}}
                           />
                       </View>
                   </ScrollView>
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:20,
                       marginTop:30,
                       marginHorizontal:20
                   }}>
                       Details: Better than Rafael's Pizza 
                   </Text>
                   <Text style={{
                       color:"#a4a4a9",
                       fontWeight:"bold",
                       fontSize:15,
                       marginTop:10,
                       marginHorizontal:20,
                       textAlign:"justify"
                   }}>
                       Nutritional Facts:
                       Calories 285
% Daily Value*
Total Fat 10 g	15%
Saturated fat 4.8 g	24%
Polyunsaturated fat 1.8 g	
Monounsaturated fat 2.8 g	
Trans fat regulation 0.3 g	
Cholesterol 18.2 mg	6%
Sodium 639.9 mg	26%
Potassium 184 mg	5%
Total Carbohydrate 36 g	12%
Dietary fiber 2.5 g	10%
Sugar 3.8 g	
Protein 12 g	24%
Vitamin A	7%	Vitamin C	2%
Calcium	20%	Iron	15%
Vitamin D	0%	Vitamin B-6	5%
Cobalamin	6%	Magnesium	6%
                   </Text>
               </ScrollView>
               <View style={{
                   position:"absolute",
                   backgroundColor:"#000",
                   height:50,
                   width:50,
                   bottom:20,
                   alignItems:"center",
                   justifyContent:"center",
                   alignSelf:"center",
                   borderRadius:25
               }}>
                   <Icon
                    name="shopping-cart"
                    size={24}
                    color="#FFF"
                    margin='bottom'
                   />
               </View>
            </View>
        )
    }
}