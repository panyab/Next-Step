import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Jost_300Light, Jost_400Regular, Jost_700Bold } from '@expo-google-fonts/jost';
import "./screens/Login";
import SplashScreen from './screens/splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';


export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    /*
    <View style={styles.container}>
      <Text style={styles.text}> Test Title</Text>
      <Text style={styles.body}> Test Body</Text>
      <StatusBar style="auto" />
    </View>
    */

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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