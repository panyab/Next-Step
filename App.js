import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Jost_300Light, Jost_400Regular, Jost_700Bold } from '@expo-google-fonts/jost';


export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Test Title</Text>
      <Text style={styles.body}> Test Body</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:"#C4C4C4"
  },
  text:{
    fontSize:24,
    color:'#fffff',
    fontFamily: 'Jost_700Bold',
  },
  body:{
    fontSize:24,
    color:'#fffff',
    fontFamily: 'Jost_400Regular',
  }

});