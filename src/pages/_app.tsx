import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../config/miui/theme';
import createEmotionCache from '../config/miui/createEmotionCache';
import { SessionProvider } from 'next-auth/react';
import store from '../app/store';

// @TODO need to add ths stylesheet in _document!
import '../styles/global.scss';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
    Component: NextPageWithLayout;
}


const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
      <CacheProvider value={emotionCache}>
          <SessionProvider session={pageProps.session} refetchInterval={0}> {/*basePath="http://example.com/myapp/api"*/}
              <Provider store={store}>
                  <ThemeProvider theme={theme}>
                      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                      <CssBaseline />
                      {getLayout(<Component {...pageProps} />)}
                  </ThemeProvider>
              </Provider>
          </SessionProvider>
      </CacheProvider>
  )
}

export default MyApp;
