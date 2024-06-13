import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../../components/module/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting = () => {
  const [worker, setWorker] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });

  const getWorker = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');
      const res = await axios.get(`${process.env.API_BACKEND}/v1/workers`, {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      const {data} = res.data;
      setWorker(current => [...current, ...data]);
    } catch (error) {
      setLoading(false);
      console.warn(error);
    }
  };

  useEffect(() => {
    getWorker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const renderLoader = () => {
    return loading && <ActivityIndicator size="large" color="#00ff00" />;
  };

  const loadMoreItem = () => {
    setParams(current => ({
      ...current,
      page: current.page + 1,
    }));
  };

  return (
    // <ScrollView style={styles.container}>
    //   {/* <Text>{JSON.stringify(worker)}</Text> */}
    //   {loading && <ActivityIndicator size="large" color="#00ff00" />}
    //   {!loading &&
    //     worker &&
    //     worker.map(item => <Card data={item} key={item.id} />)}
    // </ScrollView>
    <View>
      <TextInput />
      <FlatList
        data={worker}
        renderItem={({item}) => <Card data={item} />}
        keyExtractor={item => item.id}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
    columnGap: 20,
  },
});
