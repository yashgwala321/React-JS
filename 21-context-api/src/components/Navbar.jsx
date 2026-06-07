import React from 'react'
import Navbar2 from './Navbar2'
import { useState } from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

function Navbar(props) {

  const [theme] = useContext(ThemeDataContext)

  return (
    <div className={theme}>
        <h1>Navbar</h1>
        <Navbar2/>
    </div>
  )
}

export default Navbar
