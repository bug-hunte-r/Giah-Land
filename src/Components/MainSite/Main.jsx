import React from 'react'
import './Main.css'
import { RiTruckLine } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";
import { IoMdCard } from "react-icons/io";

export default function Main() {
    return (
        <div className='container'>
            <div className="container-infos">
                <div className="container-product-delivery-at-home">
                    <RiTruckLine />
                    <h1 className="title-delivery">تحویل درب منزل</h1>
                    <p className='dec-delivery'>با ایجاد آدرس منزل خود در پروفایل کاربری،محصول خود را درب منزل تحویل بگیرید</p>
                </div>

                <div className="container-product-delivery-at-home">
                    <SiTicktick />
                    <h1 className="title-delivery">ضمانت محصول</h1>
                    <p className='dec-delivery'>به مدت دو هفته پس از دریافت محصول در صورت وجود مشکل میتوانید مرجوع کنید</p>
                </div>

                <div className="container-product-delivery-at-home">
                    <IoMdCard />
                    <h1 className="title-delivery">پرداخت درب منزل</h1>
                    <p className='dec-delivery'>برای ایجاد اطمینان خاطر مشتریان،علاوه بر پرداخت آنلاین امکان پرداخت درب منزل وجود دارد</p>
                </div>
            </div>
        </div>
    )
}
