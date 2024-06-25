import Nav from "../../components/Nav";
<<<<<<< HEAD
import UserPost from "../../components/UserPost";
import { UserArtProps } from "../../constants";
=======
import ArtOfTheWeek from "./ArtOfTheWeek";
import Banner from "./Banner";
>>>>>>> f017559cbebd4613463b19e4f0b546b1ff365488

const Home = () => {

  return (
<<<<<<< HEAD
    <div >
      <Nav />
      <br /><br/><br/>
      <UserPost items={UserArtProps}/>
=======
    <div className="w-full h-auto bg-white ">
      <Nav />
      <Banner />
      <ArtOfTheWeek />
>>>>>>> f017559cbebd4613463b19e4f0b546b1ff365488
    </div>
  );
};
export default Home;
