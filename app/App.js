import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  darkTheme,
  lightTheme,
} from './theme/theme';
import HomeNavigation from './navigations/HomeNavigation';

const App = () => {
  const MyTheme = darkTheme;
  return (
    <NavigationContainer theme={MyTheme}>
      <HomeNavigation />
    </NavigationContainer>
  );
};

export default App;
