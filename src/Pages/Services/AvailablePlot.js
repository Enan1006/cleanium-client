import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React from 'react';

const AvailablePlot = ({ date, setDate }) => {
    const { isLoading, error, data } = useQuery(['repoData'], () =>
        fetch('services.json').then(res =>
            res.json()
        )
    )
    if (isLoading === true) {
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
                    data.map(service => <div className="card  bg-base-100 shadow-xl mt-20">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.name}</h2>
                            <p>Service charge: ${service.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Hire</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AvailablePlot;