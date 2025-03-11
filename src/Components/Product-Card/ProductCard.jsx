import React from 'react'
import './ProductCard.css'

export default function ProductCard() {
    return (
            <div className="container-card">
                    <img src="/Imgs/Frame 11.png" className='img-card' />
                    <p className='title-card'>گیاه طبیعی بابا آدم</p>
                    <div className="container-price-product">
                        <p className="price-product">۸۵۲,۰۰۰ تومان</p>
                        <p className="title-price">:قیمت</p>
                    </div>
                    <button className='see-more-btn'>مشاهده بیشتر</button>
            </div>
    )
}
