import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native';

const Feed = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  // to use theme colors
  const styles = useStyles();
  const { colors } = useTheme();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setApiData(json));
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
      <Text style={styles.title}>Data from REST API</Text>
      <ScrollView style={styles.dataList} contentContainerStyle={{alignItems:'center'}}>
        {
          loading
          ? <ActivityIndicator color={colors.darkText}/>
          : (apiData.length > 0 && (
            apiData?.map((item) => <DataCard value={item} key={item.id}/>)
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
    color: colors.darkText,
  },
  subTitle: {
    fontSize: 15,
    fontWeight:'500',
    top: -5,
    color: colors.darkText,

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
    backgroundColor: colors.card,
  },
});};

export default Feed;
