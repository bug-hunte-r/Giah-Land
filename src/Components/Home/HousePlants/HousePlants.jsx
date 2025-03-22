import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProductCard from './../ProductCard/ProductCard';
import './HousePlants.css';
import './mediaHousePlants.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MainProductContext } from '../../../Context/MainProductContext';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FaArrowRight
            className={`${className} slider-btn`}
            style={{ ...style, display: 'block', color: '#417F56', }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FaArrowLeft
            className={`${className} slider-btn`}
            style={{ ...style, display: 'block', color: '#417F56' }}
            onClick={onClick}
        />
    );
}

export default function HousePlants() {

    const [allproducts, setAllProducts] = useState();
    const [housePlants, setHousePlants] = useState();

    // Fetching data
    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://giahland-api.vercel.app/api/products');
            const ProductData = await res.json();
            setAllProducts(ProductData);
        };

        getData();
    }, []);

    // Filtering products
    useEffect(() => {
        if (allproducts) {
            let productsObj = allproducts.products;

            let filtredHousePlants = productsObj.filter(product => product.category === 'آپارتمانی');
            setHousePlants(filtredHousePlants);
        }        
    }, [allproducts]);

    // Slider settings
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                },
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]
    };
    
    return (
        <div className='container'>
            <MainProductContext.Provider value={allproducts}>
                <h1 className='title-slider'>گیاهان آپارتمانی</h1>

                {housePlants && (
                    <Slider {...settings}>
                        {housePlants.map((housePlant) => (
                            <div key={housePlant.id} className="container-slider">
                                <ProductCard name={housePlant.name} price={housePlant.price} image={housePlant.image} id={housePlant.id} />
                            </div>
                        ))}
                    </Slider>
                )}
            </MainProductContext.Provider>
        </div>
    );
}