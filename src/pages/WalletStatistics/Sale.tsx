import { useState } from "react";
import { MdArrowUpward } from "react-icons/md";

const Sale = () => {
  const [shopSales] = useState([
    {
      image: "/images/artsony analytics banner.svg",
      name: "Cutest Night",
      time: "1hr",
      price: "$ 5,000",
    },
    {
      image: "/images/artsony analytics banner.svg",
      name: "Cutest Night",
      time: "3hr",
      price: "$ 5,000",
    },
    {
      image: "/images/artsony analytics banner.svg",
      name: "Cutest Night",
      time: "4hr",
      price: "$ 5,000",
    },
    {
      image: "/images/artsony analytics banner.svg",
      name: "Cutest Night",
      time: "5hr",
      price: "$ 5,000",
    },
    {
      image: "/images/artsony analytics banner.svg",
      name: "Cutest Night",
      time: "8hr",
      price: "$ 5,000",
    },
    {
      image: "/images/artsony analytics banner.svg",
      name: "Cutest Night",
      time: "4hr",
      price: "$ 5,000",
    },
  ]);

  return (
    <div className="mx-auto w-full h-auto flex flex-col items-center bg-white">
      <div className="w-full h-auto flex flex-row   bg-white">
        {/* overview */}
        <div className="w-3/5 h-auto flex flex-col items-center bg-white">
          {/* Revenue and sales */}
          <div className="w-full h-auto my-6 flex flex-row items-center bg-white">
            <div className="w-1/2 mx-2 h-[95x] flex flex-row items-center bg-white shadow hover:shadow-md rounded">
              <div className="mx-auto flex-col p-3 items-center">
                <p className="text-gray-500 text-sm">Revenue</p>
                <h3 className="text-black text-base font-bold">1000,0000</h3>
              </div>
              <div className="mx-1 flex-col p-3 items-center">
                <p className="text-[#2FBE18] flex flex-row text-xs font-Nunito py-1">
                  Trend <MdArrowUpward />
                </p>
                <p className="text-[#2FBE18] text-xs font-Nunito py-1">+ 50 %</p>
                <p className="text-gray-500 text-xs font-Nunito py-1">Chnge</p>
              </div>
            </div>
            <div className="w-1/2 mx-2 h-[95x] flex flex-row items-center bg-white shadow hover:shadow-md rounded">
              <div className="mx-auto flex-col p-3 items-center">
                <p className="text-gray-500 text-sm">Sale</p>
                <h3 className="text-black text-base font-bold">6</h3>
              </div>
              <div className="mx-1 flex-col p-3 items-center">
                <p className="text-[#2FBE18] flex flex-row text-xs font-Nunito py-1">
                  Trend <MdArrowUpward />
                </p>
                <p className="text-[#2FBE18] text-xs font-Nunito py-1">+ 33.3 %</p>
                <p className="text-gray-500 text-xs font-Nunito py-1">Chnge</p>
              </div>
            </div>
          </div>

          {/* Wallet */}
          <div className="w-full h-[140px] my-6 p-1 flex flex-col items-center bg-revenue-bg rounded">
            <div className="w-full flex flex-col my-auto  p-4  ">
              <h3 className="font-Poppins text-white text-sm ">Total Revenue generated</h3>

              <h3 className=" mx-auto py-4 font-Roboto text-[#ffffff] text-2xl font-bold">
                $600,000,000
              </h3>

              <p className="ml-auto font-Raleway flex flex-col text-[11px] py-1 text-white">
                <span className="text-[#53CF18]"> +50,000</span>
                <span className="text-[#ffffff]"> This month</span>
              </p>
            </div>
          </div>
        </div>

        {/* Shop sales */}
        <div className="w-2/5 px-2  bg-white">
          <div className="w-full h-auto flex flex-col bg-white rounded shadow-xl">
            <h3 className="  text-lg p-3 font-Poppins border-b border-gray-300 text-black font-bold ">
              Top Sales
            </h3>

            <div className="w-full flex-flex-col  ">
              <div className="w-full h-auto py-3 flex flex-row items-center bg-white border-b border-gray-300">
                <p className="mx-2 text-xs font-Poppins text-[#8AC5C7]">Artwork</p>
                <p className="mx-auto text-xs font-Poppins text-[#8AC5C7]">Unit sold</p>
                <p className="mx-2 text-xs font-Poppins text-[#8AC5C7]">Price</p>
              </div>
              {shopSales &&
                shopSales.map((d, i) => (
                  <div
                    className="w-full h-auto py-3 flex flex-row items-center bg-white border-b border-gray-300"
                    key={i}
                  >
                    <img src={d.image} alt="" className="w-12 h-12 object-cover rounded-lg" />
                    <p className="mx-auto text-sm font-Poppins text-black">{d.name}</p>
                    <p className="mx-auto text-xs font-Poppins text-[#8F8F8F]">{d.time}</p>
                    <p className="mx-auto text-md font-Poppins text-[#f25a38]">{d.price}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* bottom area */}
      <div className="w-full h-auto flex flex-row items-center bg-white"></div>
    </div>
  );
};

export default Sale;
