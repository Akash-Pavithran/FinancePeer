import { useTheme } from '@react-navigation/native';
import React, {useState} from 'react';

import { Text, StyleSheet, PermissionsAndroid, View,Button, Image } from 'react-native';

import {launchCamera} from 'react-native-image-picker';

import IMG from '../assets/icons/user.png';


const Profile = () => {
  const [fileUri, setFileUri] = useState('');
  const styles = useStyles();
let options = {
  mediaType: 'photo',
  storageOptions: {
    saveToPhotos: false,
    path: 'images',
  },
};
const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'App Camera Permission',
        message:'App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      await cameraLaunch();
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
const cameraLaunch = async () => {
  const result = await launchCamera(options);
  setFileUri(result?.assets[0]?.uri);
};
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Click and show your image</Text>
          <Image
            source={fileUri ? { uri: fileUri } : IMG }
            style={fileUri ? styles.image : {...styles.image, tintColor: 'white'}}
          />
          <View style={styles.button}>
              <Button title= "Select File" onPress={requestCameraPermission}/>
          </View>
      </View>
    );

};



const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
  },
  button: {
    paddingTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  image: {
    width: 250,
    height: 250,
    backgroundColor:colors.card,
  },
  title: {
    fontSize: 20,
    fontWeight:'900',
    color: colors.darkText,
    marginBottom: 20,
  },
});};

export default Profile;
