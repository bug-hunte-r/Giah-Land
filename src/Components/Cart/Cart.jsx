import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import './Cart.css'
import './mediaCart.css'

export default function Cart() {
    return (
        <div className='container'>
            <h3 className='title-cart'>سبد خرید</h3>

            <div className="container-carts-sides">

                <div className="container-cart-left">
                    <div className="container-count-product-side-left">
                        <h3 className="count-side-left">۱</h3>
                        <h3 className="title-count-side-left">:تعداد گیاه</h3>
                    </div>
                    <div className="container-price-side-left">
                        <h3 className="price-side-left">۵۶۰/۰۰۰ تومان</h3>
                        <h3 className="title-price-side-left">:مجموع سبد خرید</h3>
                    </div>
                    <div className="container-send-from">
                        <h3 className="send-from">گیاه لند</h3>
                        <h3 className="title-send-from">:ارسال توسط</h3>
                    </div>
                    <input type="text" placeholder='کد تخفیف' className='input-off-code' />
                    <br />
                    <button className='buy-product-btn'>سفارش</button>
                </div>

                <div className="container-cart-right">
                    <div className="container-add-and-remove-product">
                        <h3 className="name-product-cart">گیاه طبیعی بابا آدم</h3>
                        <h4 className="name-seller-cart">فلاور گاردن</h4>
                        <div className="container-price-cart">
                            <h3 className="price-cart">۵۶۰/۰۰۰ تومان</h3>
                            <h3 className="title-price-cart">:قیمت</h3>
                        </div>
                        <div className="div-add-and-remove-product">
                            <FaMinus className='icon-remove-product' />
                            <p className="count-product">1</p>
                            <FaPlus className='icon-add-product' />
                        </div>
                    </div>
                    <div className="container-img-product-cart">
                        <img src="/Imgs/Frame 11.png" className='img-product-in-cart' />
                    </div>
                </div>
            </div>
        </div>
    )
}
