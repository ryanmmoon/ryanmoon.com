// Modules
import Link from 'next/link'

import { getPosts } from '../api/posts'
import { format } from 'date-fns'
import { NextSeo } from 'next-seo'

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
    description: 'Tutorials and other helpful resources for learning about web development and security practices.',
  
    openGraph: {
        title: 'Writings - Ryan Moon',
        description: 'Tutorials and other helpful resources for learning about web development and security practices.',
    }
  }

  return (
    <>
      <NextSeo {...SEO} />
      <div className="blog">
        <h1>Writings</h1>
        <p>Tutorials and other helpful resources for learning about web development and security practices.</p>
        <hr />

        <div className="posts">
          {posts.length > 0 &&
            <>
              {posts.map(post => (
                <div className="card" key={post.id}>
                  <img src={post.feature_image} alt={post.title} />
                  <h2><Link href={"/blog/" + post.slug}><a>{post.title}</a></Link></h2>
                  <p>{post.excerpt}</p>
                  <p className="published">{formatDate(post.published_at)} <span>-</span> {post.reading_time} min read</p>
                </div>
              ))}
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Blog