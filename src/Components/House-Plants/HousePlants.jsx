import React from 'react'
import ProductCard from '../Product-Card/ProductCard'
import './HousePlants.css'
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

export default function HousePlants() {
    return (
        <div className='container'>
            <h1 className='title-slider'>گیاهان آپارتمانی</h1>
            <div className='container-slider'>
                <GrFormPrevious size={30} className='slider-controler-btn' />

                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                <MdNavigateNext size={30} className='slider-controler-btn' />
            </div>
        </div>
    )
}
