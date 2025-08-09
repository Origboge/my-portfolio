import '../styles/globals.css';
import 'aos/dist/aos.css'; // ✅ Import AOS styles
import { Inter } from 'next/font/google';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import AOS from 'aos'; // ✅ Import AOS

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }) {
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,      // allow multiple triggers
    mirror: true,     // play animations on scroll up
    offset: 100,      // make it trigger earlier
    easing: 'ease-in-out',
  });

  // Force refresh on scroll to catch direction changes
  window.addEventListener('scroll', () => {
    AOS.refresh();
  });
}, []);

  return (
    <main className={`${inter.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
