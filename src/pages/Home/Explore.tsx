/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import UserPostDetail from "../../components/PostDetails/UserPostDetail";
import { Artworks } from "../../Redux/FetchArtwork";
import { LikeArt, ViewArt } from "../../Redux/Engagement";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import FormatNumber from "../../components/NumberFormater";

const Explore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const artworks = useSelector((state: any) => state.FetchArtwork.artwork_of_the_week.data);
  const userId = useSelector((state: any) => state.Auth.User?.User?.userId);

  const [artworkDetails, setArtworkDetails] = useState("");
  const [showPostData, setShowPostData] = useState(false);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        await dispatch(Artworks());
      } catch (error) {
        console.error("Error fetching art of the week:", error);
      }
    };

    fetchArtworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-auto  ">
      <div className="w-full mx-10 bg-white py-4">
        {/* <h3 className="text-[36px] font-Poppins text-black">Explore</h3> */}
      </div>
      <div className="w-full h-auto px-2">
        <div className="w-full h-auto mx-auto items-center bg-white grid gap-2  grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {artworks &&
            artworks.map((i: any, n: number) => {
              const isLiked = i.likes?.some((like: any) => like.userId === userId);
              return (
                <div
                  className="mx-auto w-[294px] h-[207px] my-6 bg-white rounded-lg   relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  onClick={() => {
                    setArtworkDetails(i);
                    setShowPostData(true);
                    dispatch(ViewArt({ artwork_id: i.artwork_id }));
                  }}
                  key={n}
                >
                  <img
                    src={i.images[0]}
                    alt=""
                    className=" mx-auto w-full h-full rounded-t-lg object-cover"
                  />
                  <div className="  absolute mx-2 top-2 lef-2  items-center w-9 h-8 p-1 flex rounded  bg-black opacity-25">
                    <img
                      src={"/images/shopping_cart.png"}
                      alt="cart"
                      className="m-auto justify-center w-5 h-5 object-cover"
                    />
                  </div>

                  <div className="absolute  bottom-7 left-0 right-0 bg-[#1919194D]  bg-gradient-to-t    h-1/4   from-black">
                    <p className="text-[19px] pb-4 pt-2 font-Raleway text-white text-center font-light ">
                      {i.artwork_name}
                    </p>
                    <div className="w-full bottom-0 h-[60px]    border border-[#bdbdbd75] rounded-b-lg   bg-white flex flex-row items-center">
                      <div className="w-2/3 px-4 flex flex-row items-center justify-start  ">
                        {i.user.profile_img && (
                          <img
                            src={i.user.profile_img}
                            alt=""
                            className="w-[35px] h-[35px] mx-0 rounded-full"
                          />
                        )}
                        <p className="text-[11px] px-2 font-Poppins text-black ">
                          {i.user.user_name}
                        </p>
                      </div>
                      <div className="w-1/3 mx-4 items-center justify-end flex flex-row ">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            userId &&
                              dispatch(LikeArt({ userId: userId, artwork_id: i.artwork_id }));
                          }}
                        >
                          {isLiked ? (
                            <AiFillHeart
                              size={30}
                              className="text-red-500 w-[20px] h-[18px] mx-2 cursor-pointer"
                            />
                          ) : (
                            <AiOutlineHeart
                              size={30}
                              className="text-red-500 w-[20px] h-[18px] mx-2 cursor-pointer"
                            />
                          )}
                        </div>
                        {i.likesCount > 0 && (
                          <p className="text-[10px] font-Poppins text-[#F25B38] text-center font-light ">
                            {FormatNumber(i.likesCount)}
                          </p>
                        )}

                        <img
                          src="/images/visibility.svg"
                          alt=""
                          className="w-[20px] h-[18px] mx-2 "
                        />
                        {i.views > 0 && (
                          <p
                            className="text-[10px] font-Poppins
                         text-[#F25B38] text-center font-light "
                          >
                            {FormatNumber(i.views)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {showPostData && (
        <UserPostDetail Artwork={artworkDetails} setShowPostData={setShowPostData} />
      )}
    </div>
  );
};

export default Explore;
