import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
    return (
        <div className='container'>
            <div className="container-empty-cart">
                <img src="/Imgs/box.png" className='img-empty-cart' />
                <h3 className='title-empty-cart'>سبد خرید شما خالی می باشد</h3>
                <p className='subTitle-empty-cart'>می توانید برای مشاهده بیشتر محصولات به صفحه اصلی بروید</p>
                <Link to={'/'}> <button className='btn-return-to-home-page'>بازگشت به صفحه اصلی</button> </Link>
            </div>
        </div>
    )
}
