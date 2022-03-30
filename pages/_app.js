// Modules
import SEO from '../seo.config'

import { DefaultSeo } from 'next-seo'

// Components
import Header from 'components/Header'
import Footer from 'components/Footer'

// Style
import '../styles/styles.scss'

function App({ Component, pageProps }) {

  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <main id="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default App