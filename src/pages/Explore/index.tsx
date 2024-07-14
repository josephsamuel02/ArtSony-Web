import { FaRegImages } from "react-icons/fa";
import Nav from "../../components/Nav";

const Explore = () => {
  const Categories = [
    {
      img: "/images/Rectangle 6.png",
      title: "Tody",
    },
    {
      img: "/images/lion.jpg",
      title: "Abstract",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Animation",
    },
    {
      img: "/images/lion.jpg",
      title: "Ai Art",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Architecture",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Assemblage",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Other",
    },
  ];
  const Artwork = [
    {
      img: "/images/ideogram.jpeg",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/lion.jpg",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      user_image: "/images/pexels-beto-mendes-17654295.jpg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/lion.jpg",
      title: "Side View",
      user_image: "/images/Songs (1).png",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/africa.png",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/africa.png",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/ideogram.jpeg",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/lion.jpg",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      user_image: "/images/pexels-beto-mendes-17654295.jpg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/lion.jpg",
      title: "Side View",
      user_image: "/images/Songs (1).png",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/africa.png",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/africa.png",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
    },
  ];
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
              >
                <img
                  src={i.img}
                  alt=""
                  className=" mx-auto w-full rounded-lg h-full object-cover"
                />

                <div className="w-full absolute left-0 flex right-0 bottom-0 top-0 h-full  bg-[#00000048] hover:bg-[#00000063]  cursor-pointer   ">
                  <h2 className="m-auto text-[13px] text-center font-light  hover:font-bold text-white font-Raleway">
                    Christine Boluwatife
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h3 className="text-[24px] px-6 py-6 text-black font-Raleway  ">
          Results <span className="text-[#F25B38]">(1100)</span>
        </h3>

        <div className="w-full h-auto grid gid-flow-col grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Artwork.map((d, i) => (
            <div className="relative w-auto h-auto  mb-3 m-auto flex flex-col rounded hover:bg-[#00000031] items-center border shadow-md cursor-pointer">
              <div className="  absolute  top-2 left-2 cursor-pointer items-center w-9 h-8 p-1 flex rounded  bg-[#05000060]  ">
                <FaRegImages size={20} className="text-white hover:text-[#fa6746] m-auto" />
              </div>
              <img
                src={d.img}
                alt="image"
                className="w-[240px] h-auto object-center object-fill rounded-t-md"
                key={i}
              />
              <h3 className="absolute bottom-10 z-10 text-[20px] px-6 py-6 text-white font-Raleway font-light  ">
                Sunset Island
              </h3>
              <div className="w-full h-auto p-2 flex flex-row items-center">
                <img src={d.user_image} alt="" className="w-8 h-8 object-cover rounded-full" />{" "}
                <p className="text-[16px] text-black px-1 font-Poppins font-light">
                  {d.user_name}
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
