import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

// is processed server-side only
export default class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='cs'>
        <Head>
          <meta name='theme-color' content='#73B504' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
