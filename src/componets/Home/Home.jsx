import React from 'react'
import './Home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
const Home = () => {
    return (
        <>
            <div className="home section" id="home">
                <div className="home__container container">
                    <div className="home__content">
                        <Social />
                        <div className="home__img"></div>
                        <Data />
                    </div>
                    <ScrollDown />
                </div>
            </div>
        </>
    )
}

export default Home