import React from "react";
import { Fade } from "react-swift-reveal";
import { useInView } from "react-intersection-observer";

const Frontend = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div ref={ref}>
      <Fade
        key={inView ? "inView" : "notInView"}
        bottom={true}
        duration={1500}
        distance={"100px"}
      >
        <div className="skills__content">
          <h3 className="skills__title">Frontend developer</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">Git</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">React</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">Angular</h3>
                  <span className="skills__level">Basics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Frontend;
