// Modules
import Link from 'next/link'

import {
  Heading,
  Text,
} from '@chakra-ui/react'

// Components
import Center from 'components/Center'

function Hero() {

  return (
    <Center pt="28" pb="8" >
      <Heading fontSize="5xl" color="gray.700" pt="8" pb="2" ml="-2px" >Hello, I&apos;m Ryan 👋</Heading>
      <Text fontSize="xl" py="2" lineHeight="1.4" color="gray.600" >
        Fullstack Web Developer focused on design, <br/>implementation, and maintenance of web platforms.</Text>
      <Text color="gray.600" py="4">Have an exciting project? <Link href="/contact" >
        <Text color="blue.500" ml="1" display="inline-block" _hover={{ textDecoration: "underline", cursor: "pointer" }} >Let&apos;s connect</Text>
      </Link></Text>
    </Center>
  )
}

export default Hero