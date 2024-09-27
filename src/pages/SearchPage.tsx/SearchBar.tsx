import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { ArtSearch } from "../../Redux/FetchArtwork";

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [searchText, setSearchText] = useState("");
  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Trigger the dispatch when Enter is pressed
      dispatch(ArtSearch({ search_string: searchText }));
    }
  };
  return (
    <div className="w-full h-auto mt-4">
      <div className="  w-full py-4 h-auto flex flex-row px-2 items-center   ">
        <div className="mx-auto w-9/12 h-auto   px-3 pl-5 items-center flex flex-row   ">
          <img src="/images/searchicon1.svg" alt="search" className=" w-5 h-5" />
          <button
            className="px-6 py-2 mx-auto text-lg font-Poppins text-white bg-customOrange hover:bg-[#f5461e] rounded-md shadow"
            onClick={async () => await dispatch(ArtSearch({ search_string: searchText }))}
          >
            Search
          </button>

          <input
            type="text"
            placeholder="Search"
            defaultValue={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-4/5 h-auto px-4  text-black text-lg    font-Poppins p-2 border-2 border-gray-600 rounded-md outline-none focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
