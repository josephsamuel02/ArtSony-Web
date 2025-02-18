import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import PUBLIC_ROUTES from "./utils/PublicRoutes";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import ForgottenPassword from "./pages/Auth/ForgottenPassword";
import Login from "./pages/Auth/Login";
import LoginOption from "./pages/Auth/LoginOption";
import Signup from "./pages/Auth/Signup";
import Checkout from "./pages/Checkout/Checkout";
import ContactUs from "./pages/ContactUs/ContactUs";
import Explore from "./pages/Explore";
import Faq from "./pages/Faq/Faq";
import GeneralSettings from "./pages/GeneralSettings";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Orders from "./pages/Orders";
import Page404 from "./pages/Page404";
import PostArt from "./pages/PostArt";
import ArtistProfile from "./pages/Profile";
import ProfileSettings from "./pages/ProfileSettings";
import SearchPage from "./pages/SearchPage.tsx";
import SellArtwork from "./pages/SellArt";
import Shop from "./pages/Shop";
import { clearUserData } from "./Redux/User.ts";
import { clearAuthData } from "./Redux/AuthSlice.ts";
import WalletStatistics from "./pages/WalletStatistics/index.tsx";

const checkTokenExpiry = () => {
  const token = localStorage.getItem("ASY_A_Token");
  if (token) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const decoded: any = jwtDecode(token);

      const expiryTime = decoded.exp * 1000;
      const currentTime = Date.now();

      if (currentTime > expiryTime) {
        // Token is expired
        return true;
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  return false; // Token is valid or not present
};

const App = () => {
  const dispatch = useDispatch();

  // Check if the token has expired and clear the state if necessary
  if (checkTokenExpiry()) {
    dispatch(clearUserData());
    dispatch(clearAuthData());
    localStorage.removeItem("ASY_A_Token");
  }

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
        <Route path={PUBLIC_ROUTES.GENERAL_SETTINGS} element={<GeneralSettings />} />
        <Route path={PUBLIC_ROUTES.WALLET_STATISTICS} element={<WalletStatistics />} />
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
