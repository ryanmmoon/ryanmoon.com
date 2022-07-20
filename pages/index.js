// Modules
import { getPosts } from './api/posts'

// Components
import Transition from 'components/Transition'
import Hero from 'components/index/Hero'
import Apps from 'components/index/Apps'
import Blog from 'components/index/Blog'

// Get posts from Ghost.js
export const getStaticProps = async () => {
  const apps = await getPosts({ filter:'tag:app', order:'published_at DESC', limit: 3 })
  const posts = await getPosts({ filter:'tag:article', order:'published_at DESC', limit: 3 })
  return { 
    props: { apps, posts },
    revalidate: 60
  }
}

function Index({ apps, posts }) {

  return (
    <Transition>
      <Hero />
      <Apps apps={apps} />
      {/*
      <Blog posts={posts} />
      */}
    </Transition>
  )
}

export default Index