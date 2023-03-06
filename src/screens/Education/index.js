import React from "react";

function Education() {
  return (
    <div>
      <div className="py-10" />
      <section className="hero is-light py-6 custom-font">
        <div className="column my-10 is-4 mx-auto">
          <h2
            data-aos="fade-down"
            className="title has-text-centered is-uppercase"
          >
            Education
          </h2>
          <div className="title-underline" />
        </div>
        <div className="level">
          <div className="level-item has-text-centered">
            <div data-aos="fade-up" data-aos-delay={100}>
              <br /> <br /> <br />
              <p className="edu">Bachelor's Degree</p>
              <p className="abc">University of Colombo</p>
              <p className="edu">BSc. in Information Systems</p>
              <br /> <br /> <br />
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div data-aos="fade-down" data-aos-delay={200}>
              <br /> <br /> <br />
              <p className="edu">School Education</p>
              <p className="abc">K/Akurana M.B.M.V.</p>
              <p className="edu">National School</p>
              <br /> <br /> <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
