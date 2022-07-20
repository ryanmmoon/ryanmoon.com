// Modules
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { getPost } from '../api/posts'
import {
  Box,
  Image,
  Container,
  Grid,
  Text,
  Divider,
  Heading,
} from '@chakra-ui/react'

// Components
import Transition from 'components/Transition'

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)

  if (!post) return { notFound: true }
  return { 
    props: { post },
    revalidate: 60
  }
}

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: true,
	}
}

function Guide({ post }) {

  const router = useRouter()
	if (router.isFallback) {
		return (
      <></>
    )
	}

  const SEO = {
    title: post.title,
    description: post.excerpt,
  
    openGraph: {
      title: post.title,
      description: post.excerpt,
    }
  }

  const html = post.html
  const sidebar = post.codeinjection_head

  return (
    <Transition>
      <NextSeo {...SEO} />
      <Box as="section" pt="28" pb="8" bg="gray.50" >
        <Container maxW={{ base: 'xl', md: '4xl' }} >
          <Grid templateColumns="calc(100% - 620px) 620px" gap="8" >

            <Box className="css-vqlcxi" w="220px" >
              <Text fontSize="13px" fontWeight="700" letterSpacing=".2em" textTransform="uppercase" my="2" >Table of contents</Text>
              <Divider my="3" />
              <Box dangerouslySetInnerHTML={{ __html: sidebar }} />
            </Box>

            <Box gridColumn="2" >
              <Heading fontSize="2.75rem" fontWeight="bold" color="gray.700" >{post.title}</Heading>
              <Text fontSize="1.05rem" fontStyle="italic" color="#323b4e" my="4" >{post.excerpt}</Text>
              <Box mb="16">
                <Image src={post.feature_image} alt={post.title} my="10" />
              </Box>
              <Box className="css-lcuyrv" dangerouslySetInnerHTML={{ __html: html.replace(/href/g, "target='_blank' href") }} />
            </Box>

          </Grid>
        </Container>
      </Box>
    </Transition>
  )
}

export default Guide