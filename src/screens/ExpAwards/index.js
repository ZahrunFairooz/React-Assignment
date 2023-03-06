import React from "react";

function ExpAwards() {
  return (
    <div>
      <div id="Experience&awards" className="pt-6 hero is-light" />
      <section className="hero late-gray-bg custom-font">
        <div className="column is-4 mx-auto pt-6">
          <h2
            className="title has-text-centered has-text-white is-uppercase font-light"
            data-aos="fade-down"
          >
            Experience &amp; Awards
          </h2>
          <div className="title-underline" />
        </div>
        <div className="columns m-6 is-multiline has-text-centered">
          <div className="column is-4 my-6 px-2" data-aos="fade-down">
            <h3 className="title1 is-3 font-dark">Junior Software Engineer</h3>
            <p className="subtitle1 is-5 font-dark">
              Cambrio Software Labs
              <br />
              March 2020-Present
            </p>
          </div>
          <div className="column is-4 my-6 px-2" data-aos="fade-down">
            <h3 className="title1 is-3 font-light" />
            <p className="subtitle1 is-5 font-light">
              |<br />|<br />|<br />|
            </p>
          </div>
          <div className="column is-4 my-6 px-2" data-aos="fade-up">
            <h3 className="title1 is-3 font-dark">FreshaHack 1.0</h3>
            <p className="subtitle1 is-5 font-dark">Gold Award</p>
          </div>
          <div className="column is-4 my-6 px-2" data-aos="fade-up">
            <h3 className="title1 is-3 font-dark">Vice President,</h3>
            <p className="subtitle1 is-black">Coding Masters Club - Colombo</p>
            <br />
            <button className="button is-black">More Experience</button>
          </div>
          <div className="column is-4 my-6 px-2" data-aos="fade-up">
            <h3 className="title1 is-3 font-light" />
            <p className="subtitle1 is-5 font-light">
              |<br />|<br />|<br />|
            </p>
          </div>
          <div className="column is-4 my-6 px-2" data-aos="fade-down">
            <h3 className="title1 is-3 font-dark">CodeeFest 2021</h3>
            <p className="subtitle1 is-5 font-light">1st Runner's Up</p>
            <br />
            <button className="button is-black">More Awards</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExpAwards;
