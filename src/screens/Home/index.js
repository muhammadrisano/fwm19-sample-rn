import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import Card from '../../components/module/Card';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>box1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>box2</Text>
      </View>
      <View style={styles.wrapperImage}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://img.kurio.network/77GSRizkh7ZeT0cp7P8j1JG0ziY=/440x440/filters:quality(80):watermark(https://kurio-img.kurioapps.com/21/04/15/df401e7c-7b29-428a-9a16-aad1fafe07a1.png,0,5p,0,22)/https://kurio-img.kurioapps.com/20/10/10/a7e9eaa0-1c22-42b0-a11f-0a5ad1d30126.jpeg',
          }}
        />
        <Image
          style={styles.image}
          source={require('../../../src/assets/dummy.jpg')}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>box3</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>box4</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>box5</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>box6</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>box7</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>box2</Text>
      </View>
      <Card/>
    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  title: {
    color: 'white',
  },
  wrapperImage: {
    height: 200,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
