// Modules
import Link from 'next/link'

function NotFound() {

  return (
    <div className="not-found">
        <div className="bucket"></div>
        <h1>Page not found</h1>
        <Link href="/"><a>Go back<span className="icon-arrow-right"></span></a></Link>
    </div>
  )
}

export default NotFound