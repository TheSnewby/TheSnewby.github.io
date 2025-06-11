import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;