import React from "react";

function MySkills() {
  return (
    <div>
      <div id="Myskills" className="pt-6 hero is-light" />
      <section className="hero late-gray-bg custom-font">
        <div className="column is-4 mx-auto pt-6">
          <h2
            className="title has-text-centered has-text-white is-uppercase font-light"
            data-aos="fade-down"
          >
            My Skills
          </h2>
          <div className="title-underline" />
        </div>
        <div className="columns m-6 is-multiline has-text-centered">
          <div className="column is-4 my-6 px-2" data-aos="fade-down">
            <h3 className="title1 is-3 font-dark">HTML</h3>
            <progress className="progress is-primary" value={90} max={100}>
              90%
            </progress>
          </div>
          <div className="column is-4 my-6 px-2" data-aos="fade-down">
            <h3 className="title1 is-3 font-dark">CSS</h3>
            <progress className="progress is-normal is-dark" max={100}>
              65%
            </progress>
          </div>
          <div className="column is-4 my-6 px-2" data-aos="fade-down">
            <h3 className="title1 is-3 font-dark">JAVASCRIPT</h3>
            <progress className="progress is-primary" value={50} max={100}>
              50%
            </progress>
          </div>
          <div className="column is-4 my-6 px-2" data-aos="fade-up">
            <h3 className="title1 is-3 font-dark">Communication Skills</h3>
            <progress className="progress is-danger" value={87} max={100}>
              100%
            </progress>
          </div>
          <div className="column is-4 my-6 px-2" data-aos="fade-up">
            <h3 className="title1 is-3 font-dark">Language Proficiency</h3>
            <progress className="progress is-danger" value={100} max={100}>
              100%
            </progress>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MySkills;
