/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";

const ShopBanner = () => {
  const userData = useSelector((state: any) => state.Auth.user);
  const userInfo = useSelector((state: any) => state.User.my_profile.data);

  const capitalizeFirstLetter = (sentence: string) => {
    if (!sentence) return ""; // Handle undefined or null input
    return sentence
      .split(" ") // Split the sentence into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(" "); // Join the words back into a sentence
  };

  // Usage example:
  {
    capitalizeFirstLetter(userData?.user_name || "");
  }

  // Define the background images
  const backgroundImages = [
    "https://res.cloudinary.com/promotion-army/image/upload/v1653064116/cld-sample.jpg",
    "/images/Property 1=Default.svg",
    "/images/Rectangle 256.png",

    "/images/Property 1=Variant6.svg",
    "/images/Property 1=Variant7.svg",
    "/images/Property 1=Variant8.svg",
    "/images/Property 1=Variant4.svg",
  ];

  return (
    <motion.div
      className="w-full h-auto"
      initial={{ backgroundImage: `url(${backgroundImages[0]})` }}
      animate={{ backgroundImage: `url(${backgroundImages[1]})` }}
      transition={{
        duration: 3, // Transition duration in seconds
        repeat: Infinity, // Loop the animation
        repeatType: "reverse", // Reverse back and forth
      }}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full p-0">
        <div className="mx-auto w-auto pt-28 h-11/12 flex flex-col items-center">
          <h3 className="m-auto text-[50px] text-white font-semibold font-Raleway">
            The Cool Art Shop
          </h3>

          <a
            href={userData?.status === 200 ? PUBLIC_ROUTES.SELL_ART : PUBLIC_ROUTES.LOGIN}
            className="m-auto w-[351px] h-[72px] py-5 text-white font-Poppins text-center shadow-sm shadow-gray-600 my-20 text-[20px] rounded backdrop-opacity-75 bg-[#f25a38d7] hover:bg-[#db5a43fd] cursor-pointer"
          >
            Sell Your Art?
          </a>

          {userInfo && (
            <div className="w-full h-auto py-4 px-10 flex flex-row justify-end items-center">
              <p className="font-Poppins font-light text-[16px] text-white mx-4">
                {capitalizeFirstLetter(userData?.user_name)}
              </p>
              {userData.profile_img && (
                <img
                  src={userData.profile_img}
                  alt=""
                  className="w-12 h-12 object-cover rounded-full"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ShopBanner;
