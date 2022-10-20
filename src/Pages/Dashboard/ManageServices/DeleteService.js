import React from 'react';
import { toast } from 'react-toastify';

const DeleteService = ({ deleteingService, setDeleteingService, refetch, data }) => {
    const { _id } = deleteingService;
    // console.log(data)
    console.log(deleteingService);
    const deleteService = () => {
        fetch(`https://cleanium-server-1.onrender.com/services/${_id}`, {
            method: "DELETE",
            headers: {
                'content-type': "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                toast.success('Service deleted successfully');
                setDeleteingService();
                refetch();

            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-service" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label onClick={deleteService} className="btn btn-error">Delete</label>
                        <label htmlFor="delete-service" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteService;