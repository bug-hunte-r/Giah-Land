import React from 'react'
import './SidebarDash.css'
import './mediaSidebarDash.css'
import { FaRegUser } from "react-icons/fa6";
import { BiPlusMedical } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

export default function SidebarDash() {
    return (
        <div className="container">
            <div className='container-sidebar'>

                <div className="container-user-info-sidebar">
                    <div>
                        <h3 className="username-sidebar">شایان جعفرنژاد</h3>
                        <h3 className="user-phone-sidebar">09149582599</h3>
                    </div>
                    <img src="/Imgs/my-img 2.webp" className='img-user-sidebar' />
                </div>

                <div className="container-btns-sidebar">
                    <button className="btns-sidebar sidebar-btn-active">مشخصات حساب کاربری <FaRegUser size={17} /> </button>
                    <button className="btns-sidebar">مشاوره با گیاه پزشک <BiPlusMedical size={17} /> </button>
                    <button className="btns-sidebar">پیام های دریافتی <MdMailOutline size={19} /> </button>
                </div>

                <button className="logOut-sidebar">خروج از حساب کاربری <FiLogOut size={17}/> </button>
            </div>
        </div>
    )
}
