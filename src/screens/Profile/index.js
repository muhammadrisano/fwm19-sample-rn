import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import Button from '../../components/base/Button';

const Profile = ({navigation}) => {
  const {name, count} = useSelector(state => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({
      type: 'INCREMENT',
    });
  };

  return (
    <View>
      <Text>Nama saya : {name}</Text>
      <Text>Count: {count}</Text>
      <Button color="red" title="increment" onPress={handleIncrement} />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam maxime
        cumque impedit ducimus quo, illum rem iste, ad sed esse vero earum!
        Quidem suscipit a similique cum distinctio excepturi vitae beatae labore
        commodi sint minima porro explicabo voluptatum quae non vel
        necessitatibus dolor aspernatur, quod quaerat iusto nulla! Quasi,
        excepturi!
      </Text>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({});
