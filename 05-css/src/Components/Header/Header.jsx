import React from 'react'
import style from './Header.module.css'

function Header() {
  return (
    <div className={style.header}>
        <h1>Star infotech</h1>
        <button className={style.btn}>Login</button>
    </div>
  )
}

export default Header
