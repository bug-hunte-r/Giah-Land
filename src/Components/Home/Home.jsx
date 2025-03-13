import React from 'react'
import Header from './Header/Header'
import HeaderBottom from './Header-Bottom/HeaderBottom'
import Main from './MainSite/Main'
import HousePlants from './House-Plants/HousePlants'

export default function Home() {
    return (
        <div>
            <Header />
            <HeaderBottom />
            <Main />
            <HousePlants />
        </div>
    )
}