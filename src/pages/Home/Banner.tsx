import { Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
const Banner = () => {
  // const backgroundImages = [
  //   "https://res.cloudinary.com/dxnznpglg/image/upload/v1716977314/Goufer/Frame_44_1_racqxe.png",
  //   "https://res.cloudinary.com/dxnznpglg/image/upload/v1716977314/Goufer/Frame_44_1_racqxe.png",
  // ];
  return (
    <div className="w-full h-screen  ">
      {/* <div className=" w-full p-0 bg-banner-one bg-cover    ">
        <div className=" mx-auto w-auto pt-32 h-11/12 flex flex-col items-center  ">
          <h3 className=" m-auto text-[64px] text-white   font-Raleway ">
            Artsony for the Artist Within You.
          </h3>

          <h3 className="m-auto  w-[351px] h-[72px] py-5  text-white font-Poppins text-center my-20 text-[20px] rounded-md opacity-100 bg-[#F25B38] cursor-pointer">
            Share Your Art
          </h3>
          <div className="w-full h-auto  px-20 flex flex-row justify-end items-center">
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
      </div> */}
      <div className=" mx-auto w-full flex flex-row bg-white items-center ">
        <Popover placement="bottom">
          <PopoverHandler>
            <button>Subscribe</button>
          </PopoverHandler>
          <PopoverContent
            className="w-96"
            placeholder={null}
            onPointerEnterCapture={() => console.log("okay")}
            onPointerLeaveCapture={() => console.log("okay")}
          >
            <p
              variant="h6"
              color="blue-gray"
              className="mb-6"
              onPointerEnterCapture={() => console.log("okay")}
              onPointerLeaveCapture={() => console.log("okay")}
            >
              Newsletter Subscription
            </p>
            <p
              variant="small"
              color="blue-gray"
              className="mb-1 font-bold"
              onPointerEnterCapture={() => console.log("okay")}
              onPointerLeaveCapture={() => console.log("okay")}
            >
              Your Name
            </p>
            <div className="flex gap-2">
              <input
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <button className="flex-shrink-0">Subscribe</button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Banner;
