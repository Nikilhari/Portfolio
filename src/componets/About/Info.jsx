import React from 'react'

const Info = () => {
    return (
        <div className="about__info">
            <div className="about__box">
                <i class='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">
                    3 projects
                </span>
            </div>
            <div className="about__box">
                <i class='bx bx-support about__icon'></i>
                <h3 className="about__title">24/7</h3>
                <span className="about__subtitle">
                    Support
                </span>
            </div>
        </div>
    )
}

export default Info