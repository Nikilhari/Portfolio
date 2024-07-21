import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact section" id='contact'>
                 <h2 className="section__title">
                Get in touch
            </h2>
            <span className="section__subtitle">Contact me</span>
            <div className="contact_container container">
                <div className="contact__content">
                    <h3 className="contact__title">
                        Talk to me</h3>
                        <div className="contact__info">
                            <div className="contact__card">
                                <i className="bx bx contact__card-icon"></i>
                                <h3 className="contact__card-title">Email</h3>
                                <span className="contact__card-data">nikilhari3@gmail.com</span>
                                <a href="mailto:nikilhari3@gmail.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt"></i>

                                </a>
                            </div>
                            <div className="contact__card">
                                <i className="bx bx contact__card-icon"></i>
                                <h3 className="contact__card-title">Whatsapp</h3>
                                <span className="contact__card-data">90479 10486</span>
                                <a href="" className="contact__button">Write me <i className="bx bx-right-arrow-alt"></i>

                                </a>
                            </div>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Contact