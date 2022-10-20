import React from 'react';

const ServiceRow = ({ sd, index, setDeleteingService }) => {
    const { image, name } = sd;
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
            <td><label onClick={() => setDeleteingService(sd)} htmlFor="delete-service" className="btn btn-error">Remove</label></td>
        </tr>

    );
};

export default ServiceRow;