// Modules
import { format } from 'date-fns'
import {
  Box,
  Img,
  Link,
  Text,
} from '@chakra-ui/react'

// Components
import Center from 'components/Center'

function Articles({ posts }) {

  const formatDate = (date) => {
    return format(new Date(date), 'MMM dd, yyyy')
  }

  return (
    <Center py="8">
      <Text fontSize="2xl" lineHeight="1.4" color="gray.700" fontWeight="bold" >Articles.</Text>
      <Text color="gray.600" py="1" >Tutorials and other helpful resources for learning web development and security practices.</Text>

      {posts.map((post) => {
        return (
          <Link key={post.id} href={"/blog/" + post.slug} transition=".3s all" display="inline-block" my="4" maxW="30%" mr="6"
            _hover={{ textDecoration: "none", transform: "translate(0, -2px)", boxShadow: "lg" }} >

            <Box bg="gray.100" p="3" borderWidth="1px" borderColor="gray.300" borderRadius="md" >

              <Img src={post.feature_image} mb="3" />
              <Text color="gray.600" fontSize="sm" lineHeight="2" >{formatDate(post.published_at)}</Text>
              <Text color="gray.700" fontSize="xl" lineHeight="1.3" mb="2" >{post.title}</Text>

              {/*

              <Box color="gray.500" >
                {post.tags.length > 0 && post.tags[0].slug !== "article" && <Text display="inline-block" mr="3" fontSize="sm" >#{post.tags[0].name}</Text>}
                {post.tags.length > 1 && post.tags[1].slug !== "article" && <Text display="inline-block" mr="3" fontSize="sm" >#{post.tags[1].name}</Text>}
                {post.tags.length > 2 && post.tags[2].slug !== "article" && <Text display="inline-block" mr="3" fontSize="sm" >#{post.tags[2].name}</Text>}
                {post.tags.length > 3 && post.tags[3].slug !== "article" && <Text display="inline-block" mr="3" fontSize="sm" >#{post.tags[3].name}</Text>}
                {post.tags.length > 4 && post.tags[4].slug !== "article" && <Text display="inline-block" mr="3" fontSize="sm" >#{post.tags[4].name}</Text>}
              </Box>

              */}

            </Box>
          </Link>
        )
      })}
    </Center>
  )
}

export default Articles