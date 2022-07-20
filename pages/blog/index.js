// Modules
import Link from 'next/link'

import { getPosts } from '../api/posts'
import { format } from 'date-fns'
import { NextSeo } from 'next-seo'
import {
  Box,
  Image,
  Grid,
  Text,
  Heading,
} from '@chakra-ui/react'

// Components
import Transition from 'components/Transition'
import Center from 'components/Center'

// Get posts from Ghost.js
export const getStaticProps = async () => {
  const posts = await getPosts({ filter:'tag:article', order:'published_at DESC', limit: 8 })
  return { 
    props: { posts },
    revalidate: 60
  }
}

function Blog({ posts }) {

  const formatDate = (date) => {
    return format(new Date(date), 'MMM dd, yyyy')
  }

  const SEO = {
    title: 'Writings - Ryan Moon',
    description: 'Tutorials and other helpful resources for learning web development.',
  
    openGraph: {
        title: 'Writings - Ryan Moon',
        description: 'Tutorials and other helpful resources for learning web development.',
    }
  }

  return (
    <Transition>
      <NextSeo {...SEO} />
      <Center pt="28" pb="8" >
        <Heading fontSize="2xl" lineHeight="1.4" color="gray.700" fontWeight="bold" >Writings.</Heading>
        <Text fontSize="1.05rem" color="#323b4e" py="1" >Tutorials and other helpful resources for learning web development.</Text>

        {posts.length > 0 && posts.map(post => (
          <Link href={"/blog/" + post.slug} key={post.id}>
            <a>
              <Box transition=".2s all" display="block" my="4" _hover={{ cursor: "pointer", 
                textDecoration: "none", transform: "translate(0, -2px)", boxShadow: "lg" }} >

                <Grid templateColumns="3fr 6fr" gap="6" p="4" 
                  bg="gray.100" borderWidth="1px" borderColor="gray.300" borderRadius="md" >

                  <Image src={post.feature_image} alt={post.title} />
                  <Box>
                    <Text fontSize="2xl" color="gray.700" fontWeight="bold" >{post.title}</Text>
                    <Text className="css-wpqmcj" fontSize="md" color="gray.600" my=".15em" >{post.excerpt}</Text>
                    <Text color="gray.600" fontSize="sm" lineHeight="2">{formatDate(post.published_at)} - {post.reading_time} min read</Text>
                  </Box>
                  
                </Grid>
              </Box>
            </a>
          </Link>
        ))}
        
      </Center>
    </Transition>
  )
}

export default Blog