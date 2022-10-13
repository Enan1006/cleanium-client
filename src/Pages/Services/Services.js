import React, { useState } from 'react';
import AvailablePlot from './AvailablePlot';
import HireServices from './HireServices';

const Services = () => {
    const today = new Date();
    const [date, setDate] = useState(today);
    return (
        <div className='mt-20 mx-10'>
            <HireServices date={date} setDate={setDate} />
            <AvailablePlot date={date} setDate={setDate} />
        </div>
    );
};

export default Services;