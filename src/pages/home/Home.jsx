import Slider from '../../components/slider/Slider';
import HomeInfoBox from './HomeInfoBox';
import './Home.scss';
import { productData } from '../../components/carousel/data';
import CarouselItem from '../../components/carousel/CarouselItem';
import ProductCarousel from '../../components/carousel/Carousel';
import ProductCategory from './ProductCategory';
import FooterLinks from '../../components/footer/FooterLinks';

const PageHeading = ({ heading, btnText }) => {
  return (
    <>
      <div className="--flex-between">
        <h2 className="--fw-thin">{heading}</h2>
        <button className="--btn">{btnText}</button>
      </div>
      <div className="--hr"></div>
    </>
  );
};

const Home = () => {
  const productss = productData.map((item, index) => {
    return (
      <div key={item.id}>
        <CarouselItem
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}
        />
      </div>
    );
  });
  return (
    <div>
      <Slider />
      <section>
        <div className="container">
          <HomeInfoBox />
          <PageHeading heading={'Latest Product'} btnText={'Shop Now>>>'} />
          <ProductCarousel products={productss} />
        </div>
      </section>
      <section className="--bg-grey">
        <div className="container">
          <h3>Category</h3>
          <ProductCategory />
        </div>
      </section>
      <section>
        <div className="container">
          <PageHeading heading={'Mobile Phones'} btnText={'Shop Now>>>'} />
          <ProductCarousel products={productss} />
        </div>
      </section>
      <FooterLinks/>
    </div>
  );
};

export default Home;
