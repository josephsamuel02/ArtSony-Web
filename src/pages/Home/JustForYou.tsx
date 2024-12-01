/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { JustForYou } from "../../Redux/FetchArtwork";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import UserPostDetail from "../../components/PostDetails/UserPostDetail";
import { LikeArt, ViewArt } from "../../Redux/Engagement";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import FormatNumber from "../../components/NumberFormater";

const JustforYou = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: any) => state.Auth.User?.User?.userId);
  const [just_for_you, setJust_for_you] = useState([]);
  const just_for_you_data = useSelector(
    (state: any) => state.FetchArtwork.artwork_just_for_you.data
  );
  const [artworkDetails, setArtworkDetails] = useState("");
  const [showPostData, setShowPostData] = useState(false);
  // const [likeState,setLikeState]=useState<any[]>([0])
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        userId && (await dispatch(JustForYou({ userId: userId })));
      } catch (error) {
        console.error("Error fetching just for you artworks:", error);
      }
    };

    fetchArtworks();

    just_for_you_data.length > 1 && setJust_for_you(just_for_you_data);
  }, []);

  return (
    <div className="w-full h-auto">
      {/* Just For You */}
      {just_for_you.length > 0 && (
        <div className="w-full mx-auto h-auto bg-white">
          <div className="w-full mx-10 bg-white py-5">
            <h3 className="text-[36px] font-Poppins text-black">Just For You</h3>
          </div>

          <div className="w-screen h-auto bg-[#02272F0D] py-4 overflow-x-scroll">
            <div className="w-min h-auto mx-auto items-center py-5 flex flex-row">
              {just_for_you.slice(0, 4).map((i: any, n: number) => {
                // Check if the current userId exists in the likes array
                const isLiked = i.likes?.some((like: any) => like.userId === userId);

                return (
                  <div
                    className="mx-6 w-[304px] h-[207px] bg-white rounded-lg relative transform transition-transform duration-300 hover:scale-105"
                    onClick={() => {
                      setArtworkDetails(i);
                      setShowPostData(true);
                      dispatch(ViewArt({ artwork_id: i.artwork_id }));
                    }}
                    key={n}
                  >
                    {i.images[0] && (
                      <img
                        src={i.images[0]}
                        alt=""
                        className="mx-auto w-full h-full rounded-t-lg object-cover"
                      />
                    )}
                    <div className="absolute bottom-7 left-0 right-0 bg-[#1919194D] h-1/4 bg-gradient-to-t from-black">
                      <p className="text-[19px] pb-4 font-Raleway text-white text-center font-light">
                        {i.artwork_name}
                      </p>
                      <div className="w-full bottom-0 h-[60px] border border-[#a1a1a094] rounded-b-lg bg-white flex flex-row items-center">
                        <div className="w-2/3 px-4 flex flex-row items-center justify-start">
                          {i.user.profile_img && (
                            <img
                              src={i.user.profile_img}
                              alt=""
                              className="w-[38px] h-[38px] mx-0 rounded-full"
                            />
                          )}
                          {i.user.user_name && (
                            <p className="text-[11px] px-2 font-Poppins text-black">
                              {i.user.user_name}
                            </p>
                          )}
                        </div>
                        <div className="w-1/3 mx-4 items-center justify-end flex flex-row">
                          <div
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent parent click
                              userId &&
                                dispatch(
                                  LikeArt({ userId: userId, artwork_id: i.artwork_id })
                                );
                            }}
                          >
                            {isLiked ? (
                              <AiFillHeart className="text-red-500 w-[20px] h-[18px] mx-2 cursor-pointer" />
                            ) : (
                              <AiOutlineHeart className="text-[#F25B38] w-[20px] h-[18px] mx-2 cursor-pointer" />
                            )}
                          </div>
                          {i.likes?.length > 0 && (
                            <p className="text-[10px] font-Poppins text-[#F25B38] text-center font-light">
                              {FormatNumber(i.likesCount)}
                            </p>
                          )}
                          <img
                            src="/images/visibility.svg"
                            alt=""
                            className="w-[20px] h-[18px] mx-2"
                          />
                          {i.views && (
                            <p className="text-[10px] font-Poppins text-[#F25B38] text-center font-light">
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
      )}
      {showPostData && (
        <UserPostDetail Artwork={artworkDetails} setShowPostData={setShowPostData} />
      )}
    </div>
  );
};

export default JustforYou;
