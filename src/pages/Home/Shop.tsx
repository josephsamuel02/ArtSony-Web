/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import UserPostDetail from "../../components/PostDetails/UserPostDetail";
import { TopShopsArtworks } from "../../Redux/FetchArtwork";
import { LikeArt, ViewArt } from "../../Redux/Engagement";
import FormatNumber from "../../components/NumberFormater";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Shop = () => {
  const dispatch = useDispatch<AppDispatch>();
  const top_shops_artworks = useSelector(
    (state: any) => state.FetchArtwork.top_shops_artworks.data
  );
  const userId = useSelector((state: any) => state.Auth.User?.User?.userId);
  const [showPostData, setShowPostData] = useState(false);
  const [artworkDetails, setArtworkDetails] = useState("");

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        await dispatch(TopShopsArtworks());
      } catch (error) {
        console.error("Error fetching art of the week:", error);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div className="w-full h-auto  ">
      {/* Artsony Shop */}
      <div className="w-full h-auto mx-auto items-center mt-10 bg-white  flex flex-col ">
        <div className="w-full px-6   flex flex-row  py-5  items-center">
          <h3 className="mx-3 text-[36px] font-Poppins text-black">Artsony Shop</h3>
          <img
            src="/images/add_business.svg"
            alt=""
            className="w-10 h-10 rounded object-cover mx-3"
          />
        </div>
        {/* slider with art content */}
        <div className="w-screen h-auto bg-[#02272F0D]  py-4 overflow-x-scroll">
          <div className=" w-min h-auto mx-auto items-center py-5 flex flex-row ">
            {top_shops_artworks &&
              top_shops_artworks.slice(0, 4).map((i: any, n: number) => {
                const isLiked = i.likes?.some((like: any) => like.userId === userId);
                return (
                  <div
                    className="mx-6 w-[304px] h-[207px] my-6 bg-white rounded-lg   relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
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
                                dispatch(LikeArt({ userId: userId, user_name: i.user_name }));
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
      </div>
      {showPostData && (
        <UserPostDetail Artwork={artworkDetails} setShowPostData={setShowPostData} />
      )}
    </div>
  );
};

export default Shop;
