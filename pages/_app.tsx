import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
