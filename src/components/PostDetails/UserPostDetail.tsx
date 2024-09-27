/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons/faMessage";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";
import { faRemove } from "@fortawesome/free-solid-svg-icons/faRemove";
import { MdClose, MdOutlineRemoveRedEye, MdOutlineShare } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { IoImages } from "react-icons/io5";
import { BsFlag } from "react-icons/bs";

interface cmpState {
  Artwork: any;
  setShowPostData: (item: boolean) => void;
}

const UserPostDetail = ({ Artwork, setShowPostData }: cmpState) => {
  const item = {
    images: [
      "/images/wide image256.svg",
      "/images/wide image256.svg",
      "/images/wide image256.svg",
    ],
    category: "",
    caption: "Lake Side View- Dream Mountain",
    profile_image: "/images/Ellipse 10.svg",
    user_name: "Christine Boluwatife",
    profession: "Landscape Photographer",
    date: " 8th November, 2022",
    likes: 100,
    views: 200,
    messages: 20,
    socials: { facebook: "", x_social: "", instagram: "" },
  };

  return (
    <div className="  fixed top-20 left-0 right-0 w-full h-auto flex flex-row bg-white rounded-lg z-10">
      <div className="w-4/5 h-[900px] overflow-y-scroll">
        <div className=" w-full h-auto ">
          {/* {item.images.map((d, i) => (
            <img src={d} alt={"images"} className="w-full h-auto" key={i} />
          ))} */}

          {Artwork.images.map((d: string, i: number) => (
            // <img src={d} key={i} />
            <img src={d} alt={`image ${i}`} className="w-full h-auto" key={i} />
          ))}
        </div>
      </div>
      <div className=" w-1/5  relative  h-full py-3 px-3.5 bg-white rounded-r-lg ">
        <h3 onClick={() => setShowPostData(false)}>
          <MdClose size={33} color="gray" className="absolute top-4 right-4" />
        </h3>
        <div className="flex flex-row items-center space-x-60">
          <h3 className="py-4  text-[#504f4f] text-[24px] font-Poppins">Owner</h3>
          <FontAwesomeIcon icon={faRemove} />
        </div>
        <div className=" mx-auto flex gap-3">
          <img src={Artwork.user.profile_img} />
          <div className="flex flex-col gap-0.5">
            <h1 className="text-[#F25B38] text-[16px] font-Raleway">
              {Artwork.user.user_name}
            </h1>
            <p className="text-[#0a0a0a] text-[16px] font-light font-Raleway">
              {item.profession}
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <div className="bg-lightOrange py-3 my-2 text-customOrange rounded-md gap-1 flex flex-row border border-[#fcac9a] justify-center items-center">
            <FontAwesomeIcon icon={faUserCircle} className="text-customOrange" />
            <button className="text-center">Follow</button>
          </div>
          <div className=" flex flex-row  bg-lightOrange py-3 text-orange-500  border border-[#fcac9a]  justify-center gap-1 rounded-md items-center">
            <FontAwesomeIcon icon={faMessage} className="text-customOrange" />
            <button className="text-center text-customOrange">Message</button>
          </div>
        </div>
        <hr className="py-3 mt-3" />
        <p className="text-[#02272F] text-bold font-Poppins text-[16px] text-center">
          {item.caption}
        </p>
        <div className="mx-auto py-3 w-full">
          <p className="py-1">{item.category}</p>
          <p className="py-1 text-center text-customOrange">Published: {item.date} </p>
          <div className="mx-auto w-4/5 pt-3 flex flex-row gap-3 items-center py-1 cursor-pointer">
            <div className="mx-auto flex flex-row gap-1 items-center">
              <MdOutlineRemoveRedEye color={"#F25B38"} size={25} />
              {Artwork.views && <p className="text-sm font-Poppins  ">{Artwork.views}k</p>}
            </div>
            <div className="mx-auto flex flex-row gap-1 items-center">
              <AiOutlineHeart color={"#F25B38"} size={23} />
              {Artwork.likes && <p className="text-sm font-Poppins  ">{Artwork.likes}k</p>}
            </div>
            <div className="mx-auto flex flex-row gap-1 items-center">
              <BiMessage color={"#F25B38"} size={23} />
              {Artwork.comments.length > 0 && (
                <p className="text-sm font-Poppins  ">{Artwork.comments.length}k</p>
              )}
            </div>
          </div>
        </div>
        <hr className="py-3 mt-3" />
        <div className="flex flex-row items-center gap-7 justify-center space-x-30 cursor-pointer">
          <div className="border py-1 px-2 rounded-md">
            <IoImages color={"#F25B38"} size={25} />
          </div>
          <div className="border py-1 px-2 rounded-md">
            <MdOutlineShare color={"#F25B38"} size={25} />
          </div>
          <div className="border py-1 px-2 rounded-md">
            <BsFlag color={"#F25B38"} size={25} />
          </div>
        </div>
        <div className="flex flex-row gap-8  justify-center mt-40 cursor-pointer">
          <img src="/assets/Vector.svg" alt="svg" />
          <img src="/assets/Vector1.svg" alt="svg" />
          <img src="/assets/Vector2.svg" alt="svg" />
          <img src="/assets/Vector3.svg" alt="svg" />
        </div>
      </div>
    </div>
  );
};

export default UserPostDetail;
