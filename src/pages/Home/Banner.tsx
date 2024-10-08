/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { useEffect, useState } from "react";

// import { Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
const Banner = () => {
  const User = useSelector((state: any) => state.Auth.user);

  // const dispatch = useDispatch<AppDispatch>();

  const [userData, setUserData] = useState(User);
  // const backgroundImages = [
  //   "https://res.cloudinary.com/dxnznpglg/image/upload/v1716977314/Goufer/Frame_44_1_racqxe.png",
  //   "https://res.cloudinary.com/dxnznpglg/image/upload/v1716977314/Goufer/Frame_44_1_racqxe.png",
  // ];
  const capitalizeFirstLetter = (sentence: string) => {
    return sentence
      .split(" ") // Split the sentence into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(" "); // Join the words back into a sentence
  };
  useEffect(() => setUserData(User), [User]);

  return (
    <div className="w-full h-auto  ">
      <div className=" w-full p-0 bg-banner-one bg-cover">
        <div className=" mx-auto w-auto pt-28 h-11/12 flex flex-col items-center  ">
          <h3 className=" m-auto text-[50px] text-white  font-semibold font-Raleway ">
            Artsony for the Artist Within You.
          </h3>

          <a
            href={userData.status === 200 ? PUBLIC_ROUTES.POST_ART : PUBLIC_ROUTES.LOGIN}
            className="m-auto  w-[351px] h-[72px] py-5  text-white font-Poppins text-center shadow-sm shadow-gray-600 my-20 text-[20px] rounded backdrop-opacity-75   bg-[#f25a38d7] hover:bg-[#db5a43fd] cursor-pointer"
          >
            Share Your Art
          </a>
          <div className="w-full h-auto py-4 px-10 flex flex-row justify-end items-center">
            {User.user.user_name && (
              <p className="font-Poppins font-light text-[16px] text-white mx-4 cursor-pointer">
                {capitalizeFirstLetter(User.user.user_name)}
              </p>
            )}

            {User.user.profile_img && (
              <img
                src={User.user.profile_img}
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

export default Banner;
