import Logo from '../images/__logo.svg'
import { useState } from 'react'

export default function Header(){
  const [ru, setIsRu] = useState(true)
  return (
    <header className="header">
        <img src={Logo} alt="" className="header__logo" />
        <ul className="header__lang-links">
        <li>
          <a href="#" className={`header__lang-link ${ru && 'header__lang-link_active'}`} onClick={() => setIsRu(true)}>Ru</a>
        </li>
        <li>
          <a href="#" className={`header__lang-link ${ru ? '' : 'header__lang-link_active'}`} onClick={() => setIsRu(false)}>En</a>
        </li>
      </ul>
    </header>
  )
}