/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { JustForYou } from "../../Redux/FetchArtwork";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import UserPostDetail from "../../components/PostDetails/UserPostDetail";

const JustforYou = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: any) => state.Auth.user.user.userId);

  const just_for_you = useSelector(
    (state: any) => state.FetchArtwork.artwork_just_for_you.data
  );
  const [artworkDetails, setArtworkDetails] = useState("");

  const [showPostData, setShowPostData] = useState(false);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        userId && (await dispatch(JustForYou({ userId: userId })));
      } catch (error) {
        console.error("Error fetching art of the week:", error);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div className="w-full h-auto  ">
      {/* Just For You */}
      {just_for_you.length > 0 && (
        <div className="w-full mx-auto h-auto bg-white">
          <div className="w-full mx-10 bg-white py-5">
            <h3 className="text-[36px] font-Poppins text-black">Just For You</h3>
          </div>

          <div className="w-screen h-auto bg-[#02272F0D]  py-4 overflow-x-scroll">
            <div className=" w-min h-auto mx-auto items-center   py-5 flex flex-row ">
              {just_for_you.slice(0, 4).map((i: any, n: number) => (
                <div
                  className="mx-6 w-[304px] h-[207px] bg-white rounded  relative"
                  onClick={() => {
                    setArtworkDetails(i);
                    setShowPostData(true);
                  }}
                  key={n}
                >
                  {i.images[0] && (
                    <img
                      src={i.images[0]}
                      alt=""
                      className=" mx-auto w-full h-full rounded object-cover"
                    />
                  )}
                  <div className="absolute  bottom-7 left-0 right-0 bg-transparent h-1/4 bg-gradient-to-t  from-[#1919194D]">
                    <p className="text-[28px] font-Raleway text-white text-center font-light ">
                      {i.artwork_name}
                    </p>
                    <div className="w-full bottom-0 h-[50px] border border-[#f7b38594] rounded-b-sm bg-white flex flex-row items-center">
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
        </div>
      )}
      {showPostData && (
        <UserPostDetail Artwork={artworkDetails} setShowPostData={setShowPostData} />
      )}
    </div>
  );
};

export default JustforYou;
