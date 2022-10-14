import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../Components/Loader';
import auth from '../firebase.init';

const RequireUser = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    // const user = true;
    if (loading) {
        return <Loader />
    }
    if (error) {
        return toast(`${error.message}`)
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireUser;