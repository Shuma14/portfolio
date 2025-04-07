import React from 'react';
import '../CSS/Experience.css'

const Experience = () => {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-row">
        <div className="timeline-column">
          <h2 className="heading">
            <i className="bx bxs-graduation"></i>Education
          </h2>
          <div className="timeline-box">
            <div className="content-box">
              <div className="date">
                <i className="bx bx-calendar"></i>2021 - 2024
              </div>
              <h3>College</h3>
              <p>Bachelors in Science in Information Technology. Informatics College Manila</p>
            </div>
            <div className="content-box">
              <div className="date">
                <i className="bx bx-calendar"></i>2014 - 2017
              </div>
              <h3>College</h3>
              <p>Bachelors in Science in Computer Science. New Era University</p>
            </div>
            <div className="content-box">
              <div className="date">
                <i className="bx bx-calendar"></i>2008 - 2014
              </div>
              <h3>High School</h3>
              <p>Batangas State University</p>
            </div>
          </div>
        </div>
        <div className="timeline-column">
          <h2 className="heading">
            <i className="bx bxs-briefcase-alt-2"></i>Experience
          </h2>
          <div className="timeline-box">
            <div className="content-box">
              <div className="date">
                <i className="bx bx-calendar"></i>2019 - Present
              </div>
              <h3>KGB Philippines</h3>
              <p>Customer Assistance. Ensured efficient collections and recoveries through the development of procedures in line with risk policies, driving continuous process improvements.</p>
            </div>
            <div className="content-box">
              <div className="date">
                <i className="bx bx-calendar"></i>2016 - 2019
              </div>
              <h3>Teletech Philippines</h3>
              <p>Customer Service Representative. Addressed customer service enquiries quickly and accurately. Managed all payment processing, invoicing, and collections tasks.</p>
            </div>
            <div className="content-box">
              <div className="date">
                <i className="bx bx-calendar"></i>2011 - 2012
              </div>
              <h3>Stellar Philippines</h3>
              <p>Reservation Specialist. Assisted guests with booking and managing transport during their stay. Helped customers make decisions on travel plans based on budget and needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
