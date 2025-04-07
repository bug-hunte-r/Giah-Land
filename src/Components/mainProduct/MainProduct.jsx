import './MainProduct.css'
import './mediaMainProduct.css'
import { BsShopWindow } from "react-icons/bs";
import Comments from './Comment/Comments';
import Footer from '../Home/Footer/Footer';
import { Link, useParams } from 'react-router-dom';
import { useMainProducts } from '../../Context/MainProductContext';

export default function MainProduct() {

    const { allProducts } = useMainProducts()

    const params = useParams()

    const products = allProducts.find(product => product.name == params.ProductName)

    return (
        <div className='container'>
            <div className="container-mainProduct">

                <div className="container-product-price-and-rate">
                    <p className="title-seller">فروشنده</p>
                    <p className="seller"> <abbr style={{ color: '#396F4B' }} >عالی</abbr>فلاور گاردن | عملکرد <BsShopWindow size={17} /></p>
                    <p className="rate">۴.۶</p>
                    <div className="container-price">
                        {products && (
                            <p className="price">{products.price} تومان</p>
                        )}
                        <p className="title-price">:قیمت</p>
                    </div>
                    {products && (
                        <Link className="add-product-btn" to={`/cart/${products.name}`}>افزودن به سبد خرید</Link>
                    )}
                </div>

                <div className="container-main-products-infos">
                    {products && (
                        <p className="title-main-product">نهال و گیاهان {products.category}</p>
                    )}

                    {products && (
                        <h4 className="name-main-product">{products.name}</h4>
                    )}
                    <h4 className="title-infos">ویژگی ها</h4>

                    <div className="conatiner-ifos-boxes">
                        <div className="boxes-infos">
                            <p className="title-box">جنس گلدان</p>
                            {products && (
                                <p className="infos-box">{products.pot_material}</p>
                            )}
                        </div>
                        <div className="boxes-infos">
                            <p className="title-box">خاک گیاه</p>
                            {products && (
                                <p className="infos-box">{products.soil_type}</p>
                            )}
                        </div>
                        <div className="boxes-infos">
                            <p className="title-box">وزن</p>
                            <p className="infos-box">۴۰۰۰ گرم</p>
                        </div>
                        <div className="boxes-infos">
                            <p className="title-box">ابعاد</p>
                            {products && (
                                <p className="infos-box">{products.weight}</p>
                            )}
                        </div>


                        <div className="boxes-infos">
                            <p className="title-box">وضعیت نسبت به آفتاب</p>
                            {products && (
                                <p className="infos-box">{products.sun_exposure}</p>
                            )}
                        </div>

                    </div>
                    <button className="btn-see-all-infos">مشاهده همه ویژگی ها</button>

                </div>

                <div className="container-main-product-img">
                    {products && (
                        <img src={products.image} className='main-product-img' />
                    )}
                </div>
            </div>

            <p className="title-comments">دیدگاه ها و امتیاز</p>
            <div className="container-comments">
                <Comments />
                <Comments />
                <Comments />
                <Comments />
            </div>

            <Footer />
        </div >
    )
}
