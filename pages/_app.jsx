import '../styles/globals.css'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY") // Initialize with your public key
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}