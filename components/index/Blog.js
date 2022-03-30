// Modules
import Link from 'next/link'

import { format } from 'date-fns'

function Articles({ posts }) {

  const formatDate = (date) => {
    return format(new Date(date), 'MMM dd, yyyy')
  }

  return (
    <div className='posts'>
      {posts.map((post) => {
        return (
          <div className='post' key={post.id}>
            <p className="date">{formatDate(post.published_at)}</p>
            <h3><Link href={"/blog/" + post.slug}><a>{post.title}</a></Link></h3>

            <div className="tags">
              {post.tags.length > 0 && post.tags[0].slug !== "article" && <p>#{post.tags[0].name}</p>}
              {post.tags.length > 1 && post.tags[1].slug !== "article" && <p>#{post.tags[1].name}</p>}
              {post.tags.length > 2 && post.tags[2].slug !== "article" && <p>#{post.tags[2].name}</p>}
              {post.tags.length > 3 && post.tags[3].slug !== "article" && <p>#{post.tags[3].name}</p>}
              {post.tags.length > 4 && post.tags[4].slug !== "article" && <p>#{post.tags[4].name}</p>}
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default Articles

/*
{getTags(post.tags)}

const getTags = (tags) => {
  tags.forEach(function list(tag) {
    //console.log(tag)
  })
}
*/