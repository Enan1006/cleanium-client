import React from 'react';

const ServiceRow = ({ sd, index }) => {
    const { image, name, role } = sd;
    return (

        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-12 rounded-xl">
                        <img src={image} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td><label htmlFor="deleteUser" className="btn btn-error">Remove</label></td>
        </tr>

    );
};

export default ServiceRow;