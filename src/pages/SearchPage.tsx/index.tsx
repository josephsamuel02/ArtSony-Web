import Nav from "../../components/NavBar/Nav";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="w-full h-auto bg-white mt-20 ">
      <Nav />
      <SearchBar />
      <SearchResult />
    </div>
  );
};

export default SearchPage;
