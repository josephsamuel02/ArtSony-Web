/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegImages } from "react-icons/fa";
import Nav from "../../components/NavBar/Nav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Artworks, getArtworksByArtField } from "../../Redux/FetchArtwork";
import { AppDispatch } from "../../Redux/store";
import { useLocation } from "react-router-dom";

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
      img: "/images/explore_page_images/Random.jpeg",
      title: "Random",
    },
    {
      img: "/images/explore_page_images/Abstract.svg",
      title: "Abstract",
    },
    {
      img: "/images/explore_page_images/Painting.jpeg",
      title: "Painting",
    },
    {
      img: "/images/explore_page_images/Ai Art.svg",
      title: "Ai Art",
    },
    {
      img: "/images/explore_page_images/Architecture.jpeg",
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
  // const Artwork = [
  //   {
  //     img: "/images/ideogram.jpeg",
  //     title: "Side View",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/lion.jpg",
  //     title: "Side View",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/Rectangle 6.png",
  //     title: "Side View",
  //     user_image: "/images/pexels-beto-mendes-17654295.jpg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/lion.jpg",
  //     title: "Side View",
  //     user_image: "/images/Songs (1).png",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/africa.png",
  //     title: "Side View",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/africa.png",
  //     title: "Side View",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/Rectangle 6.png",
  //     title: "Side View",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/ideogram.jpeg",
  //     title: "Side View",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/lion.jpg",
  //     title: "Side View",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/Rectangle 6.png",
  //     title: "Side View",
  //     user_image: "/images/pexels-beto-mendes-17654295.jpg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/lion.jpg",
  //     title: "Side View",
  //     user_image: "/images/Songs (1).png",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/africa.png",
  //     title: "Side View",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/africa.png",
  //     title: "Side View",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  //   {
  //     img: "/images/Rectangle 6.png",
  //     title: "Side View",
  //     user_image: "/images/Ellipse 10.svg",
  //     user_name: "Leslie Alexander",
  //   },
  // ];

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
    console.log(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artworkData, artworkField, searchTerm]);

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
                className="mx-8 md:mx-7 w-[160px] h-[237px] rounded-lg  relative cursor-pointer"
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

        <div className="w-full h-auto grid gid-flow-col grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {artwork.length !== 0 &&
            artwork.map((d: any, i: number) => (
              <div
                className="relative w-auto h-auto  mb-3 m-auto flex flex-col rounded hover:bg-[#00000031] items-center border shadow-md cursor-pointer"
                key={i}
              >
                <div className="  absolute  top-2 left-2 cursor-pointer items-center w-9 h-8 p-1 flex rounded  bg-[#05000060]  ">
                  <FaRegImages size={20} className="text-white hover:text-[#fa6746] m-auto" />
                </div>
                {d.thumbnail && (
                  <img
                    src={d.thumbnail}
                    alt="image"
                    className="w-[240px] h-auto object-center object-fill rounded-t-md"
                    key={i}
                  />
                )}
                <h3 className="absolute bottom-10 z-10 text-[20px] px-6 py-6 text-white font-Raleway font-light  ">
                  {capitalizeFirstLetter(d.artwork_name)}
                </h3>
                <div className="w-full h-auto p-2 flex flex-row items-center">
                  <img
                    src={d.user.profile_img}
                    alt=""
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <p className="text-[16px] text-black px-1 font-Poppins font-light">
                    {capitalizeFirstLetter(d.user.user_name)}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
