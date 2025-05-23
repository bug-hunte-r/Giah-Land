import React from 'react'
import './SidebarDash.css'
import './mediaSidebarDash.css'
import { FaRegUser } from "react-icons/fa6";
import { BiPlusMedical } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';

export default function SidebarDash() {

    const location = useLocation()

    return (
        <div className="container">
            <div className='container-sidebar'>

                <div className="container-user-info-sidebar">
                    <div>
                        <h3 className="username-sidebar">شایان جعفرنژاد</h3>
                        <h3 className="user-phone-sidebar">09149582599</h3>
                    </div>
                    <img src="/Imgs/img-default-user.png" className='img-user-sidebar' />
                </div>

                <div className="container-btns-sidebar">
                    <Link to={'/userDashboard'} className={`link-sidebar btns-sidebar ${location.pathname === "/userDashboard" ? "sidebar-btn-active" : ""}`}>مشخصات حساب کاربری <FaRegUser size={17} className='icons-sidebar' /></Link>
                    <Link to={'/counseling'} className={`link-sidebar btns-sidebar ${location.pathname === "/counseling" ? "sidebar-btn-active" : ""}`}>مشاوره با گیاه پزشک <BiPlusMedical size={17} className='icons-sidebar' /></Link>
                    <Link to={'/chat'} className={`link-sidebar btns-sidebar ${location.pathname === "/chat" ? "sidebar-btn-active" : ""}`}>پیام های دریافتی <MdMailOutline size={19} className='icons-sidebar' /></Link>
                </div>

                <button className="logOut-sidebar">خروج از حساب کاربری <FiLogOut size={17} className='icon-logout-sidebar'/> </button>
            </div>
        </div>
    )
}
