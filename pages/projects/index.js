// Modules
import { getPosts } from '../api/posts'
import { NextSeo } from 'next-seo'

// Get applications from Ghost.js
export const getStaticProps = async () => {
  const apps = await getPosts({ filter:'tag:app', order:'published_at DESC', limit: 8 })
  return { 
    props: { apps },
    revalidate: 60
  }
}

function Projects({ apps }) {

  const SEO = {
    title: 'Projects - Ryan Moon',
    description: ``,
  
    openGraph: {
        title: 'Projects - Ryan Moon',
        description: ``,
    }
  }

  return (
    <>
      <NextSeo {...SEO} />
    </>
  )
}

export default Projects

// dangerouslySetInnerHTML={{ __html: app.codeinjection_head.replace(/href/g, "target='_blank' href") }}

/*

<div className="projects">
  <h1>Projects</h1>
  <p>Some of the websites I&apos;ve created.</p>
  <hr />

  <div className="apps">
    {apps.map((app) => {
      return (
        <div className='project' key={app.id}>
          <img src={app.feature_image} alt={app.title} />
          <div className="desc">
            <h3>{app.title}</h3>
            <p>{app.excerpt}</p>
            <div className="btns" dangerouslySetInnerHTML={{ __html: app.codeinjection_head }}></div>
          </div>
        </div>
      )
    })}
  </div>
</div>

*/