import { MdClose } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";

interface compState {
  setShowFollowing: (item: boolean) => void;
}
const Following = ({ setShowFollowing }: compState) => {
  const Artwork = [
    {
      img: "/images/ideogram.jpeg",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
      profession: "photographer",
      country: "USA",
    },
    {
      img: "/images/lion.jpg",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
      profession: "photographer",
      country: "USA",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      user_image: "/images/pexels-beto-mendes-17654295.jpg",
      user_name: "Leslie Alexander",
      profession: "photographer",
      country: "USA",
    },
    {
      img: "/images/lion.jpg",
      title: "Side View",
      user_image: "/images/Songs (1).png",
      user_name: "Leslie Alexander",
      profession: "photographer",
      country: "USA",
    },
    {
      img: "/images/africa.png",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
      profession: "photographer",
      country: "USA",
    },
    {
      img: "/images/africa.png",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
      profession: "photographer",
      country: "USA",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
      profession: "photographer",
      country: "USA",
    },
    {
      img: "/images/ideogram.jpeg",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
      profession: "photographer",
      country: "USA",
    },
    {
      img: "/images/lion.jpg",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
      profession: "photographer",
      country: "USA",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      user_image: "/images/pexels-beto-mendes-17654295.jpg",
      user_name: "Leslie Alexander",
      profession: "photographer",
      country: "USA",
    },
    {
      img: "/images/lion.jpg",
      title: "Side View",
      user_image: "/images/Songs (1).png",
      user_name: "Leslie Alexander",
      profession: "photographer",
      country: "USA",
    },
    {
      img: "/images/africa.png",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
      profession: "photographer",
      country: "USA",
    },
    {
      img: "/images/africa.png",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
      profession: "photographer",
      country: "USA",
    },
    {
      img: "/images/Rectangle 6.png",
      title: "Side View",
      user_image: "/images/Ellipse 10.svg",
      user_name: "Leslie Alexander",
      profession: "photographer",
      country: "USA",
    },
  ];
  return (
    <div className="mx-auto fixed top-20 left-0 right-0  w-11/12 h-[570px] rounded-md bg-white z-30">
      <div className="w-full h-auto px-10 pt-5 pb-2 flex flex-row items-center border-b-2 border-[#fcc1b469]">
        <h3 className="text-[24px] text-[#000000b2] font-Poppins">
          Following <span className="text-[#F25B38B2]">(1275)</span>
        </h3>
        <div className="mx-auto  w-3/5 p-4  rounded  h-auto flex flex-row  items-center bg-[#FEF7F5]  ">
          <img
            src="/images/search.svg"
            alt=""
            className="  mx-3 w-[18px] h-[17px] cursor-pointer"
          />
          <input
            type="text"
            placeholder="Search "
            className="placeholder-[#F25B38B2] text-[#292929b2] font-Poppins text-[16px] px-2 w-4/5 h-auto outline-none bg-transparent"
          />
        </div>
        <h3
          className="text-[20px] text-[#F25B38B2] font-Poppins"
          onClick={() => setShowFollowing(false)}
        >
          <MdClose size={34} />
        </h3>
      </div>
      <div className="mx-auto w-full h-[495px] overflow-y-scroll">
        <div className="w-full h-auto mt-4 grid grid-cols-4">
          {Artwork.map((d, i) => (
            <div
              className=" relative mx-auto my-4 w-[250px] h-auto bg-white rounded-md shadow hover:shadow-md cursor-pointer"
              key={i}
            >
              <img
                src={d.img}
                alt="banner"
                className="w-full h-[95px] object-cover rounded-t-md"
              />
              <div className="flex mx-auto absolute  top-12 left-0 right-0   w-20 h-20    z-10 bg-white p-1  rounded-full">
                <img
                  src={d.user_image}
                  alt="banner"
                  className=" mx-auto  w-[45x] h-[45x] object-cover rounded-full"
                />
              </div>
              <h3 className="absolute top-[4px] left-[4px] bg-[#08080857] p-2 rounded-md">
                <FiUserPlus size={20} className="text-white hover:text-customOrange" />
              </h3>
              <div className="w-full h-auto pb-1 pt-8 flex flex-col">
                <h3 className="text-center text-[18px] font-Raleway text-[#F25B38B2]">
                  {d.user_name}
                </h3>
                <p className="text-center text-[10px] py-1 font-Raleway text-[#646464b2]">
                  {d.profession}{" "}
                </p>
                <p className="text-center text-[10px] py-2  font-Raleway text-[#646464b2]">
                  {d.country}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Following;
