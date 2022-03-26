import React from 'react';
import {
  View, StyleSheet, Text, Image,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

const Tab = (props) => {
  const { focus, label, tabIcon } = props;
  const styles = useStyles();
  return (
    <View style={styles.tab}>
      <Image
        source={tabIcon}
        style={focus ? styles.tabSelectedIcon : styles.tabUnSelectedIcon}
      />
      <Text style={focus ? styles.tabSelectedLabel : styles.tabUnSelectedLabel}>
        {label}
      </Text>
    </View>
  );
};
const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    tab: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    tabSelectedIcon: {
      tintColor: colors.tabActive,
      width: 23,
      height: 23,
    },
    tabSelectedLabel: {
      color: colors.tabActive,
      fontSize: 9,
      marginTop: 7,
      textTransform: 'uppercase',
    },
    tabUnSelectedIcon: {
      tintColor: colors.tabInactive,
      width: 23,
      height: 23,
    },
    tabUnSelectedLabel: {
      color: colors.tabInactive,
      fontSize: 9,
      marginTop: 7,
      textTransform: 'uppercase',
    },
  });
};
export default Tab;
