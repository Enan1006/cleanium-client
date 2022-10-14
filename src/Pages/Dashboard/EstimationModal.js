import React from 'react';

const EstimationModal = ({ setEstimationData, estimationData, refetch }) => {
    const { name, phone, bedroom, bathroom, frequency } = estimationData;
    return (
        <div>
            <input type="checkbox" id="estimation-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box grid justify-center mt-20">
                    <label htmlFor="estimation-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Estimation Detail</h3>
                    <div className="form-control w-full max-w-xs mt-5">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' value={name || ''} disabled readOnly className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full max-w-xs mt-5">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" name='name' value={phone || ''} disabled readOnly className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full max-w-xs mt-5">
                        <label className="label">
                            <span className="label-text">Number of Bedroom</span>
                        </label>
                        <input type="text" name='name' value={bedroom || ''} disabled readOnly className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full max-w-xs mt-5">
                        <label className="label">
                            <span className="label-text">Number of Bathroom</span>
                        </label>
                        <input type="text" name='name' value={bathroom || ''} disabled readOnly className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full max-w-xs mt-5">
                        <label className="label">
                            <span className="label-text">Cleaning Frequency</span>
                        </label>
                        <input type="text" name='name' value={frequency || ''} disabled readOnly className="input input-bordered w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstimationModal;