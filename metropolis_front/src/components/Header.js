import React from 'react'
import logo from '../images/logotipo.png'

export function Header() {
  return (

    <header>
      <a href='/'>
        <div className="logotipo">
          <img src={logo} alt="" />
        </div>
      </a>
    </header >

  )
}