import React from 'react'
import '../../estilosgen.css'
import './footer.css'
import logo from '../img/logo1.png'

const PiePagina = () => {
  return (
    <div className='footer blanco'>
      <div className="col50"><img src={logo}/>
        <div className="col flex">
            <div className="col50">Columna 1</div>
            <div className="col50">Columna 2</div>
        </div>
      </div>
      <div className="col50 oro60">b</div>
    </div>
  )
}

export default PiePagina