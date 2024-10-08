/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

interface compData {
  userInfo: any;
}
const SocialsAndLinks = ({ userInfo }: compData) => {
  // const capitalizeFirstLetter = (sentence: string) => {
  //   return sentence
  //     .split("")
  //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
  //     .join("");
  // };

  return (
    <div className="w-full h-full px-5  rounded-md ">
      <h2 className="text-xl p-3 py-2   border-b border-[#ff6f4349] text-customOrange font-Raleway">
        Socials & Links
      </h2>

      <div className="m-auto w-full h-auto mt-2 flex flex-col items-center justify-center ">
        <h2 className="text-md mr-auto   text-customOrange font-Raleway">Link *</h2>
        <h2 className="text-xs mr-auto mt-1  text-gray-800 font-Raleway">
          Link personal website that will be displayed on your profile page
        </h2>
        <div className="w-full  my-1 px-1 flex flex-row items-center   border border-[#ff6f4373] rounded-md">
          <input
            type="text"
            name="link"
            defaultValue={userInfo.website.length > 0 ? userInfo.website[0] : ""}
            placeholder="https://forexample.com"
            className="w-full px-4 text-xs outline-none font-Poppins   "
          />

          <input
            type="button"
            name="Save"
            value="Remove"
            className=" py-1 my-1 px-2 text-sm text-customOrange font-Poppins bg-white  hover:bg-[#f3590033]  rounded-md cursor-pointer"
          />
        </div>

        <input
          type="button"
          name="Save"
          value="Add +"
          className="  py-2 my-1 mx-auto   px-8 text-sm text-white font-Poppins bg-[#02272F]  hover:bg-[#013d4b]  rounded-md cursor-pointer"
        />
      </div>

      <div className="m-auto w-full h-auto   flex flex-col items-center justify-center ">
        <h2 className="text-md mr-auto pb-1 text-customOrange font-Raleway">Socials *</h2>
        <h2 className="text-xs mr-auto   text-gray-800 font-Raleway">
          Link personal website that will be displayed on your profile page
        </h2>

        <div className="w-full  my-1 px-1 flex flex-row items-center   border border-[#ff6f4373] rounded-md">
          <img
            src="/images/facebook.svg"
            alt="Facebook"
            className="w-6 h-6 mx-1  object-cover"
          />
          <h4 className="text-xs mr-auto  py-1 text-gray-800 font-Poppins">Facebook</h4>
          <input
            type="text"
            name="Facebook"
            defaultValue={
              userInfo.socials !== null
                ? userInfo.socials.facebook && userInfo.socials.facebook
                : ""
            }
            placeholder="https://forexample.com"
            className="w-full px-4 my-2 text-xs outline-none font-Poppins"
          />
        </div>
        <div className="w-full  my-1 px-1 flex flex-row items-center   border border-[#ff6f4373] rounded-md">
          <img
            src="/images/instagram.svg"
            alt="instagram"
            className="w-6 h-6 mx-1  object-cover"
          />
          <h4 className="text-xs mr-auto  py-1 text-gray-800 font-Poppins">Instagram</h4>
          <input
            type="text"
            name="instagram"
            defaultValue={
              userInfo.socials !== null
                ? userInfo.socials.instagram && userInfo.socials.instagram
                : ""
            }
            placeholder="https://forexample.com"
            className="w-full px-4 my-2 text-xs outline-none font-Poppins"
          />
        </div>
        <div className="w-full  my-1 px-1 flex flex-row items-center   border border-[#ff6f4373] rounded-md">
          <FaXTwitter color="black" size={26} className="mx-1" />

          <h4 className="text-xs mr-auto  py-1 text-gray-800 font-Poppins">X_Social</h4>
          <input
            type="text"
            name="x_social"
            defaultValue={
              userInfo.socials !== null
                ? userInfo.socials.x_social && userInfo.socials.x_social
                : ""
            }
            placeholder="https://forexample.com"
            className="w-full px-4 my-2 text-xs outline-none font-Poppins   "
          />
        </div>
        <div className="w-full  my-1 px-1 flex flex-row items-center   border border-[#ff6f4373] rounded-md">
          <img
            src="/images/linkedin.svg"
            alt="First name"
            className="w-6 h-6 mx-1  object-cover"
          />

          <h4 className="text-xs mr-auto  py-1 text-gray-800 font-Poppins">Linkedin</h4>
          <input
            type="text"
            name="First name"
            defaultValue={
              userInfo.socials !== null
                ? userInfo.socials.linkedin && userInfo.socials.linkedin
                : ""
            }
            placeholder="https://forexample.com"
            className="w-full px-4 my-2 text-xs outline-none font-Poppins   "
          />
        </div>

        <div className="w-full  my-1 px-1 flex flex-row items-center   border border-[#ff6f4373] rounded-md">
          <img
            src="/images/Patreon.svg"
            alt="First name"
            className="w-6 h-6 mx-1  object-cover"
          />
          <h4 className="text-xs mr-auto  py-1 text-gray-800 font-Poppins">Patreon</h4>
          <input
            type="text"
            name="First name"
            defaultValue={
              userInfo.socials !== null
                ? userInfo.socials.patreon && userInfo.socials.patreon
                : ""
            }
            placeholder="https://forexample.com"
            className="w-full px-4 my-2 text-xs outline-none font-Poppins   "
          />
        </div>

        <div className="w-full  my-1 px-1 flex flex-row items-center   border border-[#ff6f4373] rounded-md">
          <FaYoutube color="red" size={30} className="mx-1" />
          <h4 className="text-xs mr-auto  py-1 text-gray-800 font-Poppins">Youtube</h4>
          <input
            type="text"
            name="youtube"
            defaultValue={
              userInfo.socials !== null
                ? userInfo.socials.youtube && userInfo.socials.youtube
                : ""
            }
            placeholder="https://youtube.com/example"
            className="w-full px-4 my-2 text-xs outline-none font-Poppins   "
          />
        </div>
      </div>
      <input
        type="button"
        name="Save"
        value="Save Changes"
        className="  py-2 my-2 flex  ml-auto   px-4 text-sm text-white font-Poppins bg-[#02272F]  hover:bg-[#013d4b]  rounded-md cursor-pointer"
      />
    </div>
  );
};

export default SocialsAndLinks;
