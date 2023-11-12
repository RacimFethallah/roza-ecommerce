// components/Round.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Round: React.FC = () => {

    const settings = {
      dots: false,
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <section className='flex flex-col items-center h-screen'>
        <h1 className='font-cerlions mt-[8rem] flex text-[40px]'>
          Découvrez nos bombes de bains
        </h1>
  
        <div className='carousel-container'>
          <Slider {...settings}>
            {/* Add your carousel items here */}
            <div>
              <h1>Heeeeeey</h1>
            </div>
            <div>
              <h1>Hellooooo</h1>
            </div>
            
            {/* Add more items as needed */}
          </Slider>
        </div>
  
      </section>
    );
};

export default Round;
