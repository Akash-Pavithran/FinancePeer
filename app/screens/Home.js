import React from 'react';
import { Text, StyleSheet, SafeAreaView  } from 'react-native';

import ImageSlider from '../components/imageSlider/ImageSlider';

const Home = () => {
  const sliderImages = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/0e/25/86/88/beautiful-sunset.jpg',
    'https://thumbor.granitemedia.com/sunsets/XezRZq1J3A6wmYy7gaAgcNSAAaA=/480x360/filters:format(webp):quality(80)/granite-web-prod/df/03/df035e36025043679ee0eef177284820.jpeg',
  ];
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageSlider images={sliderImages}/>
      <Text style={styles.title}>Image Slider</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop:10,
    paddingHorizontal: 20,
    alignItems:'center',
  },
  title: {
    fontSize: 20,
    fontWeight:'900',
  },
});

export default Home;
