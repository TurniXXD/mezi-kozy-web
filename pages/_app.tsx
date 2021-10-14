import React from 'react'
import NextApp, { AppProps } from 'next/app'
//import fetch from 'isomorphic-unfetch'
import { withUrqlClient, NextUrqlAppContext } from 'next-urql'

//import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/oxn.css'
import '../styles/globals.css'

export default function App({ Component, pageProps, err }: AppProps & { err: any }) {
  return <Component {...pageProps} err={err} />
}

App.getInitialProps = async (ctx: NextUrqlAppContext) => {
  const appProps = await NextApp.getInitialProps(ctx)
  return { ...appProps }
}