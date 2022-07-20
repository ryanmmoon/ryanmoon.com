// Modules
import Link from 'next/link'

import {
  Box,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'

function NotFound() {

  return (
    <Box position="relative" top="calc(50vh - 90px)" width="180px" m="auto" align="center" >
      <Image src="../img/bucket.svg" alt="404" ></Image>
      <Heading fontSize="2xl" fontWeight="bold" color="gray.600" py="2">Page not found</Heading>
      <Link href="/" ><Text display="inline-block" color="blue.500" 
        _hover={{ textDecoration: "underline", cursor: "pointer" }} >Go back</Text></Link>
    </Box>
  )
}

export default NotFound