// Modules
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { getPost } from '../api/posts'

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
      <div className="article" />
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
    <>
      <NextSeo {...SEO} />
      <article className="article">
        <div className="content">
          <div className="sidebar">
            <h4>Table of contents</h4>
            <hr />
            <div className="links" dangerouslySetInnerHTML={{ __html: sidebar }} />
          </div>
          <div className="head">
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <figure className="thumbnail">
              <img alt={post.title} src={post.feature_image} />
            </figure>
          </div>
          <section dangerouslySetInnerHTML={{ __html: html.replace(/href/g, "target='_blank' href") }} />
        </div>
      </article>
    </>
  )
}

export default Guide