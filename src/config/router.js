import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';

const stack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="login" component={Login} />
        <stack.Screen
          name="register"
          component={Register}
          // options={{
          //   title: 'Halaman Login',
          //   headerStyle: {
          //     backgroundColor: 'red',
          //   },
          //   headerTintColor: '#fff',
          // }}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen name="flash" component={SplashScreen} />
        <stack.Screen name="home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
