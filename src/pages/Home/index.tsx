/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import Nav from "../../components/Nav";
import ArtOfTheWeek from "./ArtOfTheWeek";
import Banner from "./Banner";
import Explore from "./Explore";
import Following from "./Following";
import JustForYou from "./JustForYou";
import Shop from "./Shop";
import TopArt from "./TopArt";
import Footer from "../../components/Footer";

const Home = () => {
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        // await dispatch(ArtSearch({ search_string: "memorial" }));
        // userId && (await dispatch(GetMyArtworks({ userId: userId })));
        // userId && (await dispatch(GetMyShopArtworks({ userId: userId })));
        // await dispatch(getArtworksByArtField({ art_field: "abstract art" }));
      } catch (error) {
        console.error("Error fetching art of the week:", error);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div className="w-full h-auto bg-white ">
      <Nav />

      <Banner />
      <ArtOfTheWeek />
      <JustForYou />
      <TopArt />
      <Following />
      <Shop />
      <Explore />
      <Footer />
    </div>
  );
};
export default Home;
