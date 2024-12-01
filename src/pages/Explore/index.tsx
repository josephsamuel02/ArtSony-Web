/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegImages } from "react-icons/fa";
import Nav from "../../components/NavBar/Nav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Artworks, getArtworksByArtField } from "../../Redux/FetchArtwork";
import { AppDispatch } from "../../Redux/store";
import { useLocation } from "react-router-dom";
import Masonry from "react-masonry-css";

const Explore = () => {
  const artworkData = useSelector((state: any) => state.FetchArtwork.artworks.data);
  const artworkField = useSelector((state: any) => state.FetchArtwork.artwork_field.data);
  const [artwork, setArtwork] = useState(artworkData);
  // const searchParams = new URLSearchParams(window.location.search);
  const location = useLocation();
  const queryString = new URLSearchParams(location.search);

  const searchTerm = queryString.get("art_field");

  const dispatch = useDispatch<AppDispatch>();
  const Categories = [
    {
      img: "https://res.cloudinary.com/promotion-army/image/upload/v1731686185/zovgcp9ekwcxd1nayxsw.jpg",
      title: "Random",
    },
    {
      img: "https://res.cloudinary.com/promotion-army/image/upload/v1731686187/t8k2dqzdhafwixj7dptu.png",
      title: "Abstract",
    },
    {
      img: "https://res.cloudinary.com/promotion-army/image/upload/v1731686168/xpixafdyrbdvaoaskdfx.png",
      title: "Painting",
    },
    {
      img: "https://res.cloudinary.com/promotion-army/image/upload/v1731686189/xbu6graybqj0vvdujwno.png",
      title: "Ai Art",
    },
    {
      img: "https://res.cloudinary.com/promotion-army/image/upload/v1731686178/nhgobox5adnc3lr0ouj3.png",
      title: "Architecture",
    },
    {
      img: "/images/explore_page_images/Futuristic.jpeg",
      title: "Futuristic",
    },

    {
      img: "/images/explore_page_images/Animation.svg",
      title: "Animation",
    },
  ];

  const capitalizeFirstLetter = (sentence: string) => {
    return sentence
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(" ");
  };

  const getArtworkField = async (title: string) => {
    if (title == "Random") {
      await dispatch(Artworks());
      setArtwork(artworkData);
    } else {
      await dispatch(getArtworksByArtField({ art_field: title }));
      setArtwork(artworkField);
    }
  };

  useEffect(() => {
    const getArtwork = async () => {
      if (searchTerm && searchTerm !== "Random") {
        dispatch(getArtworksByArtField({ art_field: searchTerm }));
        setArtwork(artworkField);
      } else {
        dispatch(Artworks());
        setArtwork(artworkData);
      }
    };
    getArtwork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artworkData, artworkField, searchTerm]);

  const breakpointColumns = {
    default: 5, // Number of columns for large screens
    1100: 4, // Number of columns for medium screens
    768: 3, // Number of columns for tablets
    480: 2, // Number of columns for small screens
  };
  return (
    <div className="w-full h-full">
      <Nav />
      <div className="w-full h-auto mt-20">
        <h3 className="text-[36px] py-6 text-[#F25B38] font-Raleway font-bold text-center">
          Explore Our Community
        </h3>
        <div className="w-full h-auto flex flex-row bg-white overflow-x-scroll">
          {/* Categories */}
          <div className="w-min h-auto mx-auto items-center py-5 flex flex-row">
            {Categories.slice(0, 6).map((i, n) => (
              <div
                className=" mx-6 w-[160px] h-[237px] rounded-lg  relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
                key={n}
                onClick={() => {
                  getArtworkField(i.title);
                }}
              >
                <img
                  src={i.img}
                  alt=""
                  className=" mx-auto w-full rounded-lg h-full object-cover"
                />

                <div className="w-full absolute left-0 flex right-0 bottom-0 top-0 h-full  bg-[#0000001f] hover:bg-[#00000000]  cursor-pointer   ">
                  <h2 className="m-auto text-[16px] text-center  font-bold text-white font-Raleway">
                    {capitalizeFirstLetter(i.title)}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h3 className="text-[24px] px-6 py-6 text-black font-Raleway  ">
          Results <span className="text-[#F25B38]">({artwork.length})</span>
        </h3>
        <div className="w-full h-auto px-6 bg-white">
          <Masonry
            breakpointCols={breakpointColumns}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {artwork.map((d: any, i: any) => (
              <div
                key={i}
                className="flex flex-col bg-white rounded-lg border shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-[#05000060] p-1 rounded">
                    <FaRegImages size={20} className="text-white hover:text-[#fa6746]" />
                  </div>
                  <img
                    src={d.thumbnail}
                    alt="image"
                    className="w-full object-cover rounded-t-md"
                  />
                  <h3 className="absolute bottom-0 w-full  text-center text-white bg-[#1919194D]  bg-gradient-to-t from-black rounded   py-2 font-Raleway font-light">
                    {d.artwork_name}
                  </h3>
                </div>
                <div className="w-full flex items-center p-2 bg-white">
                  <img
                    src={d.user.profile_img}
                    alt="user"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <p className="text-[16px] text-black px-2 font-Poppins font-light">
                    {d.user.user_name}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
        {/* <div className="w-full h-auto p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-auto">
            {artwork.length !== 0 &&
              artwork.map((d: any, i: number) => (
                <div
                  className="relative w-full h-min flex flex-col rounded hover:bg-[#00000031] border shadow-md cursor-pointer"
                  key={i}
                >
                  <div className="absolute top-2 left-2 w-9 h-8 flex items-center p-1 rounded bg-[#05000060] cursor-pointer">
                    <FaRegImages
                      size={20}
                      className="text-white hover:text-[#fa6746] m-auto"
                    />
                  </div>

                  {d.thumbnail && (
                    <img
                      src={d.thumbnail}
                      alt="image"
                      className="w-full h-auto object-cover rounded-t-md"
                    />
                  )}

                  <span className="absolute bottom-16 left-10    text-center z-10 text-white bg-[#00000080] px-4 py-2 rounded font-Raleway font-light">
                    {capitalizeFirstLetter(d.artwork_name)}
                  </span>

                  <div className="w-full p-2 flex items-center">
                    <img
                      src={d.user.profile_img}
                      alt="user"
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <p className="text-[16px] text-black px-2 font-Poppins font-light">
                      {capitalizeFirstLetter(d.user.user_name)}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Explore;
