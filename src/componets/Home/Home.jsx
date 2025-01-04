import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { Pulse } from "react-swift-reveal";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div ref={ref}>
      <Pulse key={inView ? "inView" : "notInView"} duration={1000}>
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
      </Pulse>
    </div>
  );
};

export default Home;
