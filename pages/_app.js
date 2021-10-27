import { useEffect } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.getElementById('server-side-styles');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    } else {
      console.log('no jss styles')
    }
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
