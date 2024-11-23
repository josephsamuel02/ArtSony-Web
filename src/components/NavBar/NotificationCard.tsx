/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";

const NotificationCard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<any>(null);

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
          className="absolute top-12 right-4 w-[400px] h-[429px] bg-white shadow-md rounded-md z-30 overflow-y-scroll"
          ref={modalRef}
        >
          <div className="w-full h-[71px] bg-white flex flex-row items-center">
            <p className="mx-auto text-center text-black font-Poppins text-[20px] ">
              Notification
            </p>
          </div>
          <div className="w-full h-auto py-4 bg-white flex flex-row items-center  border-t border-[#fadad3]">
            <img
              src="/images/profilimage.jpeg"
              alt=""
              className="w-[38px] h-[38px] rounded-full object-cover mx-4"
            />
            <div className=" mx-auto w-3/5 flex flex-row items-center">
              <p className=" text-[14px] text-[#F25B38] font-Poppins  ">
                Mara Christopher
                <span className="text-[#333333] font-light px-2">just liked your post.</span>
                <span className="text-[#667070]  font-light"> 2hr</span>
              </p>
              <img
                src="/images/Icon Artwork.svg"
                alt=""
                className="w-[14px] h-[14px] rounded-full object-cover mx-auto"
              />
            </div>

            <img
              src="/images/eyeimage.svg"
              alt=""
              className="w-[60px] h-[48px] rounded-md object-cover mx-4"
            />
          </div>
          <div className="w-full h-auto py-4 bg-white flex flex-row items-center  border-t border-[#fadad3]">
            <img
              src="/images/profilimage.jpeg"
              alt=""
              className="w-[38px] h-[38px] rounded-full object-cover mx-4"
            />
            <div className=" mx-auto w-3/5 flex flex-row items-center">
              <p className="   text-[14px] text-[#F25B38] font-Poppins break-words ">
                Mara Christopher
                <span className="text-[#333333] font-light px-2">
                  just commented on your post: Great piece i love the flow and the lighting .
                </span>
                <span className="text-[#667070] font-light"> 2hr</span>
              </p>
              <img
                src="/images/message Icon1.svg"
                alt=""
                className="w-[14px] h-[14px] rounded-full object-cover mx-auto"
              />
            </div>

            <img
              src="/images/eyeimage.svg"
              alt=""
              className="w-[60px] h-[48px] rounded-md object-cover mx-4"
            />
          </div>
          <div className="w-full h-[50px] bg-white flex flex-row items-center">
            <p className="mx-4 text-center text-[#333333] font-Poppins text-[16px]">
              This Week
            </p>
          </div>
          <div className="w-full h-auto py-4 bg-white flex flex-row items-center  border-t border-[#fadad3]">
            <img
              src="/images/profilimage.jpeg"
              alt=""
              className="w-[38px] h-[38px] rounded-full object-cover mx-4"
            />
            <div className=" mx-auto w-auto flex flex-row items-center">
              <p className=" text-[14px] text-[#F25B38] font-Poppins  ">
                Mara Christopher
                <span className="text-[#333333] font-light px-2">started following you.</span>
                <span className="text-[#667070]  font-light"> 2hr</span>
              </p>
            </div>
          </div>
          <div className="w-full h-auto py-4 bg-white flex flex-row items-center  border-t border-[#fadad3]">
            <img
              src="/images/profilimage.jpeg"
              alt=""
              className="w-[38px] h-[38px] rounded-full object-cover mx-4"
            />
            <div className=" mx-2 w-3/5 flex flex-row items-center">
              <p className="   text-[14px] text-[#F25B38] font-Poppins break-words ">
                Mara Christopher
                <span className="text-[#333333] font-light px-2">
                  just commented on your post: Great piece i love the flow and the lighting .
                </span>
                <span className="text-[#667070] font-light"> 2hr</span>
              </p>
              <img
                src="/images/message Icon1.svg"
                alt=""
                className="w-[14px] h-[14px] rounded-full object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationCard;
