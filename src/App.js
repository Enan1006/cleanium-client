import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { PublicRoutes } from "./Routers/PublicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



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
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
