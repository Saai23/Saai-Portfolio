import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bx-award about__icon' ></i>
        <h3 className="about__title">6 Star</h3>
        <span className="about__subtitle">LeetCoder</span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase-alt-2 about__icon'></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">4 Projects</span>
      </div>

      {/* <div className="about__box">
        <i class='bx bx-box about__icon'></i>
        <h3 className="about__title">Lovin'</h3>
        <span className="about__subtitle">OpenSource</span>
      </div> */}
    </div>
  )
}

export default Info;