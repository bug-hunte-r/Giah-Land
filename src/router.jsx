import Home from "./Components/Home/Home"
import Dashboard from "./Components/Dashboard/Dashboard"
import ChatPage from "./Components/ChatPage/ChatPage"
import UserDashboard from "./Components/UserDashboard/UserDash"
import SignUp from "./Components/SignUp/SignUp"
import Login from "./Components/Login/Login"
import Counseling from "./Components/Counseling/Counseling"

let router = [
    { path: "/", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: '/chat', element: <ChatPage /> },
    { path: '/userDashboard', element: <UserDashboard /> },
    { path: "/signUp", element: <SignUp /> },
    { path: "/login", element: <Login /> },
    { path: "/counseling", element: <Counseling />},
]

export default router