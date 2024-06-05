import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import React from 'react';

const Register = ({navigation}) => {
  const handleNavigateLogin = () => {
    navigation.navigate('login');
  };
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <TouchableOpacity
        style={styles.btnRegister}
        onPress={handleNavigateLogin}>
        <Text style={styles.textLogin}>Kembali Ke login</Text>
      </TouchableOpacity>
      {/* <Button title="Kembali ke login" color='#abc111' si styles={styles.btnRegister} onPress={handleNavigateLogin} /> */}
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  btnRegister: {
    color: 'red',
    backgroundColor: 'yellow',
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 10,
  },
  textLogin: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
