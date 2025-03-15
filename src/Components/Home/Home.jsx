import React from 'react'
import Header from './Header/Header'
import HeaderBottom from './Header-Bottom/HeaderBottom'
import Main from './MainSite/Main'
import HousePlants from './House-Plants/HousePlants'
import HousePlantsBottom from './House-Plants-bottom/House-Plants-bottom'
import MedicinalPlant from './MedicinalPlant/MedicinalPlant'

export default function Home() {
    return (
        <div>
            <Header />
            <HeaderBottom />
            <Main />
            <HousePlants />
            <HousePlantsBottom />
            <MedicinalPlant />
        </div>
    )
}
