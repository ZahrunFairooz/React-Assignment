import React from "react";

function HeroNavBar() {
  return (
    <section className="hero late-gray-bg is-fullheight custom-font">
      <div className="hero-head">
        <nav className="navbar is-primary is-fixed-top">
          <div
            className="
              is-flex is-justify-content-space-between
              w-full
              px-1
              py-3
              late-gray-bg
            "
          >
            <div className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="#Home">
                  {" "}
                  Home{" "}
                </a>
                <a className="navbar-item" href="#About">
                  {" "}
                  About{" "}
                </a>
                <a className="navbar-item" href="#Blog">
                  Blog{" "}
                </a>
                <a className="navbar-item" href="#Experience&awards">
                  Experience &amp; Awards
                </a>
                <a className="navbar-item" href="#Portfolio">
                  Portfolio
                </a>
                <a className="navbar-item" href="#Myskills">
                  My Skills
                </a>
                <a className="navbar-item" href="#Contact">
                  Contact{" "}
                </a>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <a className="navbar-item" href="social media.html">
                    <img src="ig.png" width={28} height={28} />
                  </a>
                  <a className="navbar-item" href="social media.html">
                    <img src="fb.png" width={28} height={28} />
                  </a>
                  <a className="navbar-item" href="social media.html">
                    <img src="twitter.png" width={28} height={28} />
                  </a>
                  <a className="navbar-item" href="social media.html">
                    <img src="github.png" width={28} height={28} />
                  </a>
                  <a className="navbar-item" href="social media.html">
                    <img src="in.png" width={28} height={28} />
                  </a>
                </div>
              </div>
              <div className="navbar-end">
                <span className="navbar-item">
                  <a className="button is-primary" href="21021074 - CV.pdf">
                    <span className="iconify" data-icon="fe:github" />
                    <span>Download CV</span>
                  </a>
                </span>
              </div>
              <span className="navbar-burger" data-target="navbarMenuHeroB">
                <span />
                <span />
                <span />
              </span>
            </div>
          </div>
          <div id="navbarMenuHeroB" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item mobile-menu" href="#Home">
                {" "}
                Home{" "}
              </a>
              <a className="navbar-item mobile-menu" href="#About">
                About
              </a>
              <a className="navbar-item mobile-menu" href="#Blog">
                Blog
              </a>
              <a className="navbar-item mobile-menu" href="#Experience&awards">
                Experience &amp; Awards
              </a>
              <a className="navbar-item mobile-menu" href="#Portfolio">
                Portfolio{" "}
              </a>
              <a className="navbar-item mobile-menu" href="#Myskills">
                My Skills{" "}
              </a>
              <a className="navbar-item mobile-menu" href="#Contact">
                Contact{" "}
              </a>
              <a className="navbar-item mobile-menu" href="#Portfolio">
                Portfolio{" "}
              </a>
              <span className="navbar-item is-flex is-justify-content-center">
                <a className="button is-primary" href="21021074 - CV.pdf">
                  <span className="iconify" data-icon="fe:github" />
                  <span>Download CV</span>
                </a>
              </span>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body p-0 custom-font" id="Home">
        <div className="main-hero" />
        <div className="container has-text-centered">
          <p data-aos="zoom-out-down" className="subtitle has-text-white">
            {" "}
            Hi, I am
          </p>
          <h1 data-aos="zoom-out" className="title has-text-white font-light is-1">
            <em> ZAHRUN FAIROOZ</em>
          </h1>
          <p data-aos="zoom-out-up" className="subtitle has-text-white font-light">
            UI / UX DESIGNER | SOFTWARE ENGINEER | FREE LANCER
          </p>
        </div>
        {/*image start*/}
        <figure data-aos="fade-down" className="image p-6 m-auto column is-6">
          <img className="standard-radius" src="pic 2.jpg" alt="Image" />
        </figure>
        {/*image end*/}
      </div>
      {/* Main container */}
      <div id="About" />
      <nav className="level">
        {/* Left side */}
        <div className="level-left">
          <div className="level-item">
            {/*start pro img*/}
            <div className="hero-body p-10 custom-font">
              <div className="main-hero1" />
              <figure
                data-aos="fade-down"
                className="image1 p-10 m-3 column is-13"
              >
                <img className="st-radius" src="pro.png" alt="Image" />
              </figure>
            </div>
          </div>
          {/*end pro img*/}
        </div>
        {/* Right side */}
        <div className="level-right">
          <div className="level-item" />
          {/* About */}
          <div className="pt-5" />
          <section className="block py-6 custom-font">
            <div className="column is-7 mx-auto">
              <h2
                data-aos="fade-down"
                className="abt has-text-centered is-uppercase"
              >
                About Me
              </h2>
              <div className="title-underline" />
            </div>
            <div className="column is-10 m-auto p-2">
              <p data-aos="fade-up" className="p">
                I am a UI/UX Designer with front-end development skills and a
                software engineer based in Sri Lanka.
                <br />
                I have 2+ years of experience in the field. <br />
                I am skilled in Information architecture, wire framing,
                <br /> prototyping and visual communication
              </p>
            </div>
          </section>
        </div>
      </nav>
    </section>
  );
}



export default HeroNavBar;
