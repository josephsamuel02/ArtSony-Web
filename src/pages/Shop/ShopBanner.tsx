/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";

// import { Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
const ShopBanner = () => {
  const userData = useSelector((state: any) => state.Auth.user);

  const capitalizeFirstLetter = (sentence: string) => {
    return sentence
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(" ");
  };
  // const backgroundImages = [
  //   "https://res.cloudinary.com/dxnznpglg/image/upload/v1716977314/Goufer/Frame_44_1_racqxe.png",
  //   "https://res.cloudinary.com/dxnznpglg/image/upload/v1716977314/Goufer/Frame_44_1_racqxe.png",
  // ];
  return (
    <div className="w-full h-auto  ">
      <div className=" w-full p-0 bg-banner-two bg-cover">
        <div className=" mx-auto w-auto pt-28 h-11/12 flex flex-col items-center  ">
          <h3 className=" m-auto text-[50px] text-white  font-semibold font-Raleway ">
            The Cool Art Shop
          </h3>

          <a
            href={userData.status === 200 ? PUBLIC_ROUTES.SELL_ART : PUBLIC_ROUTES.LOGIN}
            className="m-auto  w-[351px] h-[72px] py-5  text-white font-Poppins text-center shadow-sm shadow-gray-600 my-20 text-[20px] rounded backdrop-opacity-75   bg-[#f25a38d7] hover:bg-[#db5a43fd] cursor-pointer"
          >
            Sell Your Art?
          </a>
          <div className="w-full h-auto py-4 px-10 flex flex-row justify-end items-center">
            <p className="font-Poppins font-light text-[16px] text-white mx-4 ">
              {capitalizeFirstLetter(userData.user.user_name)}
            </p>
            {userData.user.profile_img && (
              <img
                src={userData.user.profile_img}
                alt=""
                className="w-12 h-12 object-cover rounded-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
