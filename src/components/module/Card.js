import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Card = ({data}) => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('profile');
  };
  return (
    // <TouchableOpacity onPress={handleNavigate}>
    <View style={styles.card}>
      <View style={styles.wrapperImg}>
        {data.photo && (
          <Image source={{uri: data.photo}} style={styles.image} />
        )}
      </View>
      <View style={styles.body}>
        <Text>{data?.name}</Text>
        <Text>{data?.phone}</Text>
      </View>
    </View>
    // </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    flexDirection: 'row',
    marginVertical: 4,
    gap: 10,
  },
  wrapperImg: {
    width: 80,
    height: '100%',
  },
  body: {
    width: '100%',
  },
  image: {
    width: 80,
    height: '100%',
    objectFit: 'cover',
  },
});
