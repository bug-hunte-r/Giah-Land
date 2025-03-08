import React from 'react'
import './Header.css'
import './media.css'

export default function Header() {
  return (
    <div className='container'>
      <nav className='nav'>

        <div className="nav-side-left">
          <button className='login-btn'>ورود/ثبت نام<img src="/Icons/login.png" className='icon-login' /></button>
          <button className='btns-nav'><img src="/Icons/basket.png" className='icon-btns-nav' /></button>
          <button className='btns-nav search-btn'><img src="/Icons/search.png" className='icon-btns-nav' /></button>
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
          <img src="/Imgs/گیاه لند.png" />
          <img src="./Icons/hamb-menu.png" className='hamb-menu' />
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
