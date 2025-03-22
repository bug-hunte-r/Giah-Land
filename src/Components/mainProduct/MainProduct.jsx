import './MainProduct.css'
import './mediaMainProduct.css'
import { MainProductContext } from '../../Context/MainProductContext'
import { BsShopWindow } from "react-icons/bs";



export default function MainProduct() {

    return (
        <div className='container'>
            <div className="container-mainProduct">

                <div className="container-product-price-and-rate">
                    <p className="title-seller">فروشنده</p>
                    <p className="seller"> <abbr style={{ color: '#396F4B' }} >عالی</abbr>فلاور گاردن | عملکرد <BsShopWindow size={17} /></p>
                    <p className="rate">۴.۶</p>
                    <div className="container-price">
                        <p className="price">۵۶۰/۰۰۰ تومان</p>
                        <p className="title-price">:قیمت</p>
                    </div>
                    <button className="add-product-btn">افزودن به سبد خرید</button>
                </div>

                <div className="container-main-products-infos">
                    <p className="title-main-product">نهال و گیاهان آپارتمانی</p>
                    <h4 className="name-main-product">گیاه طبیعی بابا آدم</h4>
                    <h4 className="title-infos">ویژگی ها</h4>

                    <div className="conatiner-ifos-boxes">
                        <div className="boxes-infos">
                            <p className="title-box">جنس گلدان</p>
                            <p className="infos-box">پلاستیکی</p>
                        </div>
                        <div className="boxes-infos">
                            <p className="title-box">خاک گیاه</p>
                            <p className="infos-box">خاک گلدانی شنی و غنی</p>
                        </div>
                        <div className="boxes-infos">
                            <p className="title-box">وزن</p>
                            <p className="infos-box">۴۰۰۰ گرم</p>
                        </div>
                        <div className="boxes-infos">
                            <p className="title-box">ابعاد</p>
                            <p className="infos-box">۲۵۰x۲۵۰x۸۰۰</p>
                        </div>


                        <div className="boxes-infos">
                            <p className="title-box">وضعیت نسبت به آفتاب</p>
                            <p className="infos-box">آفتاب دوست</p>
                        </div>
                    </div>
                    <button className="btn-see-all-infos">مشاهده همه ویژگی ها</button>

                </div>

                <div className="container-main-product-img">
                    <img src="/Imgs/Frame 11.png" className='main-product-img' />
                </div>
            </div>
        </div>
    )
}
