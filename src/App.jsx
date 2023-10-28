

import React , { useState } from 'react'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Servicio from './components/Servicio'



const App = () => {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting = {"¡Bienvenida al consultorio!"}/>
      <Servicio/>
      
    </div>
  )
}

export default App