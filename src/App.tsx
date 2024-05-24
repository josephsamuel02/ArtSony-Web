import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Page404 from "./pages/Page404";
import AboutUs from "./pages/AboutUs/AboutUs";
import Faq from "./pages/Faq/Faq";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path={"/aboutus"} element={<AboutUs/>}/>
        <Route path={"/faq"} element={<Faq/>}/>
        <Route path={"/home"} element={<Home/>} />
        <Route path={"/contactus"} element={<ContactUs/>} />
        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
