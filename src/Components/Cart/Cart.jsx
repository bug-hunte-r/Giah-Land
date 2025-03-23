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
                            <h3 className="price-cart">1000000 تومان</h3>
                            <h3 className="title-price-cart">:قیمت</h3>
                        </div>
                        <div className="div-add-and-remove-product">
                            <FaPlus />
                            <p className="count-price">1</p>
                            <FaMinus />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
