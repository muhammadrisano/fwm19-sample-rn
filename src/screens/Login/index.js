import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/base/Button';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        'https://fwm17-be-peword.vercel.app/v1/auth/login',
        form,
      );
      console.log(res.data);
      const {data} = res.data;
      await AsyncStorage.setItem('token', data.token);
      navigation.navigate('MainTab');
    } catch (error) {
      const messageErr = error.response?.data?.message;
      console.log(messageErr);
      Alert.alert(messageErr || 'terjadi kesalahan');
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Halaman Login</Text>
        <TextInput
          placeholder="Email"
          value={form.email}
          style={styles.formControl}
          onChangeText={value => setForm({...form, email: value})}
        />
        <TextInput
          placeholder="Password"
          value={form.password}
          style={styles.formControl}
          secureTextEntry={true}
          onChangeText={value => setForm({...form, password: value})}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  title: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 30,
    fontWeight: 'bold',
  },
  container: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  formControl: {
    borderWidth: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});
