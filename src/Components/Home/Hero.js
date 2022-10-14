import React from 'react';
import { toast } from 'react-toastify';
import cleaner from '../../Images/cleaner/cleaner-1.png';

const Hero = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const type = event.target.type.value;
        const bedroom = event.target.bedroom.value;
        const bathroom = event.target.bathroom.value;
        const frequency = event.target.frequency.value;
        const data = {
            name: name,
            phone: phone,
            type: type,
            bedroom: bedroom,
            bathroom: bathroom,
            frequency: frequency
        }
        fetch('http://localhost:5000/estimation', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('You will soon get notified')
            })
    }
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
                <form onSubmit={handleSubmit}>
                    <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-5 p-10'>
                        <input type="text" name='name' placeholder="Your Name" className="input w-full" />
                        <input type="text" name='phone' placeholder="Phone number" className="input w-full" />
                        <input type="text" name='type' placeholder="Type of cleaning" className="input w-full" />
                        <input type="text" name='bedroom' placeholder="Number of bedrooms" className="input w-full" />
                        <input type="text" name='bathroom' placeholder="Number of bathrooms" className="input w-full" />
                        <input type="text" name='frequency' placeholder="Frequency of cleaning" className="input w-full" />
                        <input type="submit" value="Request of Quote" className="btn w-full btn-primary text-white" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Hero;