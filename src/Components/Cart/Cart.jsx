import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import './Cart.css'
import './mediaCart.css'
import Modal from '../Modal/Modal';

export default function Cart() {

    const [isShowModal, setIsShowModal] = useState(false)

    const [productCount, setProductCount] = useState(1)
    let priceProduct = 560000

    let totalPrice = productCount * priceProduct

    let minusProductCountHandler = () => {
        if (productCount > 1) {
            setProductCount(productCount - 1)
        }
    }

    let plusProductCountHandler = () => {
        setProductCount(productCount + 1)
    }

    let buyProductHandler = () => {
        setIsShowModal(true)

        setProductCount(1)
    }

    setTimeout(() => {
        setIsShowModal(false)
    }, 4000)

    return (
        <div className='container'>
            {isShowModal && (
                <Modal />
            )}

            <h3 className='title-cart'>سبد خرید</h3>
            <div className="container-carts-sides">

                <div className="container-cart-left">
                    <div className="container-count-product-side-left">
                        <h3 className="count-side-left">{productCount}</h3>
                        <h3 className="title-count-side-left">:تعداد گیاه</h3>
                    </div>
                    <div className="container-price-side-left">
                        <h3 className="price-side-left">{totalPrice} تومان</h3>
                        <h3 className="title-price-side-left">:مجموع سبد خرید</h3>
                    </div>
                    <div className="container-send-from">
                        <h3 className="send-from">گیاه لند</h3>
                        <h3 className="title-send-from">:ارسال توسط</h3>
                    </div>
                    <input type="text" placeholder='کد تخفیف' className='input-off-code' />
                    <br />
                    <button className='buy-product-btn' onClick={buyProductHandler}>سفارش</button>
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
                            <FaMinus className='icon-remove-product' onClick={minusProductCountHandler} />
                            <p className="count-product">{productCount}</p>
                            <FaPlus className='icon-add-product' onClick={plusProductCountHandler} />
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
