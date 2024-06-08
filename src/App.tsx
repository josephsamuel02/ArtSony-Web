import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";

import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Faq from "./pages/Faq/Faq";
import Profile from "./pages/Profile/Profilepage/Profile";
import Landing from "./pages/Landing";
import Bioprofile from "./pages/Profile/Bioprofile/Bioprofile";
import Profilecard from "./pages/Profile/Profile3/Profilecard";
import Profilegrpcard from "./pages/Profile/ProfileGcd/Profilegrpcards";

function App() {
  return (
    <>
      <Routes>
        <Route index path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"/faq"} element={<Faq />} />

        <Route path={"/contactus"} element={<ContactUs />} />
        <Route index path="/" element={<Landing />} />
        <Route path={"/aboutus"} element={<AboutUs/>}/>
        <Route path={"/faq"} element={<Faq/>}/>
        <Route path={"/home"} element={<Home/>} />
        <Route path={"/profile"} element={<Profile/>} />
        <Route path={"/profilecard"} element={<Profilecard/>} />
        <Route path={"/profilegrpcard"} element={<Profilegrpcard/>} />
        <Route path={"/bioprofile"} element={<Bioprofile/>} />
        <Route path={"/contactus"} element={<ContactUs/>} />
        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
