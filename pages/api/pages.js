// Modules
import GhostContentAPI from '@tryghost/content-api'

const blog_url = process.env.BLOG_URL
const content_api_key = process.env.CONTENT_API_KEY

const ghost = new GhostContentAPI({
  url: blog_url,
  key: content_api_key,
  version: "v4.0"
})

export async function getPage(slug) {
  return await ghost.pages
    .read({ slug }, { include: 'tags' })
    .catch(err => { console.error(err) });
}