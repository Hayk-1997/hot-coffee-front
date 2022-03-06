import { Provider } from 'react-redux';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../config/miui/theme';
import createEmotionCache from '../config/miui/createEmotionCache';
import store from '../app/store';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}


const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
      <CacheProvider value={emotionCache}>
          <Head>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
              <title>Hot Coffee</title>
          </Head>
          <Provider store={store}>
              <ThemeProvider theme={theme}>
                  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                  <CssBaseline />
                  <Component {...pageProps} />
              </ThemeProvider>
          </Provider>
      </CacheProvider>
  )
}

export default MyApp;
