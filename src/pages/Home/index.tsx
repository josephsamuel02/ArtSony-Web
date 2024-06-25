import Nav from "../../components/Nav";
import ArtOfTheWeek from "./ArtOfTheWeek";
import Banner from "./Banner";

const Home = () => {

  return (
    <div className="w-full h-auto bg-white ">
      <Nav />
      <Banner />
      <ArtOfTheWeek />
    </div>
  );
};
export default Home;
