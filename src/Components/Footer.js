import React from "react";
import "../Css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer-section" id="cnct">
        <div class="f-container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="single-cta">
                <div class="cta-text">
                  <h4>Find us</h4>
                  <span>
                    Suite 106, H-10 Express Arcade, Netaji Subhash Place,
                    Delhi-110024, India
                  </span>
                </div>
              </div>
              <div class="single-cta">
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span>+91-999999999</span>
                </div>
              </div>
              <div class="single-cta">
                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span>hello@codereactions.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="copyright-text">
                <p>
                  Code Reactions &copy; {new Date().getFullYear()}, All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
