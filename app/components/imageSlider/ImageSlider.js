import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CommonLoader from '../loaders/CommonLoader';

const IMG = require('../../assets/images/Placeholder.png');

const MemoryCard = ({ images }) => {
  const styles = useStyles();
  const [activeSlide, setActiveSlide] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  const isCarousel = useRef(null);
  const sliderWidth = Dimensions.get('window').width;
  const itemHeight = Dimensions.get('window').height;

  const renderItem = ({ item }) => (
    <>
      {
      // show loader when image is rendering
      !imgLoaded && (
        <View
          style={styles.loaderContainer}
        >
          <CommonLoader />
        </View>
      )
      }
      <Image
        onLoadStart={() => setImgLoaded(false)}
        onLoadEnd={() => setImgLoaded(true)}
        style={styles.sliderImage }
        source={{ uri: item }}
      />
    </>
  );

  return (
    <View style={styles.mainContainer}>
        {images ? (
        <View>
            <Carousel
            data={images}
            ref={isCarousel}
            renderItem={renderItem}
            useScrollView
            sliderWidth={sliderWidth}
            itemWidth={sliderWidth}
            itemHeight={itemHeight}
            onSnapToItem={(index) => setActiveSlide(index)}
            />
            <View style={styles.paginationContainer}>
              <Pagination
                  dotsLength={images.length}
                  activeDotIndex={activeSlide}
                  carouselRef={isCarousel}
                  dotStyle={styles.paginationDot}
                  inactiveDotOpacity={0.5}
                  inactiveDotScale={1}
                  tappableDots
              />
            </View>
        </View>
        ) : (
        <Image style={styles.sliderImage} source={IMG} />
        )}
    </View>
  );
};

const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    mainContainer: {
      backgroundColor: 'transparent',
      width: '100%',
      borderColor: 'transparent',
      borderRadius: 10,
      overflow: 'hidden',
    },
    sliderImage: {
      width: '100%',
      height: 200,
      backgroundColor: colors.imageBackground,
    },
    paginationContainer: {
      position: 'absolute',
      alignSelf: 'center',
      flex: 1,
      bottom: -20,
    },
    paginationDot: {
        width: 6,
        height: 6,
        borderRadius: 5,
        marginHorizontal: -10,
        borderColor: colors.white,
        borderWidth: 2,
        backgroundColor: colors.white,
      },
    loaderContainer: {
        position: 'absolute',
        right: 20,
        width: '100%',
        height: '100%',
      },
  });
};
export default MemoryCard;
