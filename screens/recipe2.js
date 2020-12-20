import React, {useState, useEffect}  from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Keyboard, ScrollView, TouchableOpacity, Button, Image, Linking , LogBox } from 'react-native';

LogBox.ignoreAllLogs()

const Recipe2 = ({navigation, route}) => {
    var slug = route.params.Recipe 
    var abc = slug.ingredientLines
    
    
    console.log("hahah")
    console.log(abc)

    
return(
    

    <View style = {styles2.MainContainer}>
       <View style = {{justifyContent: "center", alignItems: "center" , flexDirection: "row",}}>
       <Text style = {{padding : 10,fontWeight: "bold", fontSize: 22, fontFamily: "serif"}}>{slug.label} </Text>
        </View>

        <View style = {{justifyContent: "center", alignItems: "center" , flexDirection: "row",}}>
        <Image style={{width: 160,height: 160,resizeMode: 'contain'}} source={{uri: slug.image}}></Image>
        </View>


        <View style = {{padding: 4,flexDirection: "row" , justifyContent : "flex-start"}}>
          <Text style={{fontWeight: "bold", paddingRight:6, fontSize:16}}> Calories: </Text>
          <Text style= {{color: "red" ,fontSize:16}}>{Math.round(slug.calories)} kcal</Text>
        </View>
  
        <View style = {{padding: 4,flexDirection: "row" , justifyContent : "flex-start"}}>
          <Text style={{fontWeight: "bold", paddingRight:6, fontSize:16}}> Time to Make: </Text>
          <Text style= {{color: "red", fontSize:16}}>{slug.totalTime} Mins</Text>
        </View>


        
        <View style = {{padding: 4,flexDirection: "column" , justifyContent : "flex-start" , borderWidth: 2,borderColor: '#008b8b', padding: 10, margin: 5,backgroundColor:'#f0f8ff' , maxHeight: 320}}>
          <Text style={{fontWeight: "bold", paddingRight:6, paddingBottom:10, fontSize:18}}> Ingredients: </Text>
        
        
        
        <ScrollView  
            keyboardShouldPersistTaps={'handled'}
            key={Math.random().toString()}>
              {abc.map((item, id) =>
              
                
            <View style={styles.scrollviewItem}>

              <Text  style={styles.scrollviewText}>{id+1}) {item}</Text>
              
              
            </View>
          
        )}
      </ScrollView>  

      </View>

                <View >
                    <Button title = "Click to View Full Recipe"
                        onPress = {()=> Linking.openURL(slug.url)}
                    ></Button>
                </View>
            
    </View>
    )}


export default Recipe2

const styles2 = StyleSheet.create({
 
    MainContainer: {
      padding: 10,
      justifyContent: 'center',
      backgroundColor: '#ffff',
    },
   
    row: {
      fontSize: 15,
      padding: 15
    },
   
    textInput: {
      textAlign: 'center',
      height: 42,
      borderWidth: 2,
      borderColor: '#6495ed',
      borderRadius: 120,
      backgroundColor: "#FFFF",
    }
  });

  const styles = StyleSheet.create({
    crosstextcontainer: {
      backgroundColor: 'grey',
      borderRadius: 50,
      padding: 5,
      width: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },
    crosstext: {
      fontSize: 16,
      color: 'red',
      fontWeight: "bold"
    },
    scrollviewText2: {
      flex: 2,
      fontSize: 26,
      color: 'white',
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid'
    },
    scrollviewText: {
      flex: 1,
      fontSize: 20,
      color: 'black',
      
    },
    scrollview: {
      paddingTop: 20,
      width: '100%'
    },
    scrollviewItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: '#faebd7',
      alignSelf: "flex-start",
      padding: 1,
      margin: 5,
      width: '100%',
      borderRadius: 10
    },
    title: {
      fontSize: 64,
      color: 'lightgrey'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 40
    },
    inputContainer: {
      flexDirection: "row",
      width: '70%',
      justifyContent: "space-between",
      alignItems: "center"
    },
    textInput: {
      borderColor: 'red',
      //borderWidth: 2,
      borderBottomWidth: 2,
      width: '100%',
      // borderRadius: 50,
      fontSize: 16,
      padding: 10
    }
  })