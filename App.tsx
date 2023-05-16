import React from 'react';

import { StatusBar } from 'react-native';
import { Plan } from './src/screens/Plan';

const App = () => {
  return (
    <>
      <StatusBar translucent />
      <Plan />
    </>
  );
};

export default App;
