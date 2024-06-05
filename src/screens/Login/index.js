import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/base/Button';

const Login = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleLogin = ()=>{
    console.log(form);
  }
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
        <Button title="Login" onPress={()=>navigation.navigate('home')} />
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
