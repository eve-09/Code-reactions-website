import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

export default class FeedbackCard extends Component {
  componentDidMount() {
    const options = {
      duration: 300,
      onCycleTo: () => {
        console.log("New Slide");
      },
    };
    var elems = document.querySelectorAll(".carousel");
    // eslint-disable-next-line no-unused-vars
    var instances = M.Carousel.init(elems, options);
  }
  render() {
    return (
      <>
        <div class="carousel">
          <a class="carousel-item" href="#one!">
            <img src="https://lorempixel.com/250/250/nature/1" alt="1" />
            <div></div>
          </a>
          <a class="carousel-item" href="#two!">
            <img src="https://lorempixel.com/250/250/nature/2" alt="2" />
          </a>
          <a class="carousel-item" href="#three!">
            <img src="https://lorempixel.com/250/250/nature/3" alt="3" />
          </a>
          <a class="carousel-item" href="#five!">
            <img src="https://lorempixel.com/250/250/nature/5" alt="5" />
          </a>
        </div>
      </>
    );
  }
}
