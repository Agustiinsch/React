import React from 'react'
import MenuEnlaces from './menuEnlaces'
import '../../estilosgen.css'
import Login from './Login'

const Encabezado = () => {
  return (
  <div className='header'>
    <div className='blanco'>Portal de eventos</div>
    <MenuEnlaces/>
    <Login/>
  </div>
  )
}

export default Encabezado