

import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import ChatPage from './Components/ChatPage/ChatPage';
import SignUp from './Components/SignUp/SignUp';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

function App() {


  return (
    <div>

      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

    </div>

  )
}

export default App