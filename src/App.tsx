import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";

import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Faq from "./pages/Faq/Faq";

function App() {
  return (
    <>
      <Routes>
        <Route index path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"/faq"} element={<Faq />} />

        <Route path={"/contactus"} element={<ContactUs />} />
        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
