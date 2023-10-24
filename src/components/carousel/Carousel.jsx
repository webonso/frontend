
import  Carousel  from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import "./Carousel.scss"
// requires a loader
import { responsive } from './data';

export default function ProductCarousel({ products }) {
  return (
    <div>
      <Carousel
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={300}
        customTransition="all 300ms ease"
        transitionDuration={1000}
      >
        {products}
      </Carousel>
    </div>
  );
}