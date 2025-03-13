import React from 'react'
import './Main.css'
import './mediaMain.css'
import { RiTruckLine } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";
import { IoMdCard } from "react-icons/io";

export default function Main() {
    return (
        <div className='container'>
            <div className="container-shop-infos">

                <div className="container-card-shop-infos">
                    <RiTruckLine size={50} className='icons-card' />
                    <h1 className="title-card">تحویل درب منزل</h1>
                    <p className='dec-card'>با ایجاد آدرس منزل خود در پروفایل کاربری،محصول خود را درب منزل تحویل بگیرید</p>
                </div>

                <div className="container-card-shop-infos">
                    <SiTicktick size={50} className='icons-card' />
                    <h1 className="title-card">ضمانت محصول</h1>
                    <p className='dec-card'>به مدت دو هفته پس از دریافت محصول در صورت وجود مشکل میتوانید مرجوع کنید</p>
                </div>

                <div className="container-card-shop-infos">
                    <IoMdCard size={50} className='icons-card' />
                    <h1 className="title-card">پرداخت درب منزل</h1>
                    <p className='dec-card'>برای ایجاد اطمینان خاطر مشتریان،علاوه بر پرداخت آنلاین امکان پرداخت درب منزل وجود دارد</p>
                </div>

            </div>

            <div className="conatiner-main-imgs">
                <img src="/Imgs/img-left.png" className='main-site-imgs'/>
                <img src="/Imgs/img-right.png" className='main-site-imgs'/>
            </div>
        </div>
    )
}
