import React from 'react';
import {
  StyleSheet, ActivityIndicator, View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

const CommonLoader = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.fetchingDataModal}>
      <ActivityIndicator color={colors.white}/>
    </View>
  );
};

const styles = StyleSheet.create({
    fetchingDataModal: {
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
  });

export default CommonLoader;
