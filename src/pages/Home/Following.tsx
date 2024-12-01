/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import UserPostDetail from "../../components/PostDetails/UserPostDetail";
import { ArtworkByFollowing } from "../../Redux/FetchArtwork";

const Following = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user_id = useSelector((state: any) => state.Auth.user.(User?.userId);

  const [userId, setUserId] = useState();

  const one_artwork_by_followed_users = useSelector(
    (state: any) => state.FetchArtwork.artwork_by_following.data
  );
  const [artworkDetails, setArtworkDetails] = useState("");
  const [showPostData, setShowPostData] = useState(false);

  useEffect(() => {
    setUserId(user_id);
    const fetchArtworks = async () => {
      try {
        await dispatch(ArtworkByFollowing({ userId: userId }));
      } catch (error) {
        console.error("Error fetching art of the week:", error);
      }
    };

    userId && fetchArtworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-auto  ">
      {/* Following */}
      {one_artwork_by_followed_users.length > 0 && (
        <div className="w-full h-auto px-2">
          <div className="w-full mx-10 bg-white py-10">
            <h3 className="text-[36px] font-Poppins text-black">Following</h3>
          </div>
          <div className="w-full h-auto flex flex-row bg-[rgba(242,91,56,0.05)] overflow-x-scroll">
            <div className="w-min h-auto mx-auto items-center   py-5 flex flex-row">
              {one_artwork_by_followed_users.map((i: any, n: number) => (
                <div
                  className="mx-8 md:mx-8 w-[224px] h-[237px] rounded-md  relative"
                  key={n}
                  onClick={() => {
                    setArtworkDetails(i);
                    setShowPostData(true);
                  }}
                >
                  <img
                    src={i.images[0]}
                    alt=""
                    className=" mx-auto w-full rounded h-full object-cover"
                  />
                  {i.user.profile_img && (
                    <img
                      src={i.user.profile_img}
                      alt=""
                      className=" absolute top-6 left-0 right-0 mx-auto my-4 w-20 h-20 rounded-full z-20 object-cover"
                    />
                  )}
                  <div className="w-full absolute left-0 flex right-0 bottom-0 h-[170px] backdrop-brightness-75 backdrop-blur-sm   rounded-t-full z-10  ">
                    <h2 className="m-auto text-[16px] text-center font-light text-white font-Raleway">
                      {i.user.user_name}
                    </h2>
                  </div>
                </div>
              ))}
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

export default Following;
