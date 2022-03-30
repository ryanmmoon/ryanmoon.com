import Document, {Html, Head, Main, NextScript} from 'next/document'

class Doc extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preload" href="/fonts/source-sans-pro/source-sans-pro-400.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/source-sans-pro/source-sans-pro-600.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/source-sans-pro/source-sans-pro-700.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/source-serif-pro/source-serif-pro-400.woff2" as="font" crossOrigin="" />
        
        <link rel="stylesheet" href="https://i.icomoon.io/public/870f1d17ba/ryanmooncom/style.css"></link>
        <script defer data-domain="ryanmoon.com" src="https://pa.inspin.co/js/latest.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
