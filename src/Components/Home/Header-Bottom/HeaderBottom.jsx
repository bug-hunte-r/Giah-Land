import React from 'react'
import './HeaderBottom.css'
import './mediaHeaderBottom.css'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function HeaderBottom() {
  return (
    <div className='container'>
      <div className="container-sides">

        <div className="header-bottom-side-left">
          <img src="/Imgs/headerBottomImg.png" className='header-Bottom-Img' />
        </div>

        <div className="header-bottom-side-right">
          <h1 className="title-header-bottom">خرید راحت گیاه، با <abbr style={{ color: '#417F56' }}>گیاه لند</abbr></h1>
          <p className="desc-header-bottom">با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه استفاده کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت مشاوره بگیری.</p>
          <div className="container-buttons">
            <button className='btn-off-flower'>گیاهان تخفیف دار</button>
            <Link to={'/counseling'} className='btn-conference'>مشاوره با گیاه پزشک <FaArrowLeft /></Link>
          </div>
          <div className="flowers-count-container">
            <div className="homely-flower">
            <h1 className='count-flower'>۹۴۳+</h1>
            <h2 className='cate-flower'>گیاه خانگی</h2>
            </div>
            <div className="complement-flower">
            <h1 className='count-flower'>۲۳۴+</h1>
            <h2 className='cate-flower'>گیاه تزئینی</h2>
            </div>
            <div className="gifts-flower">
            <h1 className='count-flower'>۱۲۸+</h1>
            <h2 className='cate-flower'>گیاه کادویی</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
