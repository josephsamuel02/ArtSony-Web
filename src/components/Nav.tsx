import { useState } from "react";
import UploadCard from "./UploadCard";
import NotificationCard from "./NotificationCard";
import ProfileCard from "./ProfileCard";
import MessageCard from "./MessageCard";

const Nav = () => {
  const [showUploadCard, setShowUploadCard] = useState(false);
  const [showNotificationCard, setShowNotificationCard] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [showMessageCard, setShowMessageCard] = useState(false);

  const naveData = [
    { title: "Explore", url: "" },
    { title: "Shop", url: "/userpost" },
    { title: "Hire Artist", url: "" },
    { title: "Find Gigs", url: "" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full py-4 h-auto flex flex-row px-2 items-center backdrop-blur-sm backdrop-contrast-75 backdrop-opacity-75 backdrop-brightness-50 z-50 ">
        <img
          src="/images/artsonylogo.png"
          alt="Art sony logo"
          className="mx-6  w-auto h-5 object-cover"
        />
        <div className="w-auto mx-auto items-center flex flex-row h-auto ">
          {naveData.map((i, n) => (
            <a
              href={i.url}
              key={n}
              className="mx-auto p-2 text-[16px] text-center text-white font-Poppins"
            >
              {i.title}
            </a>
          ))}
        </div>
        <div className="mx-auto w-2/6 h-auto items-center flex flex-row  ">
          <div className="mx-auto w-9/12 h-auto border px-3 pl-5 items-center flex flex-row border-gray-500  rounded-md">
            <img src="/images/searchicon1.svg" alt="search" className=" w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-4/5 h-auto  bg-transparent text-sm font-light text-white font-Poppins p-2 outline-none focus:outline-none"
            />
          </div>
        </div>
        <div className="mx-auto w-64 h-auto flex flex-row items-center">
          <h2 className=" mx-auto  " onClick={() => setShowUploadCard(!showUploadCard)}>
            <img src="/images/upload.svg" alt="search" className="w-[27px] h-8" />
          </h2>
          <h2 className=" mx-auto">
            <img src="/images/local_shipping.svg" alt="search" className="w-[27px] h-8 " />
          </h2>
          <h2
            className="mx-auto relative p-1.5 px-1"
            onClick={() => setShowNotificationCard(!showNotificationCard)}
          >
            <p className="bg-white text-xs px-1 text-red-500 absolute top-0 right-0  rounded-full">
              3
            </p>
            <img src="/images/notifications.svg" alt="search" className="w-[27px] h-8" />
            {showNotificationCard && <NotificationCard />}
          </h2>
          <h2 className=" mx-auto relative p-1.5 px-1">
            <p className="bg-white text-xs px-1 text-red-500 absolute top-0 right-0  rounded-full">
              3
            </p>
            <img src="/images/local_mall.svg" alt="search" className="w-[27px] h-8" />
          </h2>
          <h2
            className=" mx-auto relative p-1.5 px-1"
            onClick={() => setShowMessageCard(!showMessageCard)}
          >
            <p className="bg-white text-xs px-1 text-red-500 absolute top-0 right-0  rounded-full">
              3
            </p>
            <img src="/images/drafts.svg" alt="search" className="w-[27px] h-8" />
          </h2>
        </div>
        <div
          className="mx-3  w-auto flex flex-row items-center"
          onClick={() => setShowProfileCard(!showProfileCard)}
        >
          <img
            src="/images/profilimage.jpeg"
            alt=""
            className="w-10 h-10 object-cover rounded-full"
          />
          <img src="/images/arrow_drop_down.svg" alt="search" className="mx-1 w-5 h-5" />

          {showProfileCard && <ProfileCard />}
        </div>
      </div>
      {showUploadCard && <UploadCard />}

      {showMessageCard && <MessageCard />}
    </>
  );
};

export default Nav;
