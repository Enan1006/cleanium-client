import React from 'react';
import cleaner from '../../Images/cleaner/cleaner-1.png';

const Hero = () => {
    return (
        <>
            <div className="hero lg:h-[80vh] bg-base-200 md:px-3 lg:px-20">
                <div className="hero-content mt-20 flex-col lg:flex-row">

                    <div data-aos="fade-right">
                        <h1 className="text-5xl font-bold">Cleanium</h1>
                        <p className="py-6">We provide best quality cleaning services accross the country</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <div data-aos="fade-left">
                        <img src={cleaner} className="h-[60vh] rounded-lg" alt='' />
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" className='md:w-full lg:w-4/5 mx-auto p-10 rounded-lg shadow-lg md:mt-0 relative lg:mt-[-50px] z-30 bg-gray-100'>
                <h2 className='text-3xl text-primary font-semibold'>Get Free Estimate</h2>
                <form className=''>
                    <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-5 p-10'>
                        <input type="text" placeholder="Your Name" className="input w-full" />
                        <input type="text" placeholder="Phone number" className="input w-full" />
                        <input type="text" placeholder="Tyoe of cleaning" className="input w-full" />
                        <input type="text" placeholder="Number of bedrooms" className="input w-full" />
                        <input type="text" placeholder="Number of bathrooms" className="input w-full" />
                        <input type="text" placeholder="Frequency of cleaning" className="input w-full" />
                        <input type="sumit" value="Request of Quote" className="input w-full bg-primary text-white" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Hero;