import React from 'react'
import './SameProduct.css'
import './mediaSameProduct.css'

export default function SameProduct() {
    return (
        <div className="container-card-same-product">
            <img src='/Imgs/giftPlant.png' className='img-card-same-product' />
            <p className='title-card-same-product'>گیاه پوتوس</p>
            <div className="container-price-product-same-product">
                <p className="price-product-same-product">1000000 تومان</p>
                <p className="title-price-same-product">:قیمت</p>
            </div>
            <button className='see-more-btn-same-product'>مشاهده بیشتر</button>
        </div>
    )
}
