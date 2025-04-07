import React from 'react'
import './GiftPlantsCards.css'
import './../HousePlants/mediaHousePlants.css'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
    return (
        <div className="container-card">
            <img src={props.img} className='img-card' />
            <p className='title-card'>{props.name}</p>
            <div className="container-price-product">
                <p className="price-product">{props.price} تومان</p>
                <p className="title-price">:قیمت</p>
            </div>
            <Link to={`/mainProduct/${props.name}`}> <button className='see-more-btn'>مشاهده بیشتر</button> </Link>
        </div>
    )
}
