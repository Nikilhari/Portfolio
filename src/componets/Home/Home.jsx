import React from 'react'
import './Home.css'
import Social from './Social'
import Data from './Data'
const Home = () => {
    return (
        <>
            <div className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <Social />
                        <div className="home__img"></div>
                        <Data />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home