import React from 'react';
import { DayPicker } from 'react-day-picker';
import serviceBanner from '../../Images/banner/services-banner.jpg';
import 'react-day-picker/dist/style.css';

const HireServices = ({ date, setDate }) => {

    return (
        <div>
            <div style={{ backgroundImage: `${serviceBanner}` }}>
                <h2 className='lg:pl-10 py-10 text-primary text-4xl font-semibold'>Services</h2>
            </div>
            <div className='grid md:grid-cols-1 lg:grid-cols-2'>
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    // footer={footer}
                    />
                </div>
                <div>
                    <img src={serviceBanner} alt="" srcSet="" />
                </div>
            </div>
        </div>
    );
};

export default HireServices;