import AdminPage from "./Components/AdminPage/AdminPage"
import ChatPage from "./Components/ChatPage/ChatPage"

let router = [
    {path: '/Chat', element: <ChatPage />},    
    {path: '/Admin', element: <AdminPage /> },    
]

export default router