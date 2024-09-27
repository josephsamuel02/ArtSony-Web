/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import ColorPicker from "react-pick-color";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../../Redux/store";
import { GetArtOfTheWeek, getArtworksByArtField } from "../../Redux/FetchArtwork";

import UserPostDetail from "../../components/PostDetails/UserPostDetail";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { useNavigate } from "react-router-dom";
const ArtOfTheWeek = () => {
  const art_of_the_week = useSelector(
    (state: any) => state.FetchArtwork.artwork_of_the_week.data
  );

  const dispatch = useDispatch<AppDispatch>();
  const [showArtistFieldList, setShowArtistFieldList] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showPostData, setShowPostData] = useState(false);
  const [artworkDetails, setArtworkDetails] = useState("");
  const [color, setColor] = useState("#3573CB");

  const colorpickeralRef = useRef<any>(null);

  const handleClickOutside = (event: any) => {
    if (colorpickeralRef.current && !colorpickeralRef.current.contains(event.target)) {
      setShowColorPicker(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        await dispatch(GetArtOfTheWeek());
      } catch (error) {
        console.error("Error fetching art of the week:", error);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div className="w-full h-auto  ">
      <div className="mx-auto w-full h-[80px]  px-6 flex flex-row items-center ">
        <div
          className="relative w-[250px] h-[42px] mx-auto flex flex-row rounded items-center bg-[#8AC5C733]"
          onClick={() => setShowArtistFieldList(true)}
        >
          <img src="/images/interests.svg" alt="" className="mx-4" />
          <p className="mx-auto text-[16px] font-Poppins text-[#333333] cursor-default">
            Artistic Field
          </p>
          <img src="/images/arrow_left.svg" alt="" className="mx-4" />
          {showArtistFieldList && (
            <ArtisticField
              showArtistFieldList={showArtistFieldList}
              setShowArtistFieldList={setShowArtistFieldList}
            />
          )}
        </div>
        <div
          className="relative w-[250px] h-[42px] mx-auto flex flex-row rounded items-center bg-[#8AC5C733]"
          onClick={() => setShowColorPicker(!showColorPicker)}
        >
          <img src="/images/colors.svg" alt="" className="mx-4" />
          <p className="mx-auto text-[16px] font-Poppins text-[#333333] cursor-default">
            Color
          </p>
          <img src="/images/arrow_left.svg" alt="" className="mx-4" />
          {showColorPicker && (
            <div
              ref={colorpickeralRef}
              className="absolute top-12 w-[250px]  bg-white shadow-md rounded-md z-30  "
            >
              <ColorPicker
                color={color}
                onChange={(color: any) => setColor(color.hex)}
                theme={{
                  borderRadius: "2px",
                  width: "200px",
                }}
              />
            </div>
          )}
        </div>
        <div
          className="relative w-[250px] h-[42px] mx-auto flex flex-row rounded items-center bg-[#8AC5C733]"
          onClick={() => setShowLocation(true)}
        >
          <img src="/images/location.svg" alt="" className="mx-4" />
          <p className="mx-auto text-[16px] font-Poppins text-[#333333] cursor-default">
            Location
          </p>
          <img src="/images/arrow_left.svg" alt="" className="mx-4" />

          {showLocation && (
            <ArtLocation showLocation={showLocation} setShowLocation={setShowLocation} />
          )}
        </div>
        <p className="mx-auto text-[16px] font-Poppins text-[#F25B38] cursor-default">
          Clear All
        </p>
        <div className="w-[178px] h-[42px] mx-auto flex flex-row rounded border border-[#F25B38] items-center bg-white">
          <p className="mx-auto text-sm font-Poppins text-black cursor-default">Recommended</p>
          <img src="/images/arrow_drop_down black.svg" alt="" className="mx-4" />
        </div>
      </div>
      {/* Art of the week */}
      <div className="w-full h-auto">
        <div className="w-full mx-10 bg-white py-10">
          <h3 className="text-[36px] font-Poppins text-black">Art Of The Week</h3>
        </div>
        <div className="w-screen h-auto flex flex-row  overflow-x-scroll">
          <div className="w-min h-auto mx-auto items-center bg-white py-5 flex flex-row">
            {art_of_the_week &&
              art_of_the_week.slice(0, 3).map((i: any, n: number) => (
                <div
                  className="mx-10 md:mx-16 w-[434px] h-[350px] rounded   relative"
                  key={n}
                  onClick={() => {
                    setArtworkDetails(i);
                    setShowPostData(true);
                  }}
                >
                  {i.images[0] && (
                    <img
                      src={i.images[0]}
                      alt=""
                      className=" mx-auto w-full h-full rounded-md object-cover"
                    />
                  )}
                  <div className="absolute  bottom-6 left-0 right-0 bg-transparent h-1/4 bg-gradient-to-t  from-[#1919194D]">
                    <p className="text-[28px] font-Raleway text-white text-center font-light ">
                      {i.artwork_name}
                    </p>
                    <div className="w-full h-auto flex flex-row items-center">
                      <div className="w-1/3 mx-4 items-center flex flex-row">
                        <img
                          src="/images/favorite.svg"
                          alt=""
                          className="w-[20px] h-[18px] mx-2"
                        />
                        <p className="text-[10] font-Raleway text-white text-center font-light ">
                          {i.likes}k
                        </p>
                        <img
                          src="/images/visibility.svg"
                          alt=""
                          className="w-[20px] h-[18px] mx-2 "
                        />
                        <p className="text-[10] font-Raleway text-white text-center font-light ">
                          {i.views}k
                        </p>
                      </div>
                      <div className="w-2/3 px-4 flex flex-row items-center justify-end  ">
                        <p className="text-[14px] px-2 font-Poppins text-white  ">
                          {i.user.user_name}
                        </p>
                        {i.user.profile_img && (
                          <img
                            src={i.user.profile_img}
                            alt=""
                            className="w-[48px] h-[48px] mx-1 "
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {showPostData && (
        <UserPostDetail Artwork={artworkDetails} setShowPostData={setShowPostData} />
      )}
    </div>
  );
};

const ArtisticField = ({ showArtistFieldList, setShowArtistFieldList }: any) => {
  const artFieldRef = useRef<any>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const Fields = [
    "Random",
    "Ai Art",
    "Architecture",
    "Space",
    "Painting",
    "Plant Life",
    "Abstract",
    "Medieval",
    "Futuristic",
    "Animation",
    "Spiritual",
  ];

  const getArtByField = async (field: string) => {
    dispatch(getArtworksByArtField({ art_field: field }));
    navigate(`${PUBLIC_ROUTES.EXPLORE}?art_field=${field}`);
  };
  const handleClickOutside = (event: any) => {
    if (artFieldRef.current && !artFieldRef.current.contains(event.target)) {
      setShowArtistFieldList(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      {showArtistFieldList && (
        <div
          className="absolute top-12 w-[270px] h-[329px] bg-white shadow-md rounded-md z-30 overflow-y-scroll"
          ref={artFieldRef}
        >
          <div className="mx-auto  w-11/12 p-2 px-4  rounded  h-auto flex flex-row  items-center bg-[#FEF7F5]  ">
            <img
              src="/images/search.svg"
              alt=""
              className="    w-[16px] h-[15px] cursor-pointer"
            />
            <input
              type="text"
              placeholder="Search Artistic Field"
              className="placeholder-[#F25B38B2] text-[#292929b2] font-Poppins text-[12px] px-2 w-4/5 h-auto outline-none bg-transparent"
            />
          </div>

          <div className="w-full h-auto py-4 px-6 bg-white flex flex-col    border-t border-[#fadad3]">
            <p className=" text-[16px] py-2 text-[#F25B38] font-Poppins  ">
              All Artistic Fields
            </p>
            <p className=" text-[16px]  py-2  text-[#000000] font-Poppins  ">#</p>
            {Fields.map((d: string, i: number) => (
              <p
                className=" text-[16px] py-2  text-[#000000] hover:text-customOrange font-Poppins cursor-default"
                key={i}
                onClick={() => getArtByField(d)}
              >
                {d}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const ArtLocation = ({ showLocation, setShowLocation }: any) => {
  const modalRef = useRef<any>(null);

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowLocation(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      {showLocation && (
        <div
          className="absolute top-12 w-[270px] h-[329px] bg-white shadow-md rounded-md z-30 overflow-y-scroll"
          ref={modalRef}
        >
          <div className="mx-auto  w-11/12 p-2 px-4  rounded  h-auto flex flex-row  items-center bg-[#FEF7F5]  ">
            <img
              src="/images/search.svg"
              alt=""
              className="    w-[16px] h-[15px] cursor-pointer"
            />
            <input
              type="text"
              placeholder="Search Artistic Field"
              className="placeholder-[#F25B38B2] text-[#292929b2] font-Poppins text-[12px] px-2 w-4/5 h-auto outline-none bg-transparent"
            />
          </div>

          <div className="w-full h-auto py-4 px-6 bg-white flex flex-col    border-t border-[#fadad3]">
            <p className=" text-[16px] py-2  text-[#000000] font-Poppins cursor-default  ">
              Afghanistan
            </p>
            <p className=" text-[16px] py-2  text-[#000000] font-Poppins cursor-default  ">
              Aland Island
            </p>
            <p className=" text-[16px] py-2  text-[#000000] font-Poppins cursor-default  ">
              Albania
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ArtOfTheWeek;
