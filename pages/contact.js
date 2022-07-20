// Modules
import { NextSeo } from 'next-seo'
import {
  Box,
  Container,
} from '@chakra-ui/react'

// Components
import Transition from 'components/Transition'
import Form from 'components/contact/Form'

function Contact() {
  
  const SEO = {
    title: 'Contact - Ryan Moon',
    description: 'Please feel free to email me or fill out the form below and I will get back to you as soon as possible.',
  
    openGraph: {
        title: 'Contact - Ryan Moon',
        description: 'Please feel free to email me or fill out the form below and I will get back to you as soon as possible.',
    }
  }

  return (
    <Transition>
      <NextSeo {...SEO} />
      <Box as="section" pt="28" pb="8" bg="gray.50" >
        <Container maxW={{ base: 'xl', md: '2xl' }} >
          <Form />
        </Container>
      </Box>
    </Transition>
  )
}

export default Contact