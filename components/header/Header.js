// Modules
import Link from 'next/link'

import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  useBreakpointValue,
  useDisclosure,
  Spacer,
  Text,
} from '@chakra-ui/react'

import { useState } from 'react'

function Header() {

  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { onToggle, isOpen } = useDisclosure()

  const [menu, setMenu] = useState(false)

  const openMenu = () => setMenu(true)
  const closeMenu = () => setMenu(false)
  
  return (
    <Box as="header" bg="gray.50"  w="100%" pos="fixed" top="0" zIndex="2000" >
      <Container maxW={{ base: 'xl', md: '2xl' }} py="1rem" >
        <Flex>
          <Link href="/" ><Text variant="logo" >Ryan Moon</Text></Link>
          <Spacer />
          <ButtonGroup variant="link" spacing="6">
            {/*
              <Link variant="nav" href="/projects">Projects</Link>
            */}
            <Link href="/about" ><Text variant="nav" >About</Text></Link>
            <Link href="/blog" ><Text variant="nav" >Writings</Text></Link>
            <Link href="/contact" ><Text variant="nav-cta" >Start a project</Text></Link>
          </ButtonGroup>
        </Flex>
      </Container>
      <Divider />
    </Box>
  )
}

export default Header

/*

<Link href="/"><a className='logo'>Ryan Moon</a></Link>
<ul className="nav">
  <li><Link href="/about"><a>About.</a></Link></li>
  <li><Link href="/projects"><a>Projects.</a></Link></li>
  <li><Link href="/blog"><a>Writings.</a></Link></li>
  <li><Link href="/contact"><a className="btn">Get in touch</a></Link></li>
</ul>

<span className="icon-menu" onClick={openMenu}></span>
{menu && (
  <ul className="menu" onClick={closeMenu}>
    <li className="times"><span className="icon-x"></span></li>
    <li><Link href="/"><a>Home.</a></Link></li>
    <li><Link href="/about"><a>About.</a></Link></li>
    <li><Link href="/projects"><a>Projects.</a></Link></li>
    <li><Link href="/blog"><a>Writings.</a></Link></li>
    <li><Link href="/contact"><a>Contact.</a></Link></li>
  </ul>
)}

*/