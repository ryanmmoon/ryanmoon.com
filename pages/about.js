// Modules
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { getPage } from './api/pages'

export const getStaticProps = async () => {
  const page = await getPage('about')

  if (!page) return { notFound: true }
  return { 
    props: { page },
    revalidate: 60
  }
}

function About({ page }) {

  const router = useRouter()
	if (router.isFallback) {
		return (
      <div className="about">
        <h1 className="loading">Loading</h1>
      </div>
    )
	}

  const SEO = {
    title: 'About - Ryan Moon',
    description: `Hello, I'm a fullstack web developer based in Albany, New York.`,
  
    openGraph: {
        title: 'About - Ryan Moon',
        description: `Hello, I'm a fullstack web developer based in Albany, New York.`,
    }
  }

  const html = page.html

  return (
    <>
      <NextSeo {...SEO} />
      <div className="about" dangerouslySetInnerHTML={{ __html: html.replace(/href/g, "target='_blank' href") }} />
    </>
  )
}

export default About