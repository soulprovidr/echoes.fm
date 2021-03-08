import { EffectCallback, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string>(null);
  useLayoutEffect((): EffectCallback => {
    // Get the hash of the url
    if (typeof window !== 'undefined') {
      if (window.location.hash) {
        const searchParams = new URLSearchParams(
          window.location.hash.replace('#', '?')
        );
        console.log('SPOTIFY TOKEN', searchParams.get('access_token'));
        setAccessToken(searchParams.get('access_token'));
        window.location.hash = '';
        router.push('/latest');
      }
    }
  }, []);
  return <Component {...pageProps} />;
}

export default App;
