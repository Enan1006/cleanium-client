
import Estimation from "../Pages/Dashboard/Estimation";
import MyAppointments from "../Pages/MyAccount/MyAppointments";
import Services from "../Pages/Services/Services";

export const PrivateRoutes = [
    { path: '/services', name: "Services", Component: Services },
    { path: '/my-appointments', name: "MyAppointments", Component: MyAppointments },
    // { path: '/estimation', name: "Estimation", Component: Estimation }
]

