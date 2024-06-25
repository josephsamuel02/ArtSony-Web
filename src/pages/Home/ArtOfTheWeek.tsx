import { useState } from "react";

const ArtOfTheWeek = () => {
  const [topArt, setTopArt] = useState("Newbies");

  const settings = {
    className: " mx-auto center",
    adaptiveHeight: true,
    variableWidth: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    pauseOnHover: true,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "100px",
  };

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
        <div className="w-[250px] h-[42px] mx-auto flex flex-row rounded items-center bg-[#8AC5C7]">
          <img src="/images/interests.svg" alt="" className="mx-4" />
          <p className="mx-auto text-[16px] font-Poppins text-[#333333] cursor-default">
            Artistic Field
          </p>
          <img src="/images/arrow_left.svg" alt="" className="mx-4" />
        </div>
        <div className="w-[250px] h-[42px] mx-auto flex flex-row rounded items-center bg-[#8AC5C7]">
          <img src="/images/colors.svg" alt="" className="mx-4" />
          <p className="mx-auto text-[16px] font-Poppins text-[#333333] cursor-default">
            Color
          </p>
          <img src="/images/arrow_left.svg" alt="" className="mx-4" />
        </div>
        <div className="w-[250px] h-[42px] mx-auto flex flex-row rounded items-center bg-[#8AC5C7]">
          <img src="/images/location.svg" alt="" className="mx-4" />
          <p className="mx-auto text-[16px] font-Poppins text-[#333333] cursor-default">
            Location
          </p>
          <img src="/images/arrow_left.svg" alt="" className="mx-4" />
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
              <div className="mx-10 md:mx-16 w-[324px] h-[237px]   relative" key={n}>
                <img src={i.img} alt="" className=" mx-auto w-full h-full object-cover" />
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
                <img src={i.img} alt="" className=" mx-auto w-full h-full object-cover" />
                <div className="absolute  bottom-7 left-0 right-0 bg-transparent h-1/4 bg-gradient-to-t  from-[#1919194D]">
                  <p className="text-[28px] font-Raleway text-white text-center font-light ">
                    Next Gen
                  </p>
                  <div className="w-full bottom-0 h-[50px] border border-[#f7b38594] rounded-b-sm bg-white flex flex-row items-center">
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
              className="mx-auto w-[304px] h-[207px] my-6 bg-white rounded  relative"
              key={n}
            >
              <img src={i.img} alt="" className=" mx-auto w-full h-full object-cover" />
              <div className="absolute  bottom-7 left-0 right-0 bg-transparent h-1/4 bg-gradient-to-t  from-[#1919194D]">
                <p className="text-[28px] font-Raleway text-white text-center font-light ">
                  Next Gen
                </p>
                <div className="w-full bottom-0 h-[50px] border border-[#f7b38594] rounded-b-sm bg-white flex flex-row items-center">
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
          <img src="/images/add_business.svg" alt="" className="w-10 h-10 object-cover mx-3" />
        </div>
        {/* slider with art content */}
        <div className="w-screen h-auto bg-[#02272F0D]  py-4 overflow-x-scroll">
          <div className=" w-min h-auto mx-auto items-center py-5 flex flex-row ">
            {/* <Slider {...settings} className=" mx-auto my-0  w-full  "> */}
            {Artwork.slice(0, 4).map((i, n) => (
              <div className="mx-6 w-[304px] h-[207px] bg-white rounded  relative" key={n}>
                <img src={i.img} alt="" className=" mx-auto w-full h-full object-cover" />
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
                  <div className="w-full bottom-0 h-[50px] border border-[#f7b38594] rounded-b-sm bg-white flex flex-row items-center">
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
              <div className="mx-8 md:mx-8 w-[224px] h-[237px]   relative" key={n}>
                <img src={i.img} alt="" className=" mx-auto w-full h-full object-cover" />
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
        <div className="w-full h-auto mx-auto items-center bg-white py-5 flex flex-row flex-wrap">
          {Artwork.map((i, n) => (
            <div
              className="mx-auto w-[304px] h-[207px] my-6 bg-white rounded  relative"
              key={n}
            >
              <img src={i.img} alt="" className=" mx-auto w-full h-full object-cover" />
              <div className="absolute  bottom-7 left-0 right-0 bg-transparent h-1/4 bg-gradient-to-t  from-[#1919194D]">
                <p className="text-[28px] font-Raleway text-white text-center font-light ">
                  Next Gen
                </p>
                <div className="w-full bottom-0 h-[50px] border border-[#f7b38594] rounded-b-sm bg-white flex flex-row items-center">
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
    </div>
  );
};

export default ArtOfTheWeek;
