import { useState } from 'react'
import Header from './Components/Header/Header'
import { useRoutes } from 'react-router-dom'
import router from './router'
import HeaderBottom from './Components/Header-Bottom/HeaderBottom'
import Main from './Components/MainSite/Main'
import HousePlants from './Components/House-Plants/HousePlants'

function App() {

  let routes = useRoutes(router)

  return (
    <div>
      <Header />
      <HeaderBottom />
      <Main />
      <HousePlants />

      {routes}
    </div>

    
  )
}

export default App
