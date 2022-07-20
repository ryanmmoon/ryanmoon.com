// Modules
import {
  Box,
  Container,
  Flex,
  Text,
  ButtonGroup,
  Link,
  Spacer,
} from '@chakra-ui/react'

function Footer() {

  return (
    <Box as="footer" py="5" bg="gray.50" >
      <Container maxW={{ base: 'xl', md: '2xl' }} >
        <Flex>
          <Text fontSize="sm" color="gray.600" fontWeight="semibold" >Made with blood, sweat, and media queries.</Text>
          <Spacer />
          <ButtonGroup spacing="6">
            <Link variant="footer" href="https://dribbble.com/ryanmmoon" target="_BLANK" >dribbble</Link>
            <Link variant="footer" href="https://github.com/ryanmmoon" target="_BLANK" >github</Link>
            <Link variant="footer" href="mailto:hello@ryanmoon.com">hello@ryanmoon.com</Link>
          </ButtonGroup>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer