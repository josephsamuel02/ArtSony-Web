/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import UserPostDetail from "../../components/PostDetails/UserPostDetail";

const SearchResult = () => {
  const artworkSearchResults = useSelector(
    (state: any) => state.FetchArtwork.artwork_search.data
  );
  const [artworkDetails, setArtworkDetails] = useState("");
  const [showPostData, setShowPostData] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => setSearchResults(artworkSearchResults), [artworkSearchResults]);

  return (
    <div className="w-full mx-auto h-auto bg-white">
      <div className="w-full mx-8 bg-white py-3">
        {searchResults ? (
          <h3 className="text-[20px] font-Poppins text-black">
            Results
            <span className="text-[#f75313]">({searchResults && searchResults.length})</span>
          </h3>
        ) : (
          <h3 className="text-[20px] font-Poppins text-black">
            No Results Found for <i>''</i>
          </h3>
        )}
      </div>

      <div className="w-full h-auto bg-[#02272F0D]    ">
        <div className=" w-full h-auto py-5  mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  items-center     ">
          {/* <Slider {...settings} className=" mx-auto my-0  w-full  "> */}
          {searchResults &&
            searchResults.map((i: any, n: number) => (
              <div
                className="mx-auto w-[304px] h-[207px] my-6 bg-white rounded-md   relative"
                onClick={() => {
                  setArtworkDetails(i);
                  setShowPostData(true);
                }}
                key={n}
              >
                <img
                  src={i.images[0]}
                  alt=""
                  className=" mx-auto w-full h-full rounded object-cover"
                />
                <div className="absolute  bottom-7 left-0 right-0 bg-transparent h-1/4 bg-gradient-to-t  from-[#1919194D]">
                  <p className="text-[28px] font-Raleway text-white text-center font-light ">
                    {i.artwork_name}
                  </p>
                  <div className="w-full bottom-0 h-[50px]   border border-[#f7b38594] rounded-b-sm bg-white flex flex-row items-center">
                    {i.user && (
                      <div className="w-2/3 px-4 flex flex-row items-center justify-start  ">
                        {i.user.profile_img && (
                          <img
                            src={i.user.profile_img}
                            alt=""
                            className="w-[38px] h-[38px] mx-0 "
                          />
                        )}
                        {i.user.user_name && (
                          <p className="text-[11px] px-2 font-Poppins text-black ">
                            {i.user.user_name}
                          </p>
                        )}
                      </div>
                    )}
                    <div className="w-1/3 mx-4 items-center justify-end flex flex-row">
                      <img
                        src="/images/favorite.svg"
                        alt=""
                        className="w-[20px] h-[18px] mx-2"
                      />
                      {i.likes && (
                        <p className="text-[10] font-Raleway text-[#F25B38] text-center font-light ">
                          {i.likes}k
                        </p>
                      )}
                      <img
                        src="/images/visibility.svg"
                        alt=""
                        className="w-[20px] h-[18px] mx-2 "
                      />
                      {i.views && (
                        <p className="text-[10] font-Raleway text-[#F25B38] text-center font-light ">
                          {i.views}k
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* </Slider> */}
        </div>
      </div>
      {showPostData && (
        <UserPostDetail Artwork={artworkDetails} setShowPostData={setShowPostData} />
      )}
    </div>
  );
};

export default SearchResult;
