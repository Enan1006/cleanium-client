import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from '../../../Components/Loader';
import DeleteService from './DeleteService';
import ServiceRow from './ServiceRow';

const ManageServices = () => {
    const [deleteingService, setDeleteingService] = useState(null);
    const { isLoading, error, data, refetch } = useQuery(['all-services'], () =>
        fetch('http://localhost:5000/services', {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loader />;
    }
    return (
        <div>
            <h2 className='text-primary text-4xl font-semibold text-center'>All Users</h2>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}

                        {
                            data?.map((sd, index) => <ServiceRow
                                key={index}
                                index={index}
                                sd={sd}
                                refetch={refetch}
                                setDeleteingService={setDeleteingService}
                            ></ServiceRow>)
                        }

                    </tbody>
                </table>
            </div>
            {deleteingService && <DeleteService
                setDeleteingService={setDeleteingService}
                refetch={refetch}
                deleteingService={deleteingService}
            ></DeleteService>}
        </div>
    );
};

export default ManageServices;