

import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import ChatPage from './Components/ChatPage/ChatPage';

function App() {

  const routes = useRoutes(router)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<ChatPage />} />
      
      </Routes>

    </div>

  )
}

export default App