const SearchResult = () => {
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

  return (
    <div className="w-full mx-auto h-auto bg-white">
      <div className="w-full mx-10 bg-white py-5">
        <h3 className="text-[32px] font-Poppins text-black">
          Results <span className="text-[#f75313]">(1000)</span>
        </h3>
      </div>

      <div className="w-full h-auto bg-[#02272F0D]  py-4  ">
        <div className=" w-full h-auto py-5  mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-center     ">
          {/* <Slider {...settings} className=" mx-auto my-0  w-full  "> */}
          {Artwork.map((i, n) => (
            <div className="mx-6 my-5 w-[304px] h-[207px] bg-white rounded  relative" key={n}>
              <img
                src={i.img}
                alt=""
                className=" mx-auto w-full h-full rounded object-cover"
              />
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
  );
};

export default SearchResult;
