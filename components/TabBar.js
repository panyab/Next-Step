import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import "../screens/Home";
import "../screens/Resources";
import "../screens/Tasks";
import "../screens/Calendar";
import "../screens/Profile";

export default function TabBar() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Resources" component={ResourceScreen} />
      <Tab.Screen name="Tasks" component={TaskScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}