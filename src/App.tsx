import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";
import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Login from "./pages/Auth/Login";
import ForgottenPassword from "./pages/Auth/ForgottenPassword";
import Signup from "./pages/Auth/Signup";
import Faq from "./pages/Faq/Faq";
import ArtistProfile from "./pages/Profile";
import Checkout from "./pages/Checkout/Checkout";
import UserPostDetail from "./components/UserPostDetail";
import UserPost from "./components/UserPost";
import { UserArtProps } from "./constants";
import Footer from "./components/Footer";
import LoginOption from "./pages/Auth/LoginOption";
import Shop from "./constants/Shop";

const App = () => {
  return (
    <>
      <Routes>
        <Route index path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={PUBLIC_ROUTES.ARTIST_PROFILE} element={<ArtistProfile />} />
        <Route path={PUBLIC_ROUTES.CHECKOUT} element={<Checkout />} />

        <Route path={PUBLIC_ROUTES.SIGNUP} element={<Signup />} />
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />

        <Route path={PUBLIC_ROUTES.FORGOT_PASSWORD} element={<ForgottenPassword />} />
        <Route path={PUBLIC_ROUTES.CONFIRM_PASSWORD} element={<LoginOption />} />

        <Route path={PUBLIC_ROUTES.SHOP} element={<Shop />} />

        <Route path={"/userdetails/:id"} element={<UserPostDetail />} />
        <Route path={"/userpost"} element={<UserPost items={UserArtProps} />} />

        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={"/contactus"} element={<ContactUs />} />

        <Route path={"*"} element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
