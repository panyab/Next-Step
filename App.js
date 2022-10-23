import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Jost_300Light, Jost_400Regular, Jost_700Bold } from '@expo-google-fonts/jost';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import ResourceScreen from './screens/Resources';
import ProfileScreen from './screens/Profile';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-home"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Resources: {
      screen: ResourceScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-images-outline"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-person-circle-outline"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    
  },
  {
    initialRouteName: "Home",
    barStyle: { backgroundColor: "#97B689"},
  }
);

export default function App() {
  const Stack = createNativeStackNavigator();
  const Navigator = createAppContainer(TabNavigator);

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
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        </Stack.Navigator>
        <Navigator>
        <HomeScreen />
          </Navigator>
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