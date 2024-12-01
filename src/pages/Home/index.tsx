/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import Nav from "../../components/NavBar/Nav";
import ArtOfTheWeek from "./ArtOfTheWeek";
import Banner from "./Banner";
import Explore from "./Explore";
// import Following from "./Following";
import JustForYou from "./JustForYou";
import Shop from "./Shop";
import TopArt from "./TopArt";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { GetMyShopArtworks } from "../../Redux/ShopArtworks";
import { AppDispatch } from "../../Redux/store";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const userId = useSelector((state: any) => state.Auth.User?.User?.userId);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        // await dispatch(ArtSearch({ search_string: "memorial" }));
        // userId && (await dispatch(GetMyArtworks({ userId: userId })));
        userId && (await dispatch(GetMyShopArtworks({ userId: userId })));
        // await dispatch(getArtworksByArtField({ art_field: "abstract art" }));
      } catch (error) {
        console.error("Error fetching art of the week:", error);
      }
    };

    fetchArtworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-auto bg-white ">
      <Nav />
      <Banner />
      <ArtOfTheWeek />
      {userId && <JustForYou />}
      <TopArt />
      {/* <Following /> */}
      <Shop />
      <Explore />
      <Footer />
    </div>
  );
};
export default Home;
