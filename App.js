import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
// import {LogLevel, OneSignal} from 'react-native-onesignal';
import MainRouter from './src/config/router';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/config/redux/store';

const App = () => {
  // });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainRouter />;
      </NavigationContainer>
    </Provider>
  );
};

export default App;
