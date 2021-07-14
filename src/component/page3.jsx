  import React, { Component } from "react";
  import ReactDOM from "react-dom";
  import { Carousel } from "react-responsive-carousel";
  import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

  export class Page3 extends Component {
    render() {
      return (
        <div class="pic" >
        <Carousel showThumbs={false} infiniteLoop={true}>
          <div style={{ height: "400px", color: "#fff" }}><img src="/img/floor cleaner.jpg" /></div>
          <div style={{ height: "400px", color: "#fff" }}><img src="/img/floor cleaner 1.jpg" /></div>
          <div style={{ height: "400px", color: "#fff" }}><img src="/img/hand wash.jpg" /></div>
        </Carousel>

        </div>
      );
    }
  }