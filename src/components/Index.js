import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

import promo1 from '../assets/img/1.jpg';
import promo2 from '../assets/img/2.jpg';
import promo3 from '../assets/img/3.jpg';
import promo4 from '../assets/img/4.jpg';
import promo5 from '../assets/img/5.jpg';
import promo6 from '../assets/img/6.jpg';
import promo7 from '../assets/img/7.jpg';
import promo8 from '../assets/img/8.jpg';


const items = [
  {
    src: promo1,
    altText: 'Cultura de millas',
    caption: 'Smile'
  },
  {
    src: promo2,
    altText: 'Soluciones verdes',
    caption: 'Wilo'
  },
  {
    src: promo3,
    altText: 'Marcas y contenidos',
    caption: 'SMC360'
  },
  {
    src: promo4,
    altText: 'Líder en refractarios',
    caption: 'CERÁMICA CREGAR'
  },
  {
    src: promo5,
    altText: 'Colección de ideas',
    caption: 'UNIVERSIDAD DE RAFAELA'
  },
  {
    src: promo6,
    altText: 'MKT deportivo',
    caption: 'CLÍNICAS DEL REAL MADRID'
  },
  {
    src: promo7,
    altText: 'Para hombres',
    caption: 'CERINI'
  },
  {
    src: promo8,
    altText: 'Humanizando datos',
    caption: 'NEXX'
  }
];

class Index extends Component {
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
        >
          <img src={item.src} alt={item.altText} className="img-slider"/>
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
        className="carousel-fade carouselIndex"
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
      </Carousel>
    );
  }
}

render(<Index />, document.getElementById('root'));

export default Index;