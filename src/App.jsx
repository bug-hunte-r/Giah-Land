import { useState } from 'react'
import Header from './Components/Header/Header'
import { useRoutes } from 'react-router-dom'
import router from './router'
import HeaderBottom from './Components/Header-Bottom/HeaderBottom'

function App() {

  let routes = useRoutes(router)

  return (
    <div>
      <Header />
      <HeaderBottom />

      {routes}
    </div>

    
  )
}

export default App
