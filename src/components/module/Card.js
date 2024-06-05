import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Card = () => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('login');
  };
  return (
    <TouchableOpacity onPress={handleNavigate}>
      <View style={styles.card}>
        <Text>Card</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 180,
    borderWidth: 1,
    backgroundColor: 'orange',
  },
});
