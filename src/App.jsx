

import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import ChatPage from './Components/ChatPage/ChatPage';
import Footer from './Components/Home/Footer/Footer';

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>

      <Footer />

    </div>

  )
}

export default App