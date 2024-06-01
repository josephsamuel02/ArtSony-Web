import Nav from "../../components/Nav";
import UserPost from "../../components/UserPost";
import { UserArtProps } from "../../constants";

const Home = () => {

  return (
    <div >
      <Nav />
      <br /><br/><br/>
      <UserPost items={UserArtProps}/>
    </div>
  );
};
export default Home;
