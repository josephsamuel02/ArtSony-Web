/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";

interface compData {
  User: any;
}

const ProfileCard = ({ User }: compData) => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<any>(null);

  const capitalizeFirstLetter = (sentence: string) => {
    return sentence
      .split(" ") // Split the sentence into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(" "); // Join the words back into a sentence
  };

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
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
      {isOpen && (
        <div
          className="absolute top-16 right-0 w-[400px] h-[559px]  py-6 bg-white shadow-md rounded-md  overflow-y-scroll"
          ref={modalRef}
        >
          <div className="w-full h-auto px-10 py-3 bg-white flex flex-row border-b border-gray-400 ">
            {User.profile_img !== null && (
              <img
                src={User.profile_img}
                alt=""
                className="w-[60px] h-[60px] rounded-full object-cover  "
              />
            )}
            <div className=" mx-5 w-3/5 flex flex-col  ">
              <p className=" text-[20px] text-[#2e2d2d] font-Poppins  ">
                {capitalizeFirstLetter(User?.user_name)}
              </p>
              <a
                href={PUBLIC_ROUTES.MY_PROFILE}
                className=" text-[14px] text-[#F25B38] font-Poppins font-light "
              >
                Visit Profile
              </a>
            </div>
          </div>

          <div className="w-full h-auto ">
            <div className="w-full h-auto pl-10 py-5 flex flex-col  border-b-2 border-gray-400  ">
              <h3 className="   my-2 text-[15px] text-[#2e2d2d] hover:text-[#F25B38] font-semibold font-Poppins cursor-default">
                Manage Products
              </h3>
              <a
                href={PUBLIC_ROUTES.PROFILE_SETTINGS}
                className="   my-2 text-[15px] text-[#2e2d2d] hover:text-[#F25B38] font-semibold font-Poppins cursor-default"
              >
                Profile Settings
              </a>
              <a
                href={PUBLIC_ROUTES.GENERAL_SETTINGS}
                className=" my-2 text-[15px] text-[#2e2d2d] hover:text-[#F25B38] font-semibold font-Poppins cursor-default"
              >
                General Settings
              </a>
              <a
                href={PUBLIC_ROUTES.WALLET_STATISTICS}
                className=" my-2 text-[15px] text-[#2e2d2d] hover:text-[#F25B38] font-semibold font-Poppins cursor-default"
              >
                Wallet & Statistics
              </a>
            </div>
            <div className="w-full h-auto pl-10 py-5 flex flex-col  border-b-2 border-gray-400  ">
              <h3 className="   my-2 text-[15px] text-[#2e2d2d] hover:text-[#F25B38] font-semibold font-Poppins cursor-default">
                Artworks
              </h3>
              <h3 className="   my-2 text-[15px] text-[#2e2d2d] hover:text-[#F25B38] font-semibold font-Poppins cursor-default">
                My store
              </h3>
              <h3 className="   my-2 text-[15px] text-[#2e2d2d] hover:text-[#F25B38] font-semibold font-Poppins cursor-default">
                Mood board
              </h3>
            </div>

            <div className="w-full h-auto pl-10 py-5 flex flex-col     ">
              <h3 className="  my-2 text-[15px] text-[#2e2d2d] hover:text-[#F25B38] font-semibold font-Poppins cursor-default">
                Legal & FAQ
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
