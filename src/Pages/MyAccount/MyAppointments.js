import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../../Components/Loader';
import auth from '../../firebase.init';
import AppointmentRow from './AppointmentRow';

const MyAppointments = () => {
    const [user, loading] = useAuthState(auth);
    // const [appointment, setAppointment] = useState(null)
    const { isLoading, data } = useQuery(['my-appointment'], () =>
        fetch(`https://cleanium-server-1.onrender.com/my-appointment?email=${user?.email}`, {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading || loading) {
        return <Loader />
    }


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
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}

                        {
                            data?.map((sd, index) => <AppointmentRow
                                key={index}
                                index={index}
                                sd={sd}
                            ></AppointmentRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;