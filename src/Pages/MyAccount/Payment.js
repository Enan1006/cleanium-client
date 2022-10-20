import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51L4h47B3HGLkcc5c191jBxiJrfvCWfNi0zAgSJ3C4for3NXa1ExFQCAWdpoiyYtpnc35fdxQCj0YYj9C0hHZbvte002lMWrfHS');
    return (
        <div className='grid justify-center'>
            <div className='mt-20'>
                <h2 className='text-primary text-4xl text-center font-semibold'>Welcome</h2>
                <div className="card w-96 bg-base-100 shadow-xl py-10">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;