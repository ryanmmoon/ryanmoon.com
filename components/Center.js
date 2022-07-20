// Modules
import {
  Box,
  Container,
} from '@chakra-ui/react'

const Center = ({ children, pt, pb, py, bg }) => {
  return (
    <Box as="section" pt={pt} pb={pb} py={py} bg={!bg ? "gray.50" : bg} >
      <Container maxW={{ base: 'xl', md: '2xl' }} >
        {children}
      </Container>
    </Box>
  )
}

export default Center