import { useState, useRef, useEffect } from "react";

const ProfileCard = () => {
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
          className="absolute top-16 right-0 w-[400px] h-[559px]  py-6 bg-white shadow-md rounded-md  overflow-y-scroll"
          ref={modalRef}
        >
          <div className="w-full h-auto px-10 py-3 bg-white flex flex-row border-b border-gray-400 ">
            <img
              src="/images/profilimage.jpeg"
              alt=""
              className="w-[60px] h-[60px] rounded-full object-cover  "
            />
            <div className=" mx-5 w-3/5 flex flex-col  ">
              <p className=" text-[20px] text-[#2e2d2d] font-Poppins  ">Lee Chang</p>
              <p className=" text-[14px] text-[#F25B38] font-Poppins font-light ">
                Visit Profile
              </p>
            </div>
          </div>

          <div className="w-full h-auto ">
            <div className="w-full h-auto pl-10 py-5 flex flex-col  border-b-2 border-gray-400  ">
              <h3 className="   my-2 text-[15px] text-[#2e2d2d] hover:text-[#F25B38] font-semibold font-Poppins cursor-default">
                Manage Products
              </h3>
              <h3 className="   my-2 text-[15px] text-[#2e2d2d] hover:text-[#F25B38] font-semibold font-Poppins cursor-default">
                Profile Settings
              </h3>
              <h3 className="   my-2 text-[15px] text-[#2e2d2d] hover:text-[#F25B38] font-semibold font-Poppins cursor-default">
                General Settings
              </h3>
              <h3 className="   my-2 text-[15px] text-[#2e2d2d] hover:text-[#F25B38] font-semibold font-Poppins cursor-default">
                Wallet & Statistics
              </h3>
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
