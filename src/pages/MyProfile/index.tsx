/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Nav from "../../components/NavBar/Nav";
import Followers from "../../components/NavBar/Followers";
import Following from "../../components/NavBar/Following";
import Artwork from "./Artworks";
import About from "./About";
import Store from "./Store";
import { MdOutlineFileUpload } from "react-icons/md";
import UploadCard from "../../components/NavBar/UploadCard";
import { GetMyProfile } from "../../Redux/User";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";

const MyProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const User = useSelector((state: any) => state.User.my_profile.data);

  const [profileComponent, setProfileComponent] = useState("Artwork");
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showUploadCard, setShowUploadCard] = useState("close");

  const capitalizeFirstLetter = (sentence: string) => {
    return sentence
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(" ");
  };

  const profileMenu = [
    {
      icon: "https://res.cloudinary.com/dspkk9qlz/image/upload/v1716893931/filter_hdr_ja4jfq.svg",
      title: "Artwork",
    },
    {
      icon: "https://res.cloudinary.com/dspkk9qlz/image/upload/v1716894332/profilee_qy0rxm.svg",
      title: "About",
    },
    // {
    //   icon: "https://res.cloudinary.com/dspkk9qlz/image/upload/v1716894446/folder_eeotfy.svg",
    //   title: "Moodboard",
    // },
    {
      icon: "https://res.cloudinary.com/dspkk9qlz/image/upload/v1716894788/store_j0eefa.svg",
      title: "Store",
    },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(GetMyProfile());
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-auto">
      <Nav />
      <div className="w-full h-[513px] relative bg-banner-one bg-no-repeat bg-center bg-cover mb-80 flex flex-col items-center">
        {/* ----------------------------------main----------------------- */}
        <div className="absolute mx-auto" style={{ top: "120px" }}>
          <div className="w-[475px] h-[553px] border border-solid border-[rgba(242,90,56,0.54)] rounded-2xl border-1 border-opacity-50 backdrop-filter backdrop-blur-sm p-4 flex flex-col justify-between bg-[rgba(43,43,103,0.5)]">
            <div className="flex items-center justify-center mt-4">
              <div className="relative bg-[url(https://res.cloudinary.com/dspkk9qlz/image/upload/v1718099830/Group_1542_rqqlwm.png)] bg-cover w-[166.77px] h-[166px] text-orange-500">
                {User.profile_img !== null ? (
                  <img
                    className="absolute mt-5 ml-5 w-[127px] h-[126.42] rounded-full flex"
                    src={User.profile_img}
                    alt="profile image"
                  />
                ) : (
                  <img
                    className="absolute mt-5 ml-5 w-[127px] h-[126.42] flex"
                    src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718099969/profile_page_image_ohcd63.svg"
                    alt="profile image"
                  />
                )}
              </div>
            </div>
            <div className="text-center mt-4">
              <div className="flex items-center justify-center">
                <h2 className="text-xl font-semibold text-white mr-2">
                  {capitalizeFirstLetter(User.user_name)}
                </h2>
                {/* <img
                  src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716800070/iconfbolu_kp0gex.svg"
                  alt="Icon"
                  className="w-6 h-6"
                /> */}
              </div>
              <div className="flex justify-center ml-4 items-center mt-14 w-[384px] h-[73px]">
                <div
                  className="flex flex-col items-center mr-4 text-white w-[120px] h-[50px] pt-2 cursor-pointer rounded-md hover:bg-[#15192b8a]"
                  onClick={() => setShowFollowing(true)}
                >
                  <p className="text-sm font-normal text-slate-500">{User.following.length}</p>
                  <p className="text-sm text-white-500 font-normal">Following</p>
                </div>
                <img
                  src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716800972/Line_16_zomu6j.svg"
                  alt="line"
                />
                <div
                  className="flex flex-col items-center text-white w-[144px] h-[50px] pt-2 cursor-pointer rounded-md hover:bg-[#15192b8a]"
                  onClick={() => {
                    setShowFollowers(true);
                  }}
                >
                  <p className="text-sm text-slate-500">{User.followers.length}</p>
                  <p className="text-sm text-white-500">Followers</p>
                </div>
                <img
                  src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716800972/Line_16_zomu6j.svg"
                  alt="line"
                />
                <div className="flex flex-col items-center text-white w-[120px] h-[50px]">
                  <p className="text-sm text-slate-500">{User.likes}</p>
                  <p className="text-sm text-white-500">Likes</p>
                </div>
              </div>
            </div>
            <div className="flex justify-around my-6 ">
              <button
                className="bg-[#F25B38] w-[192px] h-[48px] text-white px-4 py-2 flex flex-row items-center rounded-md mr-2 text-lg hover:bg-[#f25a38ba]"
                onClick={() => setShowUploadCard("upload")}
              >
                <MdOutlineFileUpload size={26} color="white" />
                <p className="mx-auto">Upload</p>
              </button>
              <button className="bg-white text-[#F25B38] px-4 py-2 rounded-md w-[192px] h-[48px] gap-[20px] justify-center  text-lg hover:bg-gray-300 flex items-center">
                <img
                  src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716802641/mail_ol44yq.svg"
                  className="  w-[20px] h-[16px] items-center object-cover"
                  alt="message"
                />
                Inbox
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-[720px] flex gap-3">
          {profileMenu.map((d, i) => (
            <button
              className={`mx-auto   w-[105px] h-auto md:w-[228px] md:h-[48px] py-[12px] items-center  flex  flex-row item-center rounded border border-[#F25B3833] hover:bg-[#b65a452c] hover:text-[#F25B38]  ${
                profileComponent == d.title
                  ? " text-white  bg-[#02272F]"
                  : "text-[#F25B38] bg-white"
              }`}
              key={i}
              onClick={() => setProfileComponent(d.title)}
            >
              <img
                src={d.icon}
                alt="filter"
                className="w-[20px] h-[20px] ml-auto mr-1 object-cover"
              />
              <span className="text-sm md:text-lg mr-auto">{d.title}</span>
            </button>
          ))}
        </div>
      </div>

      {profileComponent == "Artwork" && <Artwork />}
      {profileComponent == "About" && <About User={User} />}
      {/* {profileComponent == "Moodboard" && <Moodboard />} */}
      {profileComponent == "Store" && <Store />}
      {showFollowers && <Followers setShowFollowers={setShowFollowers} />}
      {showFollowing && <Following setShowFollowing={setShowFollowing} />}
      {showUploadCard && (
        <UploadCard showUploadCard={showUploadCard} setShowUploadCard={setShowUploadCard} />
      )}
      <div className="w-full flex flex-row py-10  mt-6 item-center justify-center   ">
        <img
          className="mx-6 w-[32px] h-[32px]"
          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716894980/loadmorei_zc92qi.svg"
          alt=""
        />

        <button className="text-[#F25B38] text-[24px] font-Poppins  ">Load more Art ?</button>
      </div>
    </div>
  );
};

export default MyProfile;
