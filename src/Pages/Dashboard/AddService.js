import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddService = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const image = data.image[0];
        const imageKey = 'f588bbb2828ac3566a9d6846abc5e412';
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const service = {
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        image: img
                    }
                    fetch(`https://cleanium-server-1.onrender.com/add-service`, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(service)
                    })
                        .then(res => res.json())
                        .then(collection => {
                            if (collection.insertedId) {
                                toast.success('Service added successfully')
                                reset();
                            }
                            else {
                                toast.error('Service adding unsuccessfull')
                            }
                        })
                }
            })
    };
    return (
        <div>
            <h2 className='text-primary text-4xl text-center font-semibold'>Estimation Request</h2>
            <div className='grid justify-center'>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" name="name" placeholder="Service name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input {...register("description", { required: true })} type="text" name="description" placeholder="Service description" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input {...register("price", { required: true })} type="text" name="price" placeholder="Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input {...register("image", { required: true })} type="file" name="image" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Service</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;