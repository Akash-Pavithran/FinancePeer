import { useTheme } from '@react-navigation/native';
import React, { useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, Button, ScrollView } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

import data from '../data/data.json';

const Feed = () => {
  const [localData, setLocalData] = useState([]);
  const [loading, setLoading] = useState(false);
  // to use theme colors
  const styles = useStyles();
  const { colors } = useTheme();

  // loads data
  const handleLoadData = async () => {
    setLoading(true);
    await EncryptedStorage.setItem('data', JSON.stringify(data));
    const localStorageData = await EncryptedStorage.getItem('data');
    const loadedData = JSON.parse(localStorageData);
    setLocalData(loadedData);
    setLoading(false);
  };

  // removes data
  const handleRemoveData = async () => {
    setLoading(true);
    await EncryptedStorage.removeItem('data');
    setLocalData([]);
    setLoading(false);
  };

  const DataCard = ({value}) => {
    return (
    <View key={value?.id} style={styles.card}>
      <Text style={{color: colors.lightText}}>{value?.title}</Text>
    </View>
  );};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>Press the button to load data</Text>
      <Text style={styles.subTitle}>And show from local storage</Text>
      <View style={styles.button}>
        <Button title="load data" onPress={handleLoadData}/>
        {localData.length > 0 && (
          <Button title="remove data" onPress={handleRemoveData}/>
        )}
      </View>
      <ScrollView style={styles.dataList} contentContainerStyle={{alignItems:'center'}}>
        {
          loading
          ? <ActivityIndicator color={colors.primary}/>
          : (localData.length > 0 ? (
            localData && localData?.map((item) => <DataCard value={item}/>)
          ) : (
            <View style={{paddingTop:20}}>
              <Text>Nothing to display here...</Text>
            </View>
          ))
        }
      </ScrollView>

    </SafeAreaView>
  );
};

const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
  mainContainer: {
    paddingTop:10,
    paddingHorizontal: 20,
    alignItems:'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight:'900',
  },
  subTitle: {
    fontSize: 15,
    fontWeight:'500',
    top: -5,
  },
  button: {
    flexDirection: 'row',
    width: '90%',
    justifyContent:'space-evenly',
    paddingTop:10,
  },
  dataList: {
    width: '100%',
    marginTop: 10,
  },
  card: {
    minHeight: 80,
    width: '100%',
    borderRadius: 10,
    padding: 20,
    marginVertical:5,
    backgroundColor: colors.primary,
  },
});};

export default Feed;
