// Modules
import { NextSeo } from 'next-seo'
import { getPage } from './api/pages'
import {
  Box,
  Heading,
} from '@chakra-ui/react'

// Components
import Transition from 'components/Transition'
import Center from 'components/Center'

export const getStaticProps = async () => {
  const page = await getPage('about')

  if (!page) return { notFound: true }
  return { 
    props: { page },
    revalidate: 60
  }
}

function About({ page }) {

  const SEO = {
    title: 'About - Ryan Moon',
    description: `Hello. My name's Ryan Moon and I'm a Fullstack Web Developer with five years of experience creating user-centered applications. `,
  
    openGraph: {
        title: 'About - Ryan Moon',
        description: `Hello. My name's Ryan Moon and I'm a Fullstack Web Developer with five years of experience creating user-centered applications. `,
    }
  }

  const html = page.html

  return (
    <Transition>
      <NextSeo {...SEO} />
      <Center pt="28" pb="8" >
        <Heading fontSize="2xl" lineHeight="1.4" color="gray.700" fontWeight="bold" >About.</Heading>
        <Box className="css-iqlcys" pr="16" dangerouslySetInnerHTML={{ __html: html.replace(/href/g, "target='_blank' href") }} />
      </Center>
    </Transition>
  )
}

export default About