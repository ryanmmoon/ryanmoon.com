// Modules
import Link from 'next/link'

import { getPosts } from './api/posts'

// Components
import Blog from 'components/index/Blog'


// Get posts from Ghost.js
export const getStaticProps = async () => {
  const posts = await getPosts({ filter:'tag:article', order:'published_at DESC', limit: 2 })
  return { 
    props: { posts },
    revalidate: 60
  }
}

function Index({ posts }) {

  return (
    <div className="index">
      <div className='hero'>
        <h1>Hi, I&apos;m <br/><span className='name'>Ryan Moon</span></h1>
        <h2>I&apos;m a Fullstack Web Developer focused on design, 
          implementation, and maintenance of web platforms.</h2>
        <p>Have an exciting project? <Link href="/contact"><a>Let&apos;s connect</a></Link></p>
      </div>
      <hr />
      <Blog posts={posts} />
    </div>
  )
}

export default Index