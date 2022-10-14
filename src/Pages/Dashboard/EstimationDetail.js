import React from 'react';

const EstimationDetail = ({ sd, setEstimationData, estimationData }) => {
    const { _id, name, phone } = sd;
    return (
        <tr>
            <th>{_id}</th>
            <td>{name}</td>
            <td>{phone}</td>
            <td> <label onClick={() => setEstimationData(sd)} htmlFor="estimation-modal" className="btn btn-info text-white">Details</label> </td>

        </tr>
    );
};

export default EstimationDetail;