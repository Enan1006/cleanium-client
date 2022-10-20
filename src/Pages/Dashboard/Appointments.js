import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../Components/Loader';

const Appointments = () => {
    const navigate = useNavigate();
    const { isLoading, error, data } = useQuery(['appointment'], () =>
        fetch('https://cleanium-server-1.onrender.com/appointment', {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        toast(`${error.message}`)
    }
    // const [data, setData] = useState([]);
    // fetch('https://cleanium-server-1.onrender.com/appointment', {
    //     method: "GET",
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => {
    //     if (res.status === 401 || 403) {
    //         navigate('/');
    //         toast('wrong')
    //     }
    //     return res.json()
    // })
    //     .then(result => setData(result))
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