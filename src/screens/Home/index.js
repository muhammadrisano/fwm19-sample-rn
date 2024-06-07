import {View, Text, StyleSheet, Image, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import Card from '../../components/module/Card';
import IcSearch from '../../assets/icons/IcMessage.svg';
import Button from '../../components/base/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera} from 'react-native-image-picker';
import axios from 'axios';

const Home = () => {
  const [photo, setPhoto] = useState(null);
  const showToken = async () => {
    const token = await AsyncStorage.getItem('token');
    Alert.alert(token);
  };
  const handleChageImage = async () => {
    try {
      const res = await launchCamera(null);
      if (res.didCancel) {
        return;
      }
      const data = res.assets[0];
      // console.log(data);
      setPhoto(data);

      const formData = new FormData();

      const dataImage = {
        uri: data.uri,
        name: data.fileName,
        filename: data.fileName,
        type: data.type,
      };
      console.log(dataImage);
      formData.append('file', {
        uri: data.uri,
        name: data.fileName,
        filename: data.fileName,
        type: data.type,
      });

      const result = await axios.post(
        'https://fwm17-be-peword.vercel.app/v1/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log(result.data);
    } catch (error) {
      console.log(error?.response.data);
    }

    // try {
    //   const result = await launchCamera(null);
    //   if (result.didCancel) {
    //     console.log('User cenceled image picker');
    //     return;
    //   }
    //   console.log(result);
    // } catch (error) {}
  };
  return (
    <ScrollView style={styles.container}>
      <IcSearch />
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
      {/* <Card /> */}
      <Button title="check token" onPress={showToken} />
      <Button title="Pilih Image" onPress={handleChageImage} />
      {photo?.uri && (
        <Image source={{uri: photo.uri}} width={100} height={100} />
      )}
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
