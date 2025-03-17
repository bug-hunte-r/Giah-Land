import React from 'react'
import './Footer.css'
import './mediaFooter.css'
import { CiLinkedin } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className='container'>
            <div className="container-footer-sides">

                <div className="side-left-footer">

                    <div className="gift-plants-footer">
                        <h3 className="title-side-left-footer">کادویی</h3>
                        <p className="link-footer">آنتوریوم</p>
                        <p className="link-footer">بونسای</p>
                        <p className="link-footer">بنت قنسول</p>
                    </div>

                    <div className="decor-plants-footer">
                        <h3 className="title-side-left-footer">تزئینی</h3>
                        <p className="link-footer">پشم</p>
                        <p className="link-footer">کراسولا</p>
                        <p className="link-footer">کراسولا حرفه ای</p>
                    </div>

                    <div className="house-plants-footer">
                        <h3 className="title-side-left-footer">آپارتمانی</h3>
                        <p className="link-footer">بابا آدم</p>
                        <p className="link-footer">یوکا</p>
                        <p className="link-footer">سانسوریا</p>
                    </div>

                </div>

                <div className="side-right-footer">
                    <h1 className='title-footer'>گیاه لند</h1>
                    <p className="desc-footer">گیاه لند سعی بر این دارد با ارائه خدمات نوین در حوزه فروش گیاهان باعث راحتی
                        شما در خرید انواع گیاه شود.تنوع گیاهان و همچنین ایجاد بستری مناسب برای مشاوره با گیاه پزشک از دیگر مزیت های گیاه لند میباشد.</p>
                    <div className="container-bottom-right-footer">
                        <h1 className="phone-number">تلفن پشتیبانی:  0212۴44</h1>
                        <div className="container-social-icons">
                            < FaInstagram size={25} className='icons-footer'/>
                            <PiTelegramLogo size={25} className='icons-footer'/>
                            <CiLinkedin size={25} className='icons-footer'/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
