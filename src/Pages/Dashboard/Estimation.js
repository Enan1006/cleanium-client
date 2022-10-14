import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../../Components/Loader';
import auth from '../../firebase.init';
import EstimationDetail from './EstimationDetail';
import EstimationModal from './EstimationModal';

const Estimation = () => {
    const [user, loading] = useAuthState(auth);
    const [estimationData, setEstimationData] = useState(null);
    const { isLoading, error, data, refetch } = useQuery(['estimation'], () =>
        fetch('http://localhost:5000/estimation').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            <div>
                <h2 className='text-primary text-4xl text-center font-semibold'>Estimation Request</h2>
                <div className="overflow-x-auto mt-10">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row  --> */}

                            {
                                data.map((sd, index) => <EstimationDetail
                                    key={index}
                                    sd={sd}
                                    setEstimationData={setEstimationData}
                                ></EstimationDetail>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            {estimationData && <EstimationModal
                setEstimationData={setEstimationData}
                estimationData={estimationData}
                refetch={refetch}
            ></EstimationModal>}
        </div>
    );
};

export default Estimation;