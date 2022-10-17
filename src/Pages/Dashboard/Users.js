import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from '../../Components/Loader';
import DeleteUser from './DeleteUser';
import UserRow from './UserRow';

const Users = () => {
    const [deleteingUser, setDeleteingUser] = useState(null);
    const { isLoading, error, data, refetch } = useQuery(['users'], () =>
        fetch('http://localhost:5000/users', {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loader />;
    }
    // if (error) {
    //     console.log(`${error.message}`)
    // }
    return (
        <div>
            <h2 className='text-primary text-4xl font-semibold text-center'>All Users</h2>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Actions</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}

                        {
                            data?.map((sd, index) => <UserRow
                                key={index}
                                sd={sd}
                                refetch={refetch}
                                setDeleteingUser={setDeleteingUser}
                            ></UserRow>)
                        }

                    </tbody>
                </table>
            </div>
            {deleteingUser && <DeleteUser
                setDeleteingUser={setDeleteingUser}
                refetch={refetch}
                deleteingUser={deleteingUser}
            ></DeleteUser>}
        </div>
    );
};

export default Users;