import React from 'react'
import './Page404.css'
import './mediaPage404.css'
import { Link } from 'react-router-dom'

export default function Page404() {
    return (
        <div className='container'>
            <div className="container-404">
                <img src="/Imgs/404.png" className='img-404' />
                <h3 className="title-page-404">!صفحه مورد نظر شما یافت نشد</h3>
                <Link to={'/'}> <button className='btn-return-to-home-page'>بازگشت به صفحه اصلی</button> </Link>
            </div>
        </div>
    )
}
