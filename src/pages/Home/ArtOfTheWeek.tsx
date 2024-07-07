/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import SearchResult from "./SearchResult";
import ColorPicker from "react-pick-color";

const ArtOfTheWeek = () => {
  const [topArt, setTopArt] = useState("Newbies");
  const [showArtistFieldList, setShowArtistFieldList] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

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
  // const settings = {
  //   className: " mx-auto center",
  //   adaptiveHeight: true,
  //   variableWidth: true,
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   slidesToShow: 4,
  //   pauseOnHover: true,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   focusOnSelect: true,
  //   centerPadding: "100px",
  // };

  const Artwork = [
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      views: "100",
      likes: "100000",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      views: "100",
      likes: "100000",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      views: "100",
      likes: "100000",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      views: "100",
      likes: "100000",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      views: "100",
      likes: "100000",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      views: "100",
      likes: "100000",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      views: "100",
      likes: "100000",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
  ];

  const topArtMenu = ["Newbies", "Recent", "Trending", "For You"];

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
            {Artwork.slice(0, 3).map((i, n) => (
              <div className="mx-10 md:mx-16 w-[324px] h-[237px] rounded   relative" key={n}>
                <img
                  src={i.img}
                  alt=""
                  className=" mx-auto w-full h-full rounded-md object-cover"
                />
                <div className="absolute  bottom-11 left-0 right-0 bg-transparent h-1/4 bg-gradient-to-t  from-[#1919194D]">
                  <p className="text-[28px] font-Raleway text-white text-center font-light ">
                    Next Gen
                  </p>
                  <div className="w-full   h-auto flex flex-row items-center">
                    <div className="w-1/3 mx-4 items-center flex flex-row">
                      <img
                        src="/images/favorite.svg"
                        alt=""
                        className="w-[20px] h-[18px] mx-2"
                      />
                      <img
                        src="/images/visibility.svg"
                        alt=""
                        className="w-[20px] h-[18px] mx-2 "
                      />
                    </div>
                    <div className="w-2/3 px-4 flex flex-row items-center justify-end  ">
                      <p className="text-[14px] px-2 font-Poppins text-white  ">Hassan John</p>
                      <img
                        src="/images/Ellipse 10.svg"
                        alt=""
                        className="w-[48px] h-[48px] mx-1 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Just For You */}
      <div className="w-full mx-auto h-auto bg-white">
        <div className="w-full mx-10 bg-white py-5">
          <h3 className="text-[36px] font-Poppins text-black">Just For You</h3>
        </div>

        <div className="w-screen h-auto bg-[#02272F0D]  py-4 overflow-x-scroll">
          <div className=" w-min h-auto mx-auto items-center   py-5 flex flex-row ">
            {/* <Slider {...settings} className=" mx-auto my-0  w-full  "> */}
            {Artwork.slice(0, 4).map((i, n) => (
              <div className="mx-6 w-[304px] h-[207px] bg-white rounded  relative" key={n}>
                <img
                  src={i.img}
                  alt=""
                  className=" mx-auto w-full h-full rounded object-cover"
                />
                <div className="absolute  bottom-7 left-0 right-0 bg-transparent h-1/4 bg-gradient-to-t  from-[#1919194D]">
                  <p className="text-[28px] font-Raleway text-white text-center font-light ">
                    Next Gen
                  </p>
                  <div className="w-full bottom-0 h-[50px] rounded-b-sm  border border-[#f7b38594] rounded-b-sm bg-white flex flex-row items-center">
                    <div className="w-2/3 px-4 flex flex-row items-center justify-start  ">
                      <img
                        src="/images/Ellipse 10.svg"
                        alt=""
                        className="w-[38px] h-[38px] mx-0 "
                      />
                      <p className="text-[11px] px-2 font-Poppins text-black ">Hassan John </p>
                    </div>
                    <div className="w-1/3 mx-4 items-center justify-end flex flex-row">
                      <img
                        src="/images/favorite.svg"
                        alt=""
                        className="w-[20px] h-[18px] mx-2"
                      />
                      <img
                        src="/images/visibility.svg"
                        alt=""
                        className="w-[20px] h-[18px] mx-2 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* </Slider> */}
          </div>
        </div>
      </div>
      {/* Top Art */}
      <div className="w-full h-auto mx-auto items-center mt-10 bg-white  flex flex-col ">
        <div className="w-full flex flex-row  py-5  items-center">
          <h3 className="mx-auto text-[36px] font-Poppins text-black">Top Art</h3>
          <div className="w-4/5 mx-auto flex flex-row items-center bg-white ">
            {topArtMenu.map((d, i) => (
              <h3
                className={`text-[25px]  mx-5 font-Poppins text-black border-b-4 cursor-pointer ${
                  topArt == d ? "border-[#F25B38]" : "border-[#ffff]"
                }`}
                key={i}
                onClick={() => setTopArt(d)}
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
          {Artwork.map((i, n) => (
            <div
              className="mx-auto w-[304px] h-[207px] my-6 bg-white rounded-md   relative"
              key={n}
            >
              <img
                src={i.img}
                alt=""
                className=" mx-auto w-full rounded h-full object-cover"
              />
              <div className="absolute  bottom-7 left-0 right-0 bg-transparent h-1/4 bg-gradient-to-t  from-[#1919194D]">
                <p className="text-[28px] font-Raleway text-white text-center font-light ">
                  Next Gen
                </p>
                <div className="w-full bottom-0 h-[50px] rounded-b-sm border border-[#f7b38594] rounded-b-sm bg-white flex flex-row items-center">
                  <div className="w-2/3 px-4 flex flex-row items-center justify-start  ">
                    <img
                      src="/images/Ellipse 10.svg"
                      alt=""
                      className="w-[38px] h-[38px] mx-0 "
                    />
                    <p className="text-[11px] px-2 font-Poppins text-black ">Hassan John </p>
                  </div>
                  <div className="w-1/3 mx-4 items-center justify-end flex flex-row">
                    <img
                      src="/images/favorite.svg"
                      alt=""
                      className="w-[20px] h-[18px] mx-2"
                    />
                    <img
                      src="/images/visibility.svg"
                      alt=""
                      className="w-[20px] h-[18px] mx-2 "
                    />
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
            {/* <Slider {...settings} className=" mx-auto my-0  w-full  "> */}
            {Artwork.slice(0, 4).map((i, n) => (
              <div className="mx-6 w-[304px] h-[207px] bg-white rounded  relative" key={n}>
                <img
                  src={i.img}
                  alt=""
                  className=" mx-auto w-full h-full rounded object-cover"
                />
                <div className="  absolute mx-2 top-2 lef-2  items-center w-9 h-8 p-1 flex rounded  bg-black opacity-25">
                  <img
                    src={"/images/shopping_cart.png"}
                    alt="cart"
                    className="m-auto justify-center w-5 h-5 object-cover"
                  />
                </div>

                <div className="absolute  bottom-7 left-0 right-0 bg-transparent h-1/4 bg-gradient-to-t  from-[#1919194D]">
                  <p className="text-[28px] font-Raleway text-white text-center font-light ">
                    Next Gen
                  </p>
                  <div className="w-full bottom-0 h-[50px] rounded-b-sm border border-[#f7b38594] rounded-b-sm bg-white flex flex-row items-center">
                    <div className="w-2/3 px-4 flex flex-row items-center justify-start  ">
                      <img
                        src="/images/Ellipse 10.svg"
                        alt=""
                        className="w-[38px] h-[38px] mx-0 "
                      />
                      <p className="text-[11px] px-2 font-Poppins text-black ">Hassan John </p>
                    </div>
                    <div className="w-1/3 mx-4 items-center justify-end flex flex-row">
                      <h2 className="text-[12px] font-Poppins text-[#F25B38]">$ 7,000</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* </Slider> */}
          </div>
        </div>
      </div>

      {/* Following */}
      <div className="w-full h-auto px-2">
        <div className="w-full mx-10 bg-white py-10">
          <h3 className="text-[36px] font-Poppins text-black">Following</h3>
        </div>
        <div className="w-full h-auto flex flex-row bg-[rgba(242,91,56,0.05)] overflow-x-scroll">
          <div className="w-min h-auto mx-auto items-center   py-5 flex flex-row">
            {Artwork.map((i, n) => (
              <div className="mx-8 md:mx-8 w-[224px] h-[237px] rounded-md  relative" key={n}>
                <img
                  src={i.img}
                  alt=""
                  className=" mx-auto w-full rounded h-full object-cover"
                />
                <img
                  src={i.img}
                  alt=""
                  className=" absolute top-6 left-0 right-0 mx-auto my-4 w-20 h-20 rounded-full z-20 object-cover"
                />
                <div className="w-full absolute left-0 flex right-0 bottom-0 h-[170px] backdrop-brightness-75 backdrop-blur-sm   rounded-t-full z-10  ">
                  <h2 className="m-auto text-[16px] text-center font-light text-white font-Raleway">
                    Christine Boluwatife
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-auto mx-auto items-center bg-white py-5 grid grid-cols-4">
          {Artwork.map((i, n) => (
            <div
              className="mx-auto w-[304px] h-[207px] my-6 bg-white rounded-md   relative"
              key={n}
            >
              <img
                src={i.img}
                alt=""
                className=" mx-auto w-full h-full rounded object-cover"
              />
              <div className="absolute  bottom-7 left-0 right-0 bg-transparent h-1/4 bg-gradient-to-t  from-[#1919194D]">
                <p className="text-[28px] font-Raleway text-white text-center font-light ">
                  Next Gen
                </p>
                <div className="w-full bottom-0 h-[50px] rounded- border border-[#f7b38594] rounded-b-sm bg-white flex flex-row items-center">
                  <div className="w-2/3 px-4 flex flex-row items-center justify-start  ">
                    <img
                      src="/images/Ellipse 10.svg"
                      alt=""
                      className="w-[38px] h-[38px] mx-0 "
                    />
                    <p className="text-[11px] px-2 font-Poppins text-black ">Hassan John </p>
                  </div>
                  <div className="w-1/3 mx-4 items-center justify-end flex flex-row">
                    <img
                      src="/images/favorite.svg"
                      alt=""
                      className="w-[20px] h-[18px] mx-2"
                    />
                    <img
                      src="/images/visibility.svg"
                      alt=""
                      className="w-[20px] h-[18px] mx-2 "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SearchResult />
    </div>
  );
};

const ArtisticField = ({ showArtistFieldList, setShowArtistFieldList }: any) => {
  const artFieldRef = useRef<any>(null);

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
            <p className=" text-[16px] py-2  text-[#000000] font-Poppins cursor-default  ">
              3d Design
            </p>
            <p className=" text-[16px] py-2  text-[#000000] font-Poppins cursor-default  ">
              3d Modeling
            </p>
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
