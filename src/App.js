import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { PublicRoutes } from "./Routers/PublicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { PrivateRoutes } from "./Authentication/PrivateRoutes";
import RequireUser from "./Authentication/RequireUser";
import RequireAdmin from "./Authentication/RequireAdmin";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddService from "./Pages/Dashboard/AddService";
import AddAdmin from "./Pages/Dashboard/AddAdmin";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar>
        <Routes>
          {
            PublicRoutes.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />}></Route>))
          }
          {
            PrivateRoutes.map(({ path, Component }, index) => (<Route key={index} path={path} element={<RequireUser>
              <Component />
            </RequireUser>}></Route>))
          }
          {/* <Route path='/dashboard' element={<RequireAdmin>
            <Dashboard />
          </RequireAdmin>}>
            <Route index element={<AddService />}></Route>
            <Route path="/dashboard/add-admin" element={<AddService />}></Route>
          </Route> */}
          <Route element={<RequireAdmin />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<AddService />}></Route>
              <Route path="/dashboard/add-admin" element={<AddAdmin />}></Route>
            </Route>
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
