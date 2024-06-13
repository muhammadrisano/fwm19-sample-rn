import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
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
import { LogLevel, OneSignal } from 'react-native-onesignal';

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
  const navigation = useNavigation();
  // Remove this method to stop OneSignal Debugging
  // useEffect(() => {

  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize('de36c773-6335-44a0-a113-d57564f57169');

  // requestPermission will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  OneSignal.Notifications.requestPermission(true);

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', event => {
    // console.log('OneSignal: notification clicked:', event);
    const dataWorker = event.notification.additionalData.worker;
    console.log(dataWorker);
    navigation.navigate('profile');
  });

  return (
    <stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen name="login" component={MainTab} />
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
    // </NavigationContainer>
  );
};

export default MainRouter;
