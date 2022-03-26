import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import React, {useState} from 'react';

import GetLocation from 'react-native-get-location';
import { useTheme } from '@react-navigation/native';

const Settings = () => {
  const [location, setlocation] = useState('');
  const styles = useStyles();
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);


  const latitude = location?.latitude;
  const longitude = location?.longitude;

  const getLocation = async () => {
    setLoading(true);
    await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
  })
  .then(res => {
      console.log(res);
      setlocation(res);
      setLoading(false);
  })
  .catch(error => {
      const { code, message } = error;
      console.warn(code, message);
      setLoading(false);
  });
  };


  return (
    <View style={styles.mainContainer}>
      {
        loading
        ? (<ActivityIndicator color={colors.darkText}/>)
        : (
          <>
          <Text style={styles.title}>Get Latitude and longitude</Text>
          <Text style={styles.subTitle}>Latitude: {latitude}</Text>
          <Text style={styles.subTitle}>longitude: {longitude}</Text>
          </>
        )
      }
      <View style={styles.button}>
       <Button title="Get Location" onPress={getLocation}/>
      </View>
    </View>
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
    color: colors.darkText,
  },
  button: {
    paddingTop:20,
  },
});};
export default Settings;
