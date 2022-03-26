import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { darkThemeColors, lightThemeColors } from './themeColors';

export const darkTheme = {
  ...DarkTheme,
  colors: darkThemeColors,
};
export const lightTheme = {
  ...DefaultTheme,
  colors: lightThemeColors,
};
