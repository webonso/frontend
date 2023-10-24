import { Link } from 'react-router-dom';
import './Carousel.scss';
import { shortenText } from '../../utils';


export default function CarouselItem({ url, name, price, description }) {
  return (
    <div className="carouselItem">
      <Link to={'/product-details'}>
        <img src={url} alt='product' className='product--image'/>
        <p className='price'>{`$${price}`}</p>
        <h4>{shortenText(name, 17)}</h4>
        <p className='--mb'>{shortenText(description, 26)}</p>
      </Link>
      <button className='--btn --btn-primary --btn-block'>
      Add To Cart
      </button>
    </div>
  );
}
