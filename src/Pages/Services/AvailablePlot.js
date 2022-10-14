import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Modal from './Modal';
import SelectedService from './SelectedService';

const AvailablePlot = ({ date, setDate }) => {
    const [serviceData, setServiceData] = useState(null);
    const { isLoading, error, data, refetch } = useQuery(['repoData', date], () =>
        fetch('http://localhost:5000/services').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <button className="btn loading">loading</button>
    }
    if (error) {
        return <span>{error.message}</span>
    }
    return (
        <div>
            <div className='mt-10'>
                <p className='text-primary text-2xl text-center font-bold'>Your selected date: {format(date, 'PP')}</p>
            </div>
            <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    data.map((service, index) => <SelectedService
                        key={index}
                        service={service}
                        setServiceData={setServiceData}
                    ></SelectedService>)
                }
            </div>
            {serviceData && <Modal
                date={date}
                serviceData={serviceData}
                setServiceData={setServiceData}
                refetch={refetch}
            ></Modal>}
        </div>
    );
};

export default AvailablePlot;