import React, { useState } from 'react'
import './Header.css'
import '../../media.css'
import { IoMdMenu } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Header() {

  const [showSmallMenu, setShowSmallMenu] = useState(false)

  const showSmallMenuHandler = () => {
    setShowSmallMenu(prevState => !prevState)
  }

  const closeSmallNavHandler = () => {
    setShowSmallMenu(false)
  }

  // const testApi = () => {
  //   fetch('/api/auth/login/api/auth/register')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
      
  //   })
  // }

  // testApi()

  return (
    <div className='container'>
      <nav className='nav'>

        <div className="nav-side-left">
          <button className='login-btn'>ورود/ثبت نام <CiLogin size={20} /></button>
          <MdOutlineShoppingCart size={30} className='icon-basket-nav' />
          <IoIosSearch size={30} className='icon-search-nav' />
        </div>

        <div className="nav-side-right">
          <div className="nav-links-container">
            <ul className='ul-nav-links'>
              <li className='li-nav-links'><a href="" className='nav-links'>تماس باما</a></li>
              <li className='li-nav-links'><Link to={''} className='nav-links'>درباره ما</Link></li>
              <li className='li-nav-links'><a href='' className='nav-links'>وبلاگ</a></li>
              <li className='li-nav-links'><a href="" className='nav-links'>گیاه پزشک</a></li>
              <li className='li-nav-links'><a href="/" className='nav-links'>صفحه اصلی</a></li>
            </ul>
          </div>
          <h1 className='logo'>گیاه لند</h1>
          <IoMdMenu onClick={showSmallMenuHandler} className='hamb-menu' size={25} />
        </div>

        <div className="container-small-menu">
        <ul className={
          showSmallMenu ? 'ul-small-menu-nav-links active' : 'ul-small-menu-nav-links unActive'
        }>
          <IoClose size={20} className='icon-close-small-nav' onClick={closeSmallNavHandler} />
          <li className='li-nav-links-small-menu'><a href="" className='nav-links-small-menu'>تماس باما</a></li>
          <li className='li-nav-links-small-menu'><a href="" className='nav-links-small-menu'>درباره ما</a></li>
          <li className='li-nav-links-small-menu'><a href='' className='nav-links-small-menu'>وبلاگ</a></li>
          <li className='li-nav-links-small-menu'><a href="" className='nav-links-small-menu'>گیاه پزشک</a></li>
          <li className='li-nav-links-small-menu'><a href="/" className='nav-links-small-menu'>صفحه اصلی</a></li>
        </ul>
        </div>

      </nav>
      <div className='search-box-div'>
        <input type="text" placeholder='جسجتو گیاه' className='input-search-box' />
        <img src="Icons/Vector.png" className='logo-search-box' />
      </div>

      <img src="/Imgs/Vector 641.png" className='line-after-nav' />
    </div>
  )
}
