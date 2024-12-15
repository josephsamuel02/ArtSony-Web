/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import UploadCard from "./UploadCard";
import NotificationCard from "./NotificationCard";
import ProfileCard from "./ProfileCard";
import MessageCard from "./Messageing/MessageCard";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { ArtSearch } from "../../Redux/FetchArtwork";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { useNavigate } from "react-router-dom";
import { GetMyProfile } from "../../Redux/User";
import socket from "../../utils/socket";

const Nav = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const userId = useSelector((state: any) => state.User.my_profile.data?.userId);

  const [showUploadCard, setShowUploadCard] = useState("close");
  const [showNotificationCard, setShowNotificationCard] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [showMessageCard, setShowMessageCard] = useState(false);

  const [searchText, setSearchText] = useState("");
  const UserData = useSelector((state: any) => state.User.my_profile.data);
  const [User, setUser] = useState<any>([]);

  const naveData = [
    { title: "Explore", url: PUBLIC_ROUTES.EXPLORE },
    { title: "Shop", url: PUBLIC_ROUTES.SHOP },
    // { title: "Hire Artist", url: "" },
    // { title: "Find Gigs", url: "" },
  ];
  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Trigger the dispatch when Enter is pressed
      dispatch(ArtSearch({ search_string: searchText }));
      navigate(PUBLIC_ROUTES.SEARCH);
    }
  };

  useEffect(() => {
    localStorage.setItem("artsoney_user_id", userId);
    socket.connect();
    const fetchUser = async () => {
      dispatch(GetMyProfile());
    };
    fetchUser();
    UserData && setUser(UserData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full py-4 h-auto flex flex-row px-2 items-center backdrop-blur-sm backdrop-contrast-75 backdrop-opacity-75 backdrop-brightness-50 z-40 ">
        <a href={PUBLIC_ROUTES.HOME}>
          <img
            src="/images/artsonylogo.png"
            alt="Art sony logo"
            className="mx-1 md:mx-6  w-auto h-3 md:h-5 object-cover"
          />
        </a>
        <div className="w-auto mx-auto items-center flex flex-row h-auto ">
          {naveData.map((i, n) => (
            <a
              href={i.url}
              key={n}
              className="mx-auto p-2 text-[13px] text-center text-white font-Poppins"
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
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-4/5 h-auto  bg-transparent text-sm font-light text-white font-Poppins p-2 outline-none focus:outline-none"
            />
          </div>
        </div>

        {UserData && (
          <>
            <div className="mx-auto w-64 h-auto flex flex-row items-center">
              <h2 className=" mx-auto  " onClick={() => setShowUploadCard("upload")}>
                <img src="/images/upload.svg" alt="search" className="w-[27px] h-8" />
              </h2>
              <a href={PUBLIC_ROUTES.ORDERS} className=" mx-auto">
                <img src="/images/local_shipping.svg" alt="search" className="w-[27px] h-8 " />
              </a>
              <h2
                className="mx-auto relative p-1.5 px-1"
                onClick={() => setShowNotificationCard(!showNotificationCard)}
              >
                <p className="bg-white text-xs px-1 text-red-500 absolute top-0 right-0  rounded-full">
                  {/* your notification count shows here */}
                </p>
                <img src="/images/notifications.svg" alt="search" className="w-[27px] h-8" />
                {showNotificationCard && <NotificationCard />}
              </h2>
              <a href={PUBLIC_ROUTES.CHECKOUT} className=" mx-auto relative p-1.5 px-1">
                <p className="bg-white text-xs px-1 text-red-500 absolute top-0 right-0  rounded-full">
                  {/* your cart count shows here */}
                </p>
                <img src="/images/local_mall.svg" alt="search" className="w-[27px] h-8" />
              </a>
              <h2
                className=" mx-auto relative p-1.5 px-1"
                onClick={() => setShowMessageCard(!showMessageCard)}
              >
                <p className="bg-white text-xs px-1 text-red-500 absolute top-0 right-0  rounded-full">
                  {/* your messages count shows here */}
                </p>
                <img src="/images/drafts.svg" alt="search" className="w-[27px] h-8" />
              </h2>
            </div>
            <div
              className="mx-3  w-auto flex flex-row items-center"
              onClick={() => setShowProfileCard(!showProfileCard)}
            >
              {User.profile_img && (
                <img
                  src={User.profile_img}
                  alt=""
                  className="w-10 h-10 object-cover rounded-full"
                />
              )}
              <img src="/images/arrow_drop_down.svg" alt="search" className="mx-1 w-5 h-5" />

              {showProfileCard && <ProfileCard User={User} />}
            </div>
          </>
        )}

        {!UserData && (
          <a
            href={PUBLIC_ROUTES.LOGIN}
            className=" md:ml-auto  py-2 px-3 md:px-6 bg-customOrange hover:bg-orange-900 text-white font-Poppins text-[12px] md:text-base rounded  "
          >
            Sign in
          </a>
        )}
      </div>
      {showUploadCard && (
        <UploadCard showUploadCard={showUploadCard} setShowUploadCard={setShowUploadCard} />
      )}
      {showMessageCard && <MessageCard />}
    </>
  );
};

export default Nav;
