import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";

import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
<<<<<<< HEAD
import Faq from "./pages/Faq/Faq";
import UserPostDetail from "./components/UserPostDetail";
import UserPost from "./components/UserPost";
import { UserArtProps } from "./constants";
=======
import ConfirmPassword from "./Auth/ConfirmPassword";
import Login from "./Auth/Login";
import ForgottenPassword from "./Auth/ForgottenPassword";
import Signup from "./Auth/Signup";
>>>>>>> 06bae6a73abd0d6b2c21d93c87a3d1e96ed31c08

function App() {
  return (
    <>  
      <Routes>
<<<<<<< HEAD
        <Route index path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={'/userdetails/:id'} element={<UserPostDetail/>}/>
        <Route path={"/contactus"} element={<ContactUs />} />
        <Route path={"/userpost"} element={<UserPost items={UserArtProps}/>}/>
=======
        <Route index path="/" element={<Landing />} />
        <Route path={"/aboutus"} element={<AboutUs/>}/>
        <Route path={"/faq"} element={<Faq/>}/>
        <Route path={"/home"} element={<Home/>} />
        <Route path={"/contactus"} element={<ContactUs/>} />
        <Route path={"/confirmpassword"} element={<ConfirmPassword/>} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/forgettenpassword"} element={<ForgottenPassword />} />
        <Route path={"/signup"} element={<Signup />} />
>>>>>>> 06bae6a73abd0d6b2c21d93c87a3d1e96ed31c08
        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
  
}

export default App;
  