import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Loader from '../../Components/Loader';

const Appointments = () => {
    const { isLoading, error, data } = useQuery(['appointment'], () =>
        fetch('http://localhost:5000/appointment').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        toast(`${error.message}`)
    }
    console.log({ data })
    return (
        <div>
            <h2 className='text-primary text-4xl text-center font-semibold'>Appointments</h2>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}

                        {
                            data.map((sd, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{sd.name}</td>
                                <td>{sd.email}</td>
                                <td>{sd.service}</td>
                                <td>{sd.date}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Appointments;