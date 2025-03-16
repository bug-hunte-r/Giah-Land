import React from 'react'
import './ContentMedicinalPlant.css'
import '../mediaMedicinalPlant.css'
import { RiPlantFill } from "react-icons/ri";

export default function ContentMedicinalPlant(props) {
    return (
        <>
            <div className="container-main-medicinal-plant">
                <RiPlantFill className='icon-medicinal-plant' size={50} />
                <h1 className="title-medicinal-plant">{props.title}</h1>
                <p className="desc-medicinal-plant">{props.desc}</p>
            </div>
        </>
    )
}
