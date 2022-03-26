import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export const lightThemeColors = {
  ...DefaultTheme.colors,
  primary: '#374ea1',
  background: '#FFF',
  card: 'grey',
  text: 'white',
  white: 'white',
  border: 'blue',
  tabActive: 'cyan',
  tabInactive: 'white',
  imageBackground: 'black',
};

export const darkThemeColors = {
  ...DarkTheme.colors,
  primary: '#374ea1',
  background: '#010917',
  card: 'grey',
  text: 'white',
  white: 'black',
  border: 'blue',
  tabActive: 'cyan',
  tabInactive: 'white',
  imageBackground: 'black',
};
