import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";
import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import ConfirmPassword from "./pages/Auth/ConfirmPassword";
import Login from "./pages/Auth/Login";
import ForgottenPassword from "./pages/Auth/ForgottenPassword";
import Signup from "./pages/Auth/Signup";
import Faq from "./pages/Faq/Faq";
import ArtistProfile from "./pages/Profile";
import Checkout from "./pages/Checkout/Checkout";
import UserPostDetail from "./components/UserPostDetail";
import UserPost from "./components/UserPost";
import { UserArtProps } from "./constants";

const App = () => {
  return (
    <>
      <Routes>
        <Route index path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={PUBLIC_ROUTES.ARTIST_PROFILE} element={<ArtistProfile />} />
        <Route path={PUBLIC_ROUTES.CHECKOUT} element={<Checkout />} />

        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/forgettenpassword"} element={<ForgottenPassword />} />
        <Route path={"/confirmpassword"} element={<ConfirmPassword />} />

        <Route path={"/userdetails/:id"} element={<UserPostDetail />} />
        <Route path={"/userpost"} element={<UserPost items={UserArtProps} />} />

        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={"/contactus"} element={<ContactUs />} />

        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
