import React from 'react'
import logo from '../images/podchaserLogo.svg'
import { Link } from 'react-router-dom'
import '../styles/header.css'

export default function Header() {
  return (
    <nav>
      <div className='navigation'>
        <Link data-test="logo" className='logo' to="/">
          <img alt='PodChaser Logo' src={logo} />
        </Link>
      </div>
    </nav>
  )
}
