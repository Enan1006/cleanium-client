import React from 'react';

const SelectedService = ({ service, setServiceData }) => {
    const { image, name, price } = service;

    return (
        <div className="card  bg-base-100 shadow-xl mt-20">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Service charge: ${price}</p>
                <div className="card-actions justify-end">

                    {/* <!-- The button to open modal --> */}
                    <label htmlFor="service-modal"
                        onClick={() => setServiceData(service)}
                        className="btn btn-primary">Hire</label>
                </div>
            </div>
        </div>
    );
};

export default SelectedService;