import { useState } from 'react'
import Header from './Components/Header/Header'
import HeaderBottom from './Components/Header-Bottom/HeaderBottom'
import Main from './Components/MainSite/Main'
import HousePlants from './Components/House-Plants/HousePlants'

function App() {

  return (
    <div>
      <Header />
      <HeaderBottom />
      <Main />
      <HousePlants />
    </div>

    
  )
}

export default App
