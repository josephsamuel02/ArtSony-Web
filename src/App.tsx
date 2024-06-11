import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";
import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Faq from "./pages/Faq/Faq";
import Landing from "./pages/Landing";
import Artworks from "./pages/Profile/Artworks/Artworks";
import Store from "./pages/Profile/Store/Store";
import Moodboard from "./pages/Profile/Moodboard/Moodboard";
import Aboutprofile from "./pages/Profile/About/Aboutprofile";

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
        <Route path={"/artworks"} element={<Artworks/>} />
        <Route path={"/store"} element={<Store/>} />
        <Route path={"/moodboard"} element={<Moodboard/>} />
        <Route path={"/about"} element={<Aboutprofile/>} />
        <Route path={"/contactus"} element={<ContactUs/>} />
        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
