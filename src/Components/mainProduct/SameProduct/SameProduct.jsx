import React from 'react'
import './SameProduct.css'
import './mediaSameProduct.css'

export default function SameProduct() {
    return (
        <div className="container-card">
            <img src='/Imgs/Frame 11.png' className='img-card' />
            <p className='title-card'>گیاه پوتوس</p>
            <div className="container-price-product">
                <p className="price-product">1000000 تومان</p>
                <p className="title-price">:قیمت</p>
            </div>
            <button className='see-more-btn'>مشاهده بیشتر</button>
        </div>
    )
}
