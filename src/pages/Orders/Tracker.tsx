/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoMdLocate } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

import { FaMapMarkedAlt } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Tracker = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showReceiptOptions, setShowReceiptOptions] = useState(false);

  const modalRef = useRef<any>(null);

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowReceiptOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="mx-auto w-2/3 h-screen  ">
      {!showDetail && (
        <div className="w-full h-screen relative bg-blue-gray-300">
          <div
            className=" absolute right-16 top-10 w-7 h-7 flex flex-row items-center bg-white hover:bg-gray-200 rounded-md shadow-lg cursor-pointer"
            ref={modalRef}
            onClick={() => setShowOptions(true)}
          >
            <span className="text-xl m-auto">
              <BiDotsVerticalRounded size={20} />
            </span>
          </div>
          {showOptions && (
            <div className="absolute right-16 top-10 py-3 w-[160px] flex flex-col bg-white rounded shadow">
              <p
                className="mx-4 text-sm font-Raleway text-black hover:text-customOrange cursor-pointer"
                onClick={() => setShowDetail(true)}
              >
                View Detail
              </p>
            </div>
          )}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126514.22367266817!2d8.47352336464153!3d7.72925131546369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1050805458317acf%3A0x1acb339fc3ba1a3b!2sMakurdi%20970101%2C%20Benue!5e0!3m2!1sen!2sng!4v1725308771414!5m2!1sen!2sng"
            width="900"
            height="600"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="mx-1 absolute left-0 right-0 bottom-0 top-44 bg-[#0b3a3297] bg-gradient-to-t from-[#040408] rounded-t-3xl border-t-4 border-white">
            <div className="w-full h-auto mt-6 py-4 pl-3  flex flex-row items-center border-b border-[#8AC5C7]">
              <div className="flex flex-row items-center">
                <img src="/icons/mapimg.svg" alt="" className="w-24 h-16 rounded" />
                <div className="h-auto flex flex-col">
                  <p className="mb-2 text-sm font-Raleway text-white">African Beauty</p>
                  <p className="my-1 font-thin text-xs font-Raleway text-white">
                    by: Rachel Harris
                  </p>
                  <p className="font-thin text-xs font-Raleway text-white">Order No: J5689</p>
                </div>
              </div>

              <div className="ml-6 p-1 border border-orange-900 bg-[#fc70706c] flex items-center rounded-xl cursor-pointer">
                <IoChatbubbleOutline size={30} color="white" />
              </div>

              <div className="ml-auto mr-3 flex flex-row items-center">
                <div className="h-auto flex flex-col">
                  <p className="mb-2 text-xs font-Raleway text-white flex flex-row items-center">
                    <FaClockRotateLeft size={20} color="white" className="mx-2 " />
                    Estimated time : 7 days
                  </p>
                  <p className="mb-2 text-xs font-Raleway text-white flex flex-row items-center">
                    <IoMdLocate size={23} color="white" className="mx-2" />
                    Address : No 10, Brown Str. Sholuyi , Gbagada, Lagos
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-auto m-5 flex flex-row items-center">
              <div className="w-1/2 h-auto  ">
                <p className="text-sm text-[#8AC5C7] my-1">
                  <span className=" text-white"> Dimension ( L x B x H )</span> 70 x 05 x 100
                  cm
                </p>
                <p className="text-sm text-[#8AC5C7]  my-1">1 x African Beauty</p>
                <p className="text-sm text-[#8AC5C7]  my-1">Waybill No : Z4S7-1439</p>
                <p className="text-sm text-[#8AC5C7]  my-1">
                  1 x Physical certificate of authentication
                </p>
                <input
                  type="button"
                  value="Received"
                  className="w-4/5 mt-10 py-2 text-white bg-[#F25B3833] border border-[#F25B38] rounded"
                />
              </div>

              <div className="w-1/2 h-auto">
                <h2 className="text-xs text-white font-Poppins flex flex-row my-2">
                  Cost
                  <p className="ml-auto mr-16 bg-white rounded p-0.5 text-xs text-black">
                    USD
                  </p>
                </h2>
                <h2 className="text-xs text-white font-Poppins flex flex-row my-2">
                  Artwork <p className="ml-auto  mr-16 text-[#F25B38]">$100</p>
                </h2>
                <h2 className="text-xs text-white font-Poppins flex flex-row my-2">
                  Shipping <p className="ml-auto  mr-16 text-[#F25B38]">$100</p>
                </h2>
                <h2 className="text-md text-white font-Poppins flex flex-row my-2">
                  Total
                  <p className="ml-auto mr-16 bg-white rounded p-0.5 text-xs text-black">
                    USD
                  </p>
                </h2>
                <input
                  type="button"
                  value="$100"
                  className="w-4/5 mt-10 py-2 text-white bg-[#073039] border border-[#083843cc] rounded"
                />
                <h2 className=" w-4/5 py-2 text-white text-center text-[10px] ">
                  Thank you from Artsony
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDetail && (
        <div className="w-full  flex flex-row  ">
          <div className="w-1/2 h-auto">
            <h3
              className="py-3 text-customOrange font-Roboto text-sm flex flex-row cursor-pointer"
              onClick={() => setShowDetail(false)}
            >
              <FaMapMarkedAlt size={20} /> <span className="px-3">view map </span>
            </h3>
            <div className="h-auto  w-[300px] flex flex-col bg-white rounded-md border  border-[#fb4b303a]">
              <img src="/images/Rectangle 6.png" alt="" className="w-full h-[160px]" />
              <div className="w-full h-auto p-2 flex flex-row items-center bg-white">
                <img src="/images/lion.jpg" alt="" className="h-10 w-10 rounded-full" />
                <h3 className="px-1 font-Poppins text-black text-sm">Planetary devastation</h3>
              </div>
            </div>

            <div className="mt-10 h-auto p-3  w-[300px] flex flex-col bg-white rounded-md border  border-[#fb4b303a]">
              <h2 className="text-xs text-black font-Poppins flex flex-row my-2">
                Order number
                <p className="ml-auto   bg-white rounded p-0.5 text-xs text-customOrange">
                  35446789
                </p>
              </h2>
              <h2 className="text-xs text-black font-Poppins flex flex-row my-2">
                Cost
                <p className="ml-auto   bg-white rounded p-0.5 text-xs text-black shadow">
                  USD
                </p>
              </h2>
              <h2 className="text-xs text-black font-Poppins flex flex-row my-2">
                Artwork <p className="ml-auto    text-[#F25B38]">$100</p>
              </h2>
              <h2 className="text-xs text-black font-Poppins flex flex-row my-2">
                Shipping <p className="ml-auto    text-[#F25B38]">$100</p>
              </h2>
              <h2 className="text-md text-black font-Poppins flex flex-row my-2">
                Total
                <p className="ml-auto   bg-white rounded p-0.5 text-xs text-black shadow">
                  paid
                </p>
              </h2>
              <input
                type="button"
                value="$100"
                className="w-full mt-5 py-2 text-white bg-[#073039] border border-[#083843cc] rounded"
              />
            </div>
          </div>

          <div className="w-1/2 h-auto">
            <div className="mt-10 h-[500px] p-3  w-[300px] flex flex-col bg-white rounded-md border  border-[#fb4b303a]">
              <div
                className="  ml-auto  w-7 h-7 flex flex-row items-center bg-white hover:bg-gray-200 rounded-md  cursor-pointer"
                ref={modalRef}
                onClick={() => setShowReceiptOptions(true)}
              >
                <span className="text-xl m-auto">:</span>
              </div>
              {showReceiptOptions && (
                <div className="absolute right-16 top-10 py-3 w-[180px] flex flex-col bg-white rounded shadow">
                  <p className="mx-4 py-3 text-sm font-Raleway text-black   hover:text-customOrange  cursor-pointer border-b border-gray-200 ">
                    Share
                  </p>
                  <p className="mx-4 py-3 text-sm font-Raleway text-black    hover:text-customOrange cursor-pointer  border-b border-gray-200 ">
                    Download Receipt
                  </p>
                </div>
              )}

              <h3 className="py-3 text-[#8AC5C7] font-Roboto text-md">Purchase details </h3>

              <h2 className="text-xs text-black font-Poppins flex flex-row my-2">
                Purchase date
                <p className="ml-auto   bg-white rounded p-0.5 text-xs text-customOrange">
                  13, Aug 2022 3:00 pm
                </p>
              </h2>
              <h2 className="text-xs text-black font-Poppins flex flex-row my-2">
                Delivered
                <p className="ml-auto rounded p-0.5 text-xs text-customOrange  ">
                  24, Sep 2022 11:30 am
                </p>
              </h2>
              <h2 className="text-xs text-black font-Poppins flex flex-row my-2">
                Waybill No <p className="ml-auto text-[#F25B38]"> Z4S7-1439</p>
              </h2>

              <h3 className="pt-5 text-[#8AC5C7] font-Roboto text-md"> Package </h3>

              <h2 className="text-xs text-black font-Poppins flex flex-row my-2">
                Dimension ( L x B x H )
                <p className="ml-auto   bg-white rounded p-0.5 text-xs text-customOrange">
                  70 x 05 x 100 cm
                </p>
              </h2>
              <h2 className="text-xs text-black font-Poppins flex flex-row my-2">
                1 x Heart Of A Flower
              </h2>
              <h2 className="text-xs text-black font-Poppins flex flex-row my-2">
                1 x Physical certificate of authentication
              </h2>
            </div>
            <h2 className="  mx-auto text-center text-[9px] text-black font-Poppins flex flex-row my-2">
              Thank you from Artsony
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tracker;
