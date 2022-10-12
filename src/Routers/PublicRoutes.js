import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Services from "../Pages/Services";
import Signup from "../Pages/Signup";
export const PublicRoutes = [
    { path: '/', name: "Home", Component: Home },
    { path: '/about', name: "About", Component: About },
    { path: '/services', name: "Services", Component: Services },
    { path: '/contact', name: "Contact", Component: Contact },
    { path: '/login', name: "Login", Component: Login },
    { path: '/signup', name: "Signup", Component: Signup },
    { path: '*', name: "NotFound", Component: NotFound },
]