import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProductCard from './../ProductCard/ProductCard';
import './HousePlants.css';
import './mediaHousePlants.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MainProductContext, useMainProducts } from '../../../Context/MainProductContext';

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
    const {housePlants, allProducts} = useMainProducts()
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
        </div>
    );
}