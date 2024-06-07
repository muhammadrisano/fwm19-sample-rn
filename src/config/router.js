import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Setting from '../screens/Setting';
import EditProfile from '../screens/EditProfile';
import TabBar from '../components/module/TabBar';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="profile" component={ProfileStack} />
      <Tab.Screen name="seting" component={Setting} />
    </Tab.Navigator>
  );
};

const stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <stack.Navigator initialRouteName="profile">
      <stack.Screen name="profile" component={Profile} />
      <stack.Screen name="edit" component={EditProfile} />
    </stack.Navigator>
  );
};

const MainRouter = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="MainTab"
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="login" component={Login} />
        <stack.Screen
          name="register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen name="flash" component={SplashScreen} />
        <stack.Screen name="MainTab" component={MainTab} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
