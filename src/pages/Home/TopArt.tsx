/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import UserPostDetail from "../../components/PostDetails/UserPostDetail";
import {
  Artworks,
  getArtworkByNewbies,
  JustForYou,
  TopArtwork,
  TrendingArtworks,
} from "../../Redux/FetchArtwork";

const TopArt = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: any) => state.Auth.user.user.userId);

  const newbies_artworks = useSelector(
    (state: any) => state.FetchArtwork.newbies_artworks.data
  );

  const just_for_you = useSelector(
    (state: any) => state.FetchArtwork.artwork_just_for_you.data
  );
  const artworks = useSelector((state: any) => state.FetchArtwork.artworks.data);
  const top_artwork = useSelector((state: any) => state.FetchArtwork.top_artwork.data);
  const trending_artwork = useSelector(
    (state: any) => state.FetchArtwork.trending_artwork.data
  );

  const [showPostData, setShowPostData] = useState(false);
  const [menuedisplay, setMenuedisplay] = useState("Newbies");
  const [Artwork, setArtwork] = useState(newbies_artworks);
  const [artworkDetails, setArtworkDetails] = useState("");

  // const Artwork = [
  //   {
  //     img: "/images/Rectangle 6.png",
  //     title: "Side View",
  //     views: "100",
  //     likes: "25",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/Rectangle 6.png",
  //     title: "Side View",
  //     views: "100",
  //     likes: "25",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/Rectangle 6.png",
  //     title: "Side View",
  //     views: "100",
  //     likes: "25",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/Rectangle 6.png",
  //     title: "Side View",
  //     views: "100",
  //     likes: "25",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/Rectangle 6.png",
  //     title: "Side View",
  //     views: "100",
  //     likes: "25",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/Rectangle 6.png",
  //     title: "Side View",
  //     views: "100",
  //     likes: "25",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/Rectangle 6.png",
  //     title: "Side View",
  //     views: "100",
  //     likes: "25",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  // ];

  const topArtMenu = ["Newbies", "Recent", "Trending", "Top Art", "For You"];

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        await dispatch(getArtworkByNewbies());
        await dispatch(Artworks());
        await dispatch(TopArtwork());
        await dispatch(TrendingArtworks());
        await dispatch(JustForYou({ userId }));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchArtworks();
  }, [dispatch, userId]); // Adding dependencies (dispatch, userId)

  useEffect(() => {
    menuedisplay === "Newbies" ? setArtwork(newbies_artworks) : null;
    menuedisplay === "Recent" ? setArtwork(artworks) : null;
    menuedisplay === "Top Art" ? setArtwork(top_artwork) : null;
    menuedisplay == "Trending" ? setArtwork(trending_artwork) : null;
    menuedisplay === "For You" ? setArtwork(just_for_you) : null;
  }, [menuedisplay]);

  return (
    <div className="w-full h-auto  ">
      {/* Top Art */}
      <div className="w-full h-auto mx-auto items-center mt-10 bg-white  flex flex-col ">
        <div className="w-full flex flex-row  py-5  items-center">
          <h3 className="mx-auto text-[36px] font-Poppins text-black">Top Art</h3>
          <div className="w-4/5 mx-auto flex flex-row items-center bg-white ">
            {topArtMenu.map((d, i) => (
              <h3
                className={`text-[25px]  mx-5 font-Poppins text-black border-b-4 cursor-pointer ${
                  menuedisplay == d ? "border-[#F25B38]" : "border-[#ffff]"
                }`}
                key={i}
                onClick={() => {
                  console.log(d);
                  setMenuedisplay(d);
                }}
              >
                {d}
              </h3>
            ))}
            {/* <h3 className="text-[25px]  mx-5 font-Poppins text-black">Recent</h3>
            <h3 className="text-[25px]  mx-5 font-Poppins text-black">Trending</h3>
            <h3 className="text-[25px]  mx-5 font-Poppins text-black">For You</h3> */}
          </div>
        </div>
        {/* slider with art content */}
        <div className="w-full h-auto mx-auto items-center bg-white grid gap-2  grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {Artwork.map((i: any, n: number) => (
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
                className=" mx-auto w-full rounded h-full object-cover"
              />
              <div className="absolute  bottom-7 left-0 right-0 bg-transparent h-1/4 bg-gradient-to-t  from-[#1919194D]">
                <p className="text-[28px] font-Raleway text-white text-center font-light ">
                  {i.artwork_name}
                </p>
                <div className="w-full bottom-0 h-[50px]  border border-[#f7b38594] rounded-b-sm bg-white flex flex-row items-center">
                  <div className="w-2/3 px-4 flex flex-row items-center justify-start  ">
                    {i.user.profile_img && (
                      <img
                        src={i.user.profile_img}
                        alt=""
                        className="w-[38px] h-[38px] mx-0 "
                      />
                    )}
                    <p className="text-[11px] px-2 font-Poppins text-black ">
                      {i.user.user_name}{" "}
                    </p>
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
        </div>
        {/* 
        <div className="w-full h-16 mx-auto flex flex-row items-center ">
          <p className="mx-4 text-[16px] font-Poppins justify-end   text-[#F25B38] cursor-pointer hover:border-b-4 border-[#F25B38]">
            See More..
          </p>
        </div> */}
      </div>

      {showPostData && (
        <UserPostDetail Artwork={artworkDetails} setShowPostData={setShowPostData} />
      )}
    </div>
  );
};

export default TopArt;
