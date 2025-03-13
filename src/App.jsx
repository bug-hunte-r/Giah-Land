import { useState } from 'react'
import { useRoutes, Route, Routes } from 'react-router-dom'
import router from './router'
import Home from './Components/Home/Home'

function App() {

  const routes = useRoutes(router)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {routes}
    </div>

  )
}

export default App