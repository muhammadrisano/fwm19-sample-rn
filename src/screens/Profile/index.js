import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
// import Button from '../../components/base/Button';
import {Button} from '@rneui/themed';

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam maxime
        cumque impedit ducimus quo, illum rem iste, ad sed esse vero earum!
        Quidem suscipit a similique cum distinctio excepturi vitae beatae labore
        commodi sint minima porro explicabo voluptatum quae non vel
        necessitatibus dolor aspernatur, quod quaerat iusto nulla! Quasi,
        excepturi!
      </Text>
      <Button color="error" onPress={() => navigation.navigate('edit')}>
        Pindah KE Edit
      </Button>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({});
