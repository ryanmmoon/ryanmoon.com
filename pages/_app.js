// Modules
import SEO from '../seo.config'

import { ChakraProvider } from "@chakra-ui/react"
import theme from '../theme/theme.js'

import { DefaultSeo } from 'next-seo'

// Components
import Header from 'components/header/Header'
import Footer from 'components/Footer'

// Style
import '../styles/styles.scss'

function App({ Component, pageProps }) {

  return (
    <>
      <DefaultSeo {...SEO} />
      <ChakraProvider theme={theme} >
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default App