import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentRow = ({ sd, index }) => {
    const { _id, name, email, service, date, paid } = sd;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{service}</td>
            <td>{date}</td>
            <td>
                {
                    paid
                        ?
                        <span className='indicator-item badge badge-secondary'>Paid</span>
                        :
                        <Link to={`/my-appointments/payment/${_id}`} className='btn btn-info text-white'>Pay</Link>
                }
            </td>
        </tr>
    );
};

export default AppointmentRow;