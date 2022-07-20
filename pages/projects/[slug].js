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
import Center from 'components/Center'

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
    title: "Ryan Moon - " + post.title,
    description: post.excerpt,
  
    openGraph: {
      title: "Ryan Moon - " + post.title,
      description: post.excerpt,
    }
  }

  const html = post.html
  const head = post.codeinjection_head

  return (
    <Transition>
      <NextSeo {...SEO} />
      <Center pt="28" pb="8"  >
        <Box className="css-iqzvNls" dangerouslySetInnerHTML={{ __html: head.replace(/href/g, "target='_blank' href") }} />
        <Box className="css-uyEcqkz" dangerouslySetInnerHTML={{ __html: html.replace(/href/g, "target='_blank' href") }} />
      </Center>
    </Transition>
  )
}

export default Guide