import React, {useState, useEffect}  from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Keyboard, ScrollView, TouchableOpacity, Button, Image, Linking, LogBox  } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

LogBox.ignoreAllLogs()
const Recipe= ({navigation}) => {

    const App_Id = "8a8af900";
    const App_Key = "213e4d7c875a4c51c5c700b3a059ce9e";

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState(false);
    const [img, setImg]= useState([]);

    const url = `https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}&from=0&to=30`;

    const fetchAPI = async ()=> {
        return await fetch(url)
        .then((response) => response.json())
        .then((result) => {
         console.log(result)
          setRecipes(result.hits);
          //setImg(result.hits[0].recipe.uri)
         //console.log(recipes.recipe)
         setQuery("");
         setAlert(true);

        }
        )
        .catch((error) => {
          console.error(error);
        });}
    return(

      <View style={styles2.MainContainer }>
      {
        recipes.length === 0 ? 
        <View  style={styles2.MainContainer2 } >
          
        <TextInput 
            style={styles2.textInput}
            underlineColorAndroid='transparent'
            placeholder="Enter Item Here" 
            onChangeText={text => setQuery(text)}
            value={query}
            onSubmitEditing={fetchAPI}
            />

        
        <View style = {{justifyContent: "center", alignItems: "center", backgroundColor: "#ffff"}}>
        <Text style = {{fontWeight: "bold", fontSize: 20, fontFamily: "serif", paddingTop: 200,}}>Enter Recipe Name </Text>
        </View>
        </View>
          
      :

    <View style = {styles2.MainContainer}>
    { alert === false ? <ActivityIndicator/> : <Text></Text>}
        <View style= {{height: 20, paddingBottom: 50}}>
        <TextInput 
            style={styles2.textInput}
            underlineColorAndroid='transparent'
            placeholder="Enter Item Here" 
            onChangeText={text => setQuery(text)}
            value={query}
            onSubmitEditing={fetchAPI}
            />
        </View>
<View style= {{borderWidth: 2,borderColor: '#008b8b', padding: 1, margin: 5,backgroundColor:'#f0f8ff'  }}>
        <ScrollView  
            keyboardShouldPersistTaps={'handled'}>
              {recipes.map(({recipe}, id) =>
              <TouchableOpacity
              
                key={id}
                activeOpacity={0.7}
               // {...console.log(recipe.image)}
                onPress = {() => 
                
                navigation.navigate("2",{Recipe: recipe})}
                
                >
                
            <View style={styles.scrollviewItem}>
            
              <Text  style={styles.scrollviewText}  numberOfLines = {2}>{id+1}) {recipe.label}</Text>
              <Image style={{width: 80,height: 80,resizeMode: 'cover'}} source={{uri: recipe.image}}></Image>
                <TouchableOpacity
                  
              >
                
              </TouchableOpacity>

              
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>  
    </View>
    </View>}
    </View>
    )}
export default Recipe




const styles2 = StyleSheet.create({
 
    MainContainer: {
      padding: 10,
      paddingTop: 20, 
      justifyContent: 'center',
      backgroundColor: '#ffff',
      flexDirection: 'column'
    },
   
    row: {
      fontSize: 15,
      padding: 15
    },
   
    textInput: {
      textAlign: 'center',
      height: 42,
      borderWidth: 2,
      borderColor: '#008b8b',
      borderRadius: 120,
      backgroundColor: "#FFFF",
    }
  });

  const styles = StyleSheet.create({
    crosstextcontainer: {
      backgroundColor: 'red',
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