import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";

import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import ConfirmPassword from "./Auth/ConfirmPassword";
import Login from "./Auth/Login";
import ForgottenPassword from "./Auth/ForgottenPassword";
import Signup from "./Auth/Signup";
import Landing from "./pages/Landing";
import Faq from "./pages/Faq/Faq";
import UserPostDetail from "./components/UserPostDetail";
import UserPost from "./components/UserPost";
import { UserArtProps } from "./constants";

function App() {
  return (
    <>  
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path={"/aboutus"} element={<AboutUs/>}/>
        <Route path={"/faq"} element={<Faq/>}/>
        <Route path={"/home"} element={<Home/>} />
        <Route path={"/contactus"} element={<ContactUs/>} />
        <Route path={"/confirmpassword"} element={<ConfirmPassword/>} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/forgettenpassword"} element={<ForgottenPassword />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"*"} element={<Page404 />} />
        <Route path={'/userdetails/:id'} element={<UserPostDetail/>}/>
        <Route path={"/userpost"} element={<UserPost items={UserArtProps}/>}/>
      </Routes>
    </>
  );
  
}

export default App;
  