import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground  } from 'react-native';

import ImageSlider from '../components/imageSlider/ImageSlider';

import BACKGROUND from '../assets/images/background.jpg';
import { useTheme } from '@react-navigation/native';

const Home = () => {
    // styles written as function to use theme colors
    const styles = useStyles();
  const sliderImages = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/0e/25/86/88/beautiful-sunset.jpg',
    'https://thumbor.granitemedia.com/sunsets/XezRZq1J3A6wmYy7gaAgcNSAAaA=/480x360/filters:format(webp):quality(80)/granite-web-prod/df/03/df035e36025043679ee0eef177284820.jpeg',
  ];
  return (
    <SafeAreaView>
      <ImageBackground  source={BACKGROUND} resizeMode="cover" style={styles.background}>
        <View style={styles.body}>
          <ImageSlider images={sliderImages}/>
          <Text style={styles.title}>Image Slider</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
  background: {
    height:'100%',
    width:'100%',
  },
  body: {
    alignItems:'center',
    height:'100%',
    width:'100%',
    paddingTop:10,
    paddingHorizontal: 20,
  },
  title: {
    color: colors.darkText,
    fontSize: 20,
    fontWeight:'900',
  },
});};

export default Home;
