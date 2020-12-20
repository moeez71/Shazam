import React, {useState, useEffect}  from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Keyboard, ScrollView, TouchableOpacity, Button, Image, Linking  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Recipe from "../screens/recipe";
import Recipe2 from "../screens/recipe2";
const Stack = createStackNavigator();


const Naviagtor_M6 = ({navigation}) => {
  return (
   <Stack.Navigator 
     //headerMode='none'
     screenOptions = {({navigation}) => ({
     title : "Search Recipe", 
     headerTintColor: "black",
     headerStyle: {backgroundColor: "#ffff"},
   })}
 >
   <Stack.Screen name="1" component={Recipe} />
   <Stack.Screen 
    name= "2" 
    component={Recipe2}
    // options = {({navigation}) => ({
    //       title: "Yalala",
    //       headerLeft: () =>
    //         <View style= {{paddingLeft:15}}>
    //           <Button title= "Back"></Button>
    //         </View>,
    //       })}
    />
 </Stack.Navigator>
  )
}
export default Naviagtor_M6