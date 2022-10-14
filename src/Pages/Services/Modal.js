import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loader from '../../Components/Loader';
import auth from '../../firebase.init';

const Modal = ({ serviceData, date, setServiceData, refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, name } = serviceData;
    const handleSubmit = event => {
        event.preventDefault();
        const date = event.target.date.value;
        const data = {
            date: date,
            service: name,
            name: user?.displayName,
            email: user?.email,
            serviceId: _id,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    toast.success('Appointment done!')
                }
                else {
                    toast.error('Appointment unseccessful!')
                }

                refetch();
                setServiceData(null)
            })
    }

    if (loading) {
        return <Loader />
    }
    if (error) {
        toast(`${error.message}`)
    }
    return (
        <div>
            <input type="checkbox" id="service-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="service-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center">{name}</h3>
                    <form onSubmit={handleSubmit} className="grid justify-center">
                        <input type="text" name='date' value={format(date, 'PP')} disabled readOnly className="input input-bordered w-full mt-5" />
                        <input type="text" name='name' value={user.displayName || ''} disabled readOnly className="input input-bordered w-full mt-5" />
                        <input type="text" name='email' value={user.email || ''} disabled readOnly className="input input-bordered w-full mt-5" />
                        <input type="text" name='phone' placeholder='Your Phone number' className="input input-bordered w-full mt-5" />
                        <input type="submit" value="Submit" placeholder="Type here" className="btn btn-primary w-full cursor-pointer mt-5" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;