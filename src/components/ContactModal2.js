import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap';

import imgContacto1 from "../assets/img/contacto_1.jpeg";
import imgContacto2 from "../assets/img/contacto_2.jpeg";
import imgContacto3 from "../assets/img/contacto_3.jpeg";
import imgContacto4 from "../assets/img/contacto_4.jpeg";
import imgContacto5 from "../assets/img/contacto_5.jpeg";

const items = [
  {
    src: imgContacto1,
  },
  {
    src: imgContacto2,
  },
  {
    src: imgContacto3,
  },
  {
    src: imgContacto4,
  },
  {
    src: imgContacto5,
  }
];

class CarouselComponent extends Component {
  constructor (props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          className="carousel-fade adjust"
        >
          <img src={item.src} alt={item.altText} />
          <div className="carousel-container">
          </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        keyboard={false}
        pause={false}
        ride="carousel"
        interval="3000"
        slide={false}
        className="carousel-fade"
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
      </Carousel>
    );
  }
}

export default CarouselComponent;