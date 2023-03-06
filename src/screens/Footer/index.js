import React from "react";

function Footer() {
  return (
    <footer id="Contact" className="foot custom-font">
      <div className="content has-text-centered">
        <br />
        <p className="contact">
          <strong className="has-text-primary">Reach Out to Me..</strong> <br />
          <br />
          <a className="has-text-primary" href="textme@zahrunf.html">
            Click to text me at : textme@zahrunf
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="has-text-primary" href="tel:+94112223333">
            Click to call me : +9411 222 3333
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="has-text-primary" href="myfakeadress.html">
            Click to visit me : Spacio, Colombo 07
          </a>
          <br />
        </p>
        <br />
      </div>
      <br />
      <div className="content has-text-centered">
        <p className="font-light">
          <strong className="has-text-primary">Created with Bulma</strong>
        </p>
      </div>
      <div className="content has-text-centered">
        <a href="https://bulma.io/">
          <img
            style={{ width: "200px" }}
            src="https://bulma.io/images/made-with-bulma--dark.png"
            alt=""
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
