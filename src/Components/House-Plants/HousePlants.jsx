import React, { useEffect, useState } from 'react'
import ProductCard from '../Product-Card/ProductCard'
import './HousePlants.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';

export default function HousePlants() {

    const [allproducts, setAllProducts] = useState()
    const [housePlants, setHousePlants] = useState()

    // start fetching datas
    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://giahland-api.vercel.app/api/products');
            const ProductData = await res.json();
            setAllProducts(ProductData);
        };

        getData();
    }, []);
    // finish fetching datas


    // start filtring products
    useEffect(() => {
        if (allproducts) {
            let productsObj = allproducts.products

            let filtredHousePlants = productsObj.filter(product => product.category === 'آپارتمانی')
            setHousePlants(filtredHousePlants)
        }
    }, [allproducts]);
    // finish filtring products

    return (
        <div className='container'>
            <h1 className='title-slider'>گیاهان آپارتمانی</h1>
            <div className='container-slider'>

                <div className="swiper-button-next"></div>
                {housePlants && (
                    <Swiper slidesPerView={4} loop={true} modules={[Navigation]} navigation={true} slidesPerGroup={1} className='swiper-container' >

                        {housePlants.map((housePlant) => (
                            <SwiperSlide key={housePlant.id}>
                                <ProductCard name={housePlant.name} price={housePlant.price} image={housePlant.image} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                )}
                <div className="swiper-button-prev"></div>
            </div>
        </div>
    )
}
