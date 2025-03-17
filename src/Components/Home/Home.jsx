import React from 'react'
import Header from './Header/Header'
import HeaderBottom from './Header-Bottom/HeaderBottom'
import Main from './MainSite/Main'
import HousePlants from './HousePlants/HousePlants'
import HousePlantsBottom from './House-Plants-bottom/House-Plants-bottom'
import MedicinalPlant from './MedicinalPlant/MedicinalPlant'
import DecorativepPlants from './DecorativepPlants/DecorativepPlants'
import DecorativepPlantsBottom from './DecorativepPlants/DecorativepPlantsBottom/DecorativepPlantsBottom'
import GiftPlants from './GiftPlants/GiftPlants'

export default function Home() {
    return (
        <div>
            <Header />
            <HeaderBottom />
            <Main />
            <HousePlants />
            <HousePlantsBottom />
            <MedicinalPlant />
            <DecorativepPlants />
            <DecorativepPlantsBottom />
            <GiftPlants />
        </div>
    )
}
