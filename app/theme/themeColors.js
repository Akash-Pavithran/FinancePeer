import {DarkTheme, DefaultTheme} from '@react-navigation/native';

// darkText, lightText colors are with respect to light theme
export const lightThemeColors = {
  ...DefaultTheme.colors,
  primary: '#374ea1',
  background: '#FFF',
  card: '#374ea1',
  darkText: 'black',
  lightText: 'white',
  white: 'white',
  border: 'white',
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
  border: 'white',
  tabActive: 'cyan',
  tabInactive: 'white',
  imageBackground: 'black',
};
