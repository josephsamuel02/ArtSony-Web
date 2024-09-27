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
import LoginOption from "./pages/Auth/LoginOption";
import Shop from "./pages/Shop";
import Explore from "./pages/Explore";
import MyProfile from "./pages/MyProfile";
import PostArt from "./pages/PostArt";
import SellArtwork from "./pages/SellArt";
import Orders from "./pages/Orders";
import SearchPage from "./pages/SearchPage.tsx";
import ProfileSettings from "./pages/ProfileSettings/index.tsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={PUBLIC_ROUTES.SIGNUP} element={<Signup />} />
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
        <Route path={PUBLIC_ROUTES.FORGOT_PASSWORD} element={<ForgottenPassword />} />
        <Route path={PUBLIC_ROUTES.CONFIRM_PASSWORD} element={<LoginOption />} />
        <Route path={PUBLIC_ROUTES.SEARCH} element={<SearchPage />} />

        <Route index path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={PUBLIC_ROUTES.ARTIST_PROFILE} element={<ArtistProfile />} />

        <Route path={PUBLIC_ROUTES.POST_ART} element={<PostArt />} />
        <Route path={PUBLIC_ROUTES.SELL_ART} element={<SellArtwork />} />

        <Route path={PUBLIC_ROUTES.EXPLORE} element={<Explore />} />
        <Route path={PUBLIC_ROUTES.SHOP} element={<Shop />} />
        <Route path={PUBLIC_ROUTES.ORDERS} element={<Orders />} />

        <Route path={PUBLIC_ROUTES.MY_PROFILE} element={<MyProfile />} />
        <Route path={PUBLIC_ROUTES.PROFILE_SETTINGS} element={<ProfileSettings />} />

        <Route path={PUBLIC_ROUTES.CHECKOUT} element={<Checkout />} />

        <Route path={"/about_us"} element={<AboutUs />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={"/contact_us"} element={<ContactUs />} />

        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
