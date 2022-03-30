//Modules
import Link from 'next/link'

function Footer() {

  return (
    <footer>
      <p>Made with blood, sweat, and media queries.</p>
      <ul>
        <li>
          <Link href="https://dribbble.com/ryanmmoon">
            <a target="_blank" rel="noreferrer">dribbble.</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/ryanmmoon">
            <a target="_blank" rel="noreferrer">github.</a>
          </Link>
        </li>
        <li>
          <Link href={"mailto:hello@" + process.env.HOST_DOMAIN}>
            <a target="_blank" rel="noreferrer">{"hello@" + process.env.HOST_DOMAIN}.</a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer