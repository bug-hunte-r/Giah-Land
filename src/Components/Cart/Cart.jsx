import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default function Cart() {
    return (
        <div className='container'>
            <div className="container-carts-sides">

                <div className="container-cart-right">
                    <div className="container-img-product-cart">
                        <h3 className='title-cart'>سبد خرید</h3>
                        <img src="/Imgs/Frame 11.png" />
                    </div>
                    <div className="container-add-and-remove-product">
                        <h3 className="name-product-cart">گیاه طبیعی بابا آدم</h3>
                        <h4 className="name-seller-cart">فلاور گاردن</h4>
                        <div className="container-price">
                            <h3 className="price-cart">۵۶۰/۰۰۰ تومان</h3>
                            <h3 className="title-price-cart">:قیمت</h3>
                        </div>
                        <div className="div-add-and-remove-product">
                            <FaPlus />
                            <p className="count-price">1</p>
                            <FaMinus />
                        </div>
                    </div>
                </div>

                <div className="container-cart-left">
                    <div className="container-count-product-side-left">
                        <h3 className="title-count-side-left">: تعداد گیاه</h3>
                        <h3 className="count-side-left">۱</h3>
                    </div>
                    <div className="container-price-side-left">
                        <h3 className="title-price-side-left">:مجموع سبد خرید</h3>
                        <h3 className="price-side-left">۵۶۰/۰۰۰ تومان</h3>
                    </div>
                    <div className="container-send-from">
                        <h3 className="title-send-from">:ارسال توسط</h3>
                        <h3 className="send-from">گیاه لند</h3>
                    </div>
                    <input type="text" placeholder='کد تخفیف' className='input-off-code' />
                    <button className='buy-product-btn'>سفارش</button>
                </div>

            </div>
        </div>
    )
}
