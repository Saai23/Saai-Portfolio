import React from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id='qualification'>
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Postgraduation MCA</h3>
                <span className="qualification__subtitle">
                  VIT - Vellore
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Undergraduation BSc</h3>
                <span className="qualification__subtitle">
                  SRM - Chennai
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">CBSE (X) - State Board(XII)</h3>
                <span className="qualification__subtitle">
                  
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">ReactJs Developer Intern</h3>
                <span className="qualification__subtitle">
                  CabeyS Infodeer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2023 - Dec 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Full-stack Developer Intern</h3>
                <span className="qualification__subtitle">
                  Shiash Info Solution Pvt Ltd
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jun 2023 - Aug 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UI Developer Intern</h3>
                <span className="qualification__subtitle">
                  Alphaho
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Mar 2020 - Aug 2021 
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
