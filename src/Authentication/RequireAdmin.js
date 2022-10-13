import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const RequireAdmin = () => {
    const location = useLocation();
    const [admin] = useAdmin();
    if (!admin) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return <Outlet />
};

export default RequireAdmin;