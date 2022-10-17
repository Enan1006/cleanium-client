import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../../Components/Loader';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [user, loading] = useAuthState(auth);
    const { isLoading, data } = useQuery(['my-appointment'], () =>
        fetch(`http://localhost:5000/my-appointment?email=${user?.email}`, {
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
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}

                        {
                            data?.map((sd, index) => <tr>
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

export default MyAppointments;