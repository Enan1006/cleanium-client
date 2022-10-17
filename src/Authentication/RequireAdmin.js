import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';
import Loader from '../Components/Loader';

const RequireAdmin = () => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (loading || adminLoading) {
        return <Loader />
    }
    if (!admin) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return <Outlet />
};

export default RequireAdmin;