import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";

import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
<<<<<<< HEAD
import Faq from "./pages/Faq/Faq";
=======
import Profile from "./pages/Profile/Profile";
>>>>>>> c6567156c14fc004c2f49d6b02918738dcba8f6c

function App() {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route index path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"/faq"} element={<Faq />} />

        <Route path={"/contactus"} element={<ContactUs />} />
=======
        <Route index path="/" element={<Landing />} />
        <Route path={"/aboutus"} element={<AboutUs/>}/>
        <Route path={"/faq"} element={<Faq/>}/>
        <Route path={"/home"} element={<Home/>} />
        <Route path={"/profile"} element={<Profile/>} />

        <Route path={"/contactus"} element={<ContactUs/>} />
>>>>>>> c6567156c14fc004c2f49d6b02918738dcba8f6c
        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
