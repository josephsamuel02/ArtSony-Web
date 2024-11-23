/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const User = useSelector((state: any) => state.User.my_profile.data);
  const [userData, setUserData] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const backgroundImages = [
    "https://res.cloudinary.com/promotion-army/image/upload/v1653064116/cld-sample.jpg",
    "/images/Property 1=Default.svg",
    "/images/Rectangle 251.svg",
    "/images/Property 1=Variant2.svg",
    "/images/Property 1=Variant3.svg",
    "/images/Property 1=Variant4.svg",
    "/images/Property 1=Variant5.svg",
    "/images/Property 1=Variant6.svg",
    "/images/Property 1=Variant7.svg",
    "/images/Property 1=Variant8.svg",
    "/images/Property 1=Variant4.svg",
  ];

  const capitalizeFirstLetter = (sentence: string) => {
    return sentence
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    User && setUserData(User);
  }, [User]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="w-full h-auto relative overflow-hidden">
      {/* Animated Background */}
      <AnimatePresence>
        <motion.div
          key={currentIndex} // Ensure unique key for animation
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Smooth fade
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("${backgroundImages[currentIndex]}")`, // Use currentIndex
          }}
        />
      </AnimatePresence>

      {/* Banner Content */}
      <div className="relative z-10 w-full p-0">
        <div className="mx-auto w-auto pt-28 h-11/12 flex flex-col items-center">
          <h3 className="m-auto text-[50px] text-white font-semibold font-Raleway">
            Artsony for the Artist Within You.
          </h3>

          <a
            href={userData.status === 200 ? PUBLIC_ROUTES.POST_ART : PUBLIC_ROUTES.LOGIN}
            className="m-auto w-[351px] h-[72px] py-5 text-white font-Poppins text-center shadow-sm shadow-gray-600 my-20 text-[20px] rounded backdrop-opacity-75 bg-[#f25a38d7] hover:bg-[#db5a43fd] cursor-pointer"
          >
            Share Your Art
          </a>
          <div className="w-full h-auto py-4 px-10 flex flex-row justify-end items-center">
            {userData.user_name && (
              <p className="font-Poppins font-light text-[16px] text-white mx-4 cursor-pointer">
                {capitalizeFirstLetter(userData.user_name)}
              </p>
            )}

            {userData.profile_img && (
              <img
                src={userData.profile_img}
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
