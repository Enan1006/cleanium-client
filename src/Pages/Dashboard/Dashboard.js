import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile mt-20">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">Add Service</Link></li>
                    <li><Link to="/dashboard/manage-services">Manage Services</Link></li>
                    <li><Link to="/dashboard/appointments">Appointments</Link></li>
                    <li><Link to="/dashboard/estimation">Estimation Request</Link></li>
                    <li><Link to="/dashboard/summury">Summury</Link></li>
                    <li><Link to="/dashboard/all-users">All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;