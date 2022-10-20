import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ sd, refetch, setDeleteingUser }) => {
    const { email, role } = sd;
    console.log(sd)
    const makeAdmin = () => {
        fetch(`https://cleanium-server-1.onrender.com/users/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made admin')
                    console.log(result)
                }
            })
    }
    return (

        <tr>
            <th></th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-sucess'>Make Admin</button>}</td>
            {/* <td><button className='btn btn-error'>Remove</button></td> */}
            <td><label onClick={() => setDeleteingUser(sd)} htmlFor="deleteUser" className="btn btn-error">Remove</label></td>
        </tr>

    );
};

export default UserRow;