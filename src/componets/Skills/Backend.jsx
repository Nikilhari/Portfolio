import React from "react";
import { Fade } from "react-swift-reveal";
import { useInView } from "react-intersection-observer";
const Backend = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  return (
    <div ref={ref}>
      <Fade
        key={inView ? "inView" : "notInView"}
        top={true}
        duration={1500}
        distance={"100px"}
      >
        <div className="skills__content">
          <h3 className="skills__title">Backend Developer</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">Node</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">MySql</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">Springboot</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">MongoDB</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Backend;
