// Modules
import Link from 'next/link'

import {
  Text,
  Img,
  Box,
  Grid,
} from '@chakra-ui/react'

// Components
import Center from 'components/Center'

function Apps({ apps }) {
  
  return (
    <Center py="8" >
      <Text fontSize="2xl" pb="2" lineHeight="1.4" color="gray.700" fontWeight="bold" >Projects.</Text>

      {apps.map((app) => {
        return (
          <Link href={"/projects/" + app.slug} key={app.id} >
            <a>
              <Box transition=".2s all" display="block" my="4" _hover={{ cursor: "pointer", 
                textDecoration: "none", transform: "translate(0, -2px)", boxShadow: "lg" }} >

                <Grid templateColumns="68px calc(100% - 68px)" templateRows="26px 26px" p="4" 
                  bg="gray.100" borderWidth="1px" borderColor="gray.300" borderRadius="md" >

                  <Img src={app.feature_image} w="52px" alt="icon" gridRow="1/3" borderRadius="lg" />
                  <Text fontSize="lg" color="gray.700" fontWeight="bold" >{app.title}</Text>
                  <Text fontSize="md" color="gray.600" gridColumn="2" >{app.excerpt}</Text>

                </Grid>
              </Box>
            </a>
          </Link>
        )
      })}

    </Center>
  )
}

export default Apps