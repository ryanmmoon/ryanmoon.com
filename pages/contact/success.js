// Modules
import Link from 'next/link'

function Success() {

  return (
    <div className="success">
        <h1>Success</h1>
        <hr />
        <p>Your email has been sent. I will respond to you as soon as possible.</p>
        <Link href="/contact"><a>Go back<span className="icon-arrow-right"></span></a></Link>
    </div>
  )
}

export default Success