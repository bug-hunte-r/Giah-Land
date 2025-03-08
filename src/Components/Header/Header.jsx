import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='container'>
      <nav className='nav'>

        <div className="nav-side-left">
          <button className='login-btn'>ورود/ثبت نام<img src="/Icons/login.png" alt="" className='icon-login' /></button>
          <button className='btns-nav'><img src="/Icons/basket.png" alt="" /></button>
          <button className='btns-nav'><img src="/Icons/search.png" alt="" /></button>
        </div>

        <div className="nav-side-right">
          <div className="nav-links-container">
            <ul className='ul-nav-links'>
              <li className='li-nav-links'><a href="" className='nav-links'>تماس باما</a></li>
              <li className='li-nav-links'><a href="" className='nav-links'>درباره ما</a></li>
              <li className='li-nav-links'><a href="" className='nav-links'>وبلاگ</a></li>
              <li className='li-nav-links'><a href="" className='nav-links'>گیاه پزشک</a></li>
              <li className='li-nav-links'><a href="/" className='nav-links'>صفحه اصلی</a></li>
            </ul>
          </div>
          <img src="/Imgs/گیاه لند.png" alt="" />
        </div>

      </nav>
      <img src="/Imgs/Vector 641.png" className='line-after-nav' />
    </div>
  )
}
