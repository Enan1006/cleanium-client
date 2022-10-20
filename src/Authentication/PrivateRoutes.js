
import Estimation from "../Pages/Dashboard/Estimation";
import Summury from "../Pages/Dashboard/Summury";
import MyAppointments from "../Pages/MyAccount/MyAppointments";
import Payment from "../Pages/MyAccount/Payment";
import Services from "../Pages/Services/Services";

export const PrivateRoutes = [
    { path: '/services', name: "Services", Component: Services },
    { path: '/my-appointments', name: "MyAppointments", Component: MyAppointments },
    { path: '/my-appointments', name: "MyAppointments", Component: MyAppointments },
    { path: '/my-appointments/payment/:id', name: "Payment", Component: Payment },

    // { path: '/summury', name: "Summury", Component: Summury },
    // { path: '/estimation', name: "Estimation", Component: Estimation }
]

