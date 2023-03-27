import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';

import tasks from './screens/tasks';
import updateTasks from './screens/updateTasks';
//import pomodoro from './screens/pomodoro';

import timer from './screens/timer';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>

//         <Stack.Screen 
//           name='Home' 
//           component={tasks} 
//         />
//         <Stack.Screen 
//           name='Detail'
//           component={updateTasks}
//         />
//         <Stack.Screen 
//           name='PomodoroTimer'
//           component={timer}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const PomodoroNavigator = () => (
//   <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="PomodoroTimer" component={PomodoroTimer} />
//   </Stack.Navigator>
// );

export default function App() {
return (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Tasks') {
            iconName = 'home'
          } else if (route.name === 'Detail') {
            iconName = 'user-edit'
          } else if (route.name === 'Timer') {
            iconName = 'clock'
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff73c0',
        tabBarInactiveTintColor: 'orange',
      })}
    >
      <Tab.Screen name="Home" component={tasks} />
      <Tab.Screen name="Detail" component={updateTasks} />
      {<Tab.Screen name="PomodoroTimer" component={timer} />}
    </Tab.Navigator>
  </NavigationContainer>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
  },

});