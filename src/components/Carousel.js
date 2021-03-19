import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselCaption,
    CarouselIndicators
  } from 'reactstrap';

import cai1 from '../assets/img/slider-cai-1.jpg';
import cai2 from '../assets/img/slider-cai-2.jpg';
import cai3 from '../assets/img/slider-cai-3.jpg';
import cai4 from '../assets/img/slider-cai-4.jpg';
import cai5 from '../assets/img/slider-cai-5.jpg';

const items = [
  {
    src: cai1,
  },
  {
    src: cai2,
  },
  {
    src: cai3,
  },
  {
    src: cai4,
  },
  {
    src: cai5,
  }
];

class CarouselComponent extends Component {
  constructor(props) {
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
          <img src={item.src} alt={item.altText}/>
          <div className="carousel-container">
            <CarouselCaption captionHeader={item.altText} className="carousel-caption"/>
            <CarouselCaption captionText={item.caption} className="carousel-caption"/>
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
        {slides}
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
      </Carousel>
        );
    }
}

export default CarouselComponent;