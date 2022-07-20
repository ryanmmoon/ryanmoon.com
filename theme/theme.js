import { extendTheme } from "@chakra-ui/react"

import * as components from './components'
import * as foundations from './foundations'

const theme = extendTheme({
  ...foundations,
  components: { ...components },
})

export default theme