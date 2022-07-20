// Modules
import GhostContentAPI from '@tryghost/content-api'

const blog_url = process.env.BLOG_URL
const content_api_key = process.env.CONTENT_API_KEY

const ghost = new GhostContentAPI({
  url: blog_url,
  key: content_api_key,
  version: "v4.0"
})

export async function getPosts({ filter, order, limit }) {
  let posts = await ghost.posts
    .browse({
      filter: filter,
      order: order,
      limit: limit,
      include: "tags",
    })
    .catch((err) => {
      // console.error(err)
    })

  return posts;
}

export async function getPost(slug) {
  return await ghost.posts
    .read({ slug }, { include: 'tags' })
    .catch(err => { 
      // console.error(err) 
  })
}