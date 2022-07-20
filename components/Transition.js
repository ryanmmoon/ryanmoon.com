// Modules
import { SlideFade } from '@chakra-ui/react'

const Transition = ({ children }) => {
  return (
    <SlideFade in>{children}</SlideFade>
  )
}

export default Transition