import React from 'react'
import './House-Plants-bottom-cards.css'

export default function HousePlantsBottomCards(props) {
    

    return (
        <div className="container-bottom-cards" style={{backgroundImage: props.img}}>
            <h1 className="title-bottom-cards-house-plants">{props.name}</h1>
            <button className='btn-bottom-cards-house-plants'>خرید {props.name}</button>
        </div>
    )
}
