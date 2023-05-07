import React from 'react';
import {
  ChakraProvider,
 
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './compoment/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
    </ChakraProvider>
  );
}

export default App;
