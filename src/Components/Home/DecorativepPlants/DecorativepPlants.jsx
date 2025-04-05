import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProductCard from './../ProductCard/ProductCard';
import './DecorativepPlants.css';
import './../HousePlants/mediaHousePlants.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMainProducts } from '../../../Context/MainProductContext';

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

export default function DecorativepPlants() {
  const { decorativePlants, loading } = useMainProducts()
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

      <h1 className='title-slider'>گیاهان تزئینی</h1>

      {decorativePlants.length != 0 ? (
        <Slider {...settings}>
          {decorativePlants.map((decorativepPlant) => (
            <div key={decorativepPlant.id} className="container-slider">
              <ProductCard {...decorativepPlant} />
            </div>
          ))}
        </Slider>
      ) : (
        <h3 style={{color: 'gray', textAlign: 'center'}}>در حال بارگیری</h3>

      )}
    </div>
  );
}