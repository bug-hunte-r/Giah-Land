import AdminPage from "./Components/AdminPage/AdminPage"
import ChatPage from "./Components/ChatPage/ChatPage"
import UserDashboard from "./Components/Dashboard/Dashboard"

let router = [
    {path: '/chat', element: <ChatPage />},    
    {path: '/admin', element: <AdminPage /> },
    {path: '/dashboard', element: <UserDashboard /> },
        
]

export default router