import '../styles/globals.css';
import '../styles/globals.css';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
  const clientSideEmotionCache = createCache({ key: 'css' });

  function MyApp({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
  }) {
    return (
      <CacheProvider value={emotionCache}>
        <Component {...pageProps} />
      </CacheProvider>
    );
  }
}
