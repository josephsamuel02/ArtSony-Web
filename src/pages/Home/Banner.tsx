// import { Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
const Banner = () => {
  // const backgroundImages = [
  //   "https://res.cloudinary.com/dxnznpglg/image/upload/v1716977314/Goufer/Frame_44_1_racqxe.png",
  //   "https://res.cloudinary.com/dxnznpglg/image/upload/v1716977314/Goufer/Frame_44_1_racqxe.png",
  // ];
  return (
    <div className="w-full h-auto  ">
      <div className=" w-full p-0 bg-banner-one bg-cover">
        <div className=" mx-auto w-auto pt-28 h-11/12 flex flex-col items-center  ">
          <h3 className=" m-auto text-[50px] text-white  font-semibold font-Raleway ">
            Artsony for the Artist Within You.
          </h3>

          <h3 className="m-auto  w-[351px] h-[72px] py-5  text-white font-Poppins text-center shadow-sm shadow-gray-600 my-20 text-[20px] rounded backdrop-opacity-75   bg-[#F25B38] hover:bg-red-500 cursor-pointer">
            Share Your Art
          </h3>
          <div className="w-full h-auto py-4 px-10 flex flex-row justify-end items-center">
            <p className="font-Poppins font-light text-[16px] text-white mx-4 ">
              Grace Bamidele
            </p>
            <img
              src="/images/profilimage.jpeg"
              alt=""
              className="w-12 h-12 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
