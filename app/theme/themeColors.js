import {DarkTheme, DefaultTheme} from '@react-navigation/native';

// darkText, lightText colors are with respect to light theme
export const lightThemeColors = {
  ...DefaultTheme.colors,
  primary: '#374ea1',
  background: '#FFF',
  card: 'grey',
  darkText: 'black',
  lightText: 'white',
  white: 'white',
  border: 'blue',
  tabActive: 'cyan',
  tabInactive: 'white',
  imageBackground: 'black',
};

export const darkThemeColors = {
  ...DarkTheme.colors,
  primary: '#010917',
  background: '#010917',
  card: 'grey',
  darkText: 'white',
  lightText: 'black',
  white: 'black',
  border: 'blue',
  tabActive: 'cyan',
  tabInactive: 'white',
  imageBackground: 'black',
};
