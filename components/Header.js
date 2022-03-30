//Modules
import Link from 'next/link'

import { useState } from 'react'

function Header() {
  const [menu, setMenu] = useState(false)

  const openMenu = () => setMenu(true)
  const closeMenu = () => setMenu(false)
  
  return (
    <header>
      <Link href="/"><a className='logo'>Ryan Moon</a></Link>
      <ul className="nav">
        <li><Link href="/about"><a>About.</a></Link></li>
        <li><Link href="/projects"><a>Projects.</a></Link></li>
        <li><Link href="/blog"><a>Writings.</a></Link></li>
        <li><Link href="/contact"><a className="btn">Get in touch</a></Link></li>
      </ul>

      <span className="icon-menu" onClick={openMenu}></span>
      {menu && (
        <ul className="menu" onClick={closeMenu}>
          <li className="times"><span className="icon-x"></span></li>
          <li><Link href="/"><a>Home.</a></Link></li>
          <li><Link href="/about"><a>About.</a></Link></li>
          <li><Link href="/projects"><a>Projects.</a></Link></li>
          <li><Link href="/blog"><a>Writings.</a></Link></li>
          <li><Link href="/contact"><a>Contact.</a></Link></li>
        </ul>
      )}
    </header>
  )
}

export default Header