import Logo from '../images/logo.svg'
import { useState } from 'react'

export default function Header({onLanguageChange, isEnglish}){
  return (
    <header className="header">
        <img src={Logo} alt="" className="header__logo" />
        <ul className="header__lang-links">
        <li>
          <a href="#" className={`header__lang-link ${!isEnglish && 'header__lang-link_active'}`} onClick={() => {onLanguageChange()}}>Ru</a>
        </li>
        <li>
          <a href="#" className={`header__lang-link ${isEnglish && 'header__lang-link_active'}`} onClick={() => {onLanguageChange()}}>En</a>
        </li>
      </ul>
    </header>
  )
}