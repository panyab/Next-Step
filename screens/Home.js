import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabBar from '../components/TabBar';
import { BottomNavigation} from 'react-native-paper';

const HomeRoute = () => <Text>Home</Text>;
const ResourcesRoute = () => <Text>Resources</Text>;
const TasksRoute = () => <Text>Tasks</Text>;
const CalendarRoute = () => <Text>Calendar</Text>;
const ProfileRoute = () => <Text>Profile</Text>;


const NavBar = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'home', title: 'Home', focusedIcon: 'house'},
      { key: 'resources', title: 'Resources', focusedIcon: 'google-circles'},
      { key: 'tasks', title: 'Tasks', focusedIcon: 'tasks' },
      { key: 'cal', title: 'Calendar', focusedIcon: 'calendar'},
      { key: 'profile', title: 'Profile', focusedIcon: 'user'},
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        resources: ResourcesRoute,
        tasks: TasksRoute,
        cal: CalendarRoute,
        profile: ProfileRoute
    });
    
    return (
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
    );
};

export default function HomeScreen() {
    <View style={styles.container}>
        <Text style={styles.text}>hello</Text>
        
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"#C4C4C4"
    },
    nav: {
        backgroundColor: '#97B689'
    },
    text: {
        fontFamily: 'Jost_400Regular',
        color: '#97B689'
    }
});