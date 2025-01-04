import React, { useState } from "react";
import "./Services.css";
import { Flip } from "react-swift-reveal";
import { useInView } from "react-intersection-observer";
const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [toggle, setToggle] = useState(0);
  return (
    <div className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web
              <br />
              developer
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              setToggle(1);
            }}
          >
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggle === 1 ? "active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => {
                  setToggle(0);
                }}
              ></i>
              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">
                I create responsive, user-friendly websites with HTML, CSS, and
                JavaScript, offering WordPress customization and basic SEO to
                establish a strong online presence.
              </p>
              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page developement.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UI/UX
              <br />
              designer
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              setToggle(2);
            }}
          >
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggle === 2 ? "active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => {
                  setToggle(0);
                }}
              ></i>
              <h3 className="services__modal-title">UI/UX designer</h3>
              <p className="services__modal-description">
                I design intuitive, user-friendly interfaces, focusing on
                seamless UX interactions. Using tools Figma.
              </p>
              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Design for web pages</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    crafting visually appealing experiences to enhance user
                    satisfaction.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
