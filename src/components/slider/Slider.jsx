import { useEffect, useState } from 'react';
import './Slider.scss';
import { sliderData } from './slider-data';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const autoscroll = true;
  let slideInterval;
  const intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoscroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, intervalTime, autoscroll]);

  const navigate = useNavigate();

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={index === currentSlide ? 'slide current' : 'slide'}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide-image" />
                <div className="content">
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <span className="span3"></span>
                  <span className="span4"></span>
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <br />
                  <button
                    className="--btn --btn-primary"
                    onClick={() => navigate('/shop')}
                  >
                    Shop now{' '}
                  </button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
