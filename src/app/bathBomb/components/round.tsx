// components/Round.tsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Round: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: (current: number) => setCurrentSlide(current),
    };

    return (
        <section className='flex flex-col items-center h-screen'>
            <h1 className='font-cerlions mt-[8rem] flex text-[40px]'>
                Découvrez nos bombes de bains
            </h1>

            <div className='carousel-container'>
                <Slider {...settings}>
                    {/* Add your carousel items here */}
                    <div className="flex flex-col items-center">
                        <img className='w-[10rem] h-[10rem] mx-auto mb-10' src="/images/image3.png" alt="" />
                        <h1 className={currentSlide === 0 ? 'border border-black rounded-full inline-block p-4' : ''}>First One</h1>
                    </div>

                    <div className="flex flex-col items-center">
                        <img className='w-[10rem] h-[10rem] mx-auto mb-10' src="/images/image3.png" alt="" />
                        <h1 className={currentSlide === 1 ? 'border border-black rounded-full inline-block p-4' : ''}>Second One</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className='w-[10rem] h-[10rem] mx-auto mb-10' src="/images/image3.png" alt="" />
                        <h1 className={currentSlide === 2 ? 'border border-black rounded-full inline-block p-4' : ''}>Third One</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className='w-[10rem] h-[10rem] mx-auto mb-10' src="/images/image3.png" alt="" />
                        <h1 className={currentSlide === 3 ? 'border border-black rounded-full inline-block p-4' : ''}>Fourth One</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className='w-[10rem] h-[10rem] mx-auto mb-10' src="/images/image3.png" alt="" />
                        <h1 className={currentSlide === 4 ? 'border border-black rounded-full inline-block p-4' : ''}>Fifth One</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className='w-[10rem] h-[10rem] mx-auto mb-10' src="/images/image3.png" alt="" />
                        <h1 className={currentSlide === 5 ? 'border border-black rounded-full inline-block p-4' : ''}>Sixth One</h1>
                    </div>

                    {/* Add more items as needed */}
                </Slider>
            </div>

        </section>
    );
};

export default Round;
