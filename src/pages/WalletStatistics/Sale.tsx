import { useState } from "react";
import { MdArrowUpward } from "react-icons/md";
import { BiLineChart } from "react-icons/bi";
import { LuTag } from "react-icons/lu";

const Sale = () => {
  const [shopSales] = useState([
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
  const [orders] = useState([
    {
      user_name: "Lee Cheng",
      profile_image: "/images/revenue bg.svg",
      email: "email@gmail.com",
      artwork: "/images/revenue bg.svg",
      purchase_date: "jan, 2, 2020",
      price: "20,400",
      delivery_date: "jan, 2, 2020",
      status: "pending",
    },
    {
      user_name: "Lee Cheng",
      profile_image: "/images/revenue bg.svg",
      email: "email@gmail.com",
      artwork: "/images/revenue bg.svg",
      purchase_date: "jan, 2, 2020",
      price: "20,400",
      delivery_date: "jan, 2, 2020",
      status: "active",
    },
    {
      user_name: "Lee Cheng",
      profile_image: "/images/revenue bg.svg",
      email: "email@gmail.com",
      artwork: "/images/revenue bg.svg",
      purchase_date: "jan, 2, 2020",
      price: "20,400",
      delivery_date: "jan, 2, 2020",
      status: "delivered",
    },
    {
      user_name: "Lee Cheng",
      profile_image: "/images/revenue bg.svg",
      email: "email@gmail.com",
      artwork: "/images/revenue bg.svg",
      purchase_date: "jan, 2, 2020",
      price: "20,400",
      delivery_date: "jan, 2, 2020",
      status: "pending",
    },
    {
      user_name: "Lee Cheng",
      profile_image: "/images/revenue bg.svg",
      email: "email@gmail.com",
      artwork: "/images/revenue bg.svg",
      purchase_date: "jan, 2, 2020",
      price: "20,400",
      delivery_date: "jan, 2, 2020",
      status: "active",
    },
    {
      user_name: "Lee Cheng",
      profile_image: "/images/revenue bg.svg",
      email: "email@gmail.com",
      artwork: "/images/revenue bg.svg",
      purchase_date: "jan, 2, 2020",
      price: "20,400",
      delivery_date: "jan, 2, 2020",
      status: "delivered",
    },
  ]);

  return (
    <div className="mx-auto w-full h-auto flex flex-col items-center overflow-y-auto">
      <div className="w-full h-auto flex flex-row ">
        {/* overview */}
        <div className="w-3/5 h-auto px-1 flex flex-col items-center ">
          {/* Revenue and sales */}
          <div className="w-full h-auto my-6 flex flex-row items-center">
            <div className="w-1/2 mx-2 h-[95x] p-1 flex flex-row items-center bg-white shadow hover:shadow-md rounded">
              <h3 className="bg-customOrange p-2 rounded">
                <BiLineChart color="white" size={25} />
              </h3>
              <div className="mx-auto flex-col p-3 items-center">
                <p className="text-gray-500 text-sm">Revenue</p>
                <h3 className="text-black text-base font-bold">1000,0000</h3>
                <p className="text-gray-500 text-xs font-Nunito py-1">
                  March : <span className="text-[#8AC5C7]">50,000</span>
                </p>
              </div>
              <div className="mx-1 flex-col p-3 items-center">
                <p className="text-[#2FBE18] flex flex-row text-xs font-Nunito py-1">
                  Trend <MdArrowUpward />
                </p>
                <p className="text-[#2FBE18] text-xs font-Nunito py-1">+ 50 %</p>
              </div>
            </div>
            <div className="w-1/2 mx-2 h-[95x]  p-1 flex flex-row items-center bg-white shadow hover:shadow-md rounded">
              <h3 className="bg-[#02272F80] p-2 rounded">
                <LuTag color="white" size={25} />
              </h3>
              <div className="mx-auto flex-col p-3 items-center">
                <p className="text-gray-500 text-sm">Sale</p>
                <h3 className="text-black text-base font-bold">6</h3>
                <p className="text-gray-500 text-xs font-Nunito py-1">
                  March : <span className="text-[#8AC5C7]">250</span>
                </p>
              </div>
              <div className="mx-1 flex-col p-3 items-center">
                <p className="text-[#2FBE18] flex flex-row text-xs font-Nunito py-1">
                  Trend <MdArrowUpward />
                </p>
                <p className="text-[#2FBE18] text-xs font-Nunito py-1">+ 33.3 %</p>
              </div>
            </div>
          </div>

          {/* Wallet */}
          <div className="w-full h-[160px] my-6 p-1 flex flex-col items-center bg-revenue-bg rounded">
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
        <div className="w-2/5 p-2  ">
          <div className="w-full h-auto flex flex-col bg-white rounded shadow-xl">
            <h3 className="  text-lg p-3 font-Poppins border-b border-gray-300 text-black font-bold ">
              Top Sales
            </h3>

            <div className="w-full flex-flex-col px-1 ">
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
      <div className="w-full h-auto flex flex-col px-2 ">
        {/* Orders */}
        <div className="w-full h-auto px-2 flex flex-col bg-white shadow-lg rounded-md ">
          <h3 className="my-6 px-4 text-black font-Poppins text-xl">Orders</h3>
          <div className="w-full py-3 flex flex-row items-center border-b border-[#246f7624]">
            <p className="mx-auto text-sm font-Poppins text-[#51aaae]">Customer</p>
            <p className="mx-auto text-sm font-Poppins text-[#51aaae]">Artwork</p>
            <p className="mx-auto text-sm font-Poppins text-[#51aaae]">Purchase Date</p>
            <p className="mx-auto text-sm font-Poppins text-[#51aaae]">Price</p>
            <p className="mx-auto text-sm font-Poppins text-[#51aaae]">Delivery Date</p>
            <p className="mx-auto text-sm font-Poppins text-[#51aaae]">Status</p>
          </div>

          {orders &&
            orders.map((d, i) => (
              <div
                className="w-full py-3 px-1 flex flex-row items-center hover:bg-[#fba7a7d2] border-b border-[#F25B3833]"
                key={i}
              >
                <img
                  src={d.profile_image}
                  alt="profile_image"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <h3 className="flex flex-col pl-1">
                  <span className="font-bold text-sm font-Roboto text-black">
                    {d.user_name}
                  </span>
                  <span className="  text-sm font-Roboto text-[#8F8F8F]">{d.email}</span>
                </h3>
                <p className="mx-auto text-sm font-Raleway text-[#000000]">{d.artwork}</p>
                <p className="mx-auto text-sm font-Raleway text-[#000000]">
                  {d.purchase_date}
                </p>
                <p className="mx-auto text-sm font-bold font-Raleway text-[#000000]">
                  ${d.price}
                </p>
                <p className="mx-auto text-sm font-Raleway text-[#000000]">
                  {d.delivery_date}
                </p>{" "}
                <p className="ml-auto text-sm font-Raleway text-[#000000]">{d.status}</p>
              </div>
            ))}
        </div>
        {/* Chart */}
        <div className="w-full h-auto"></div>
      </div>
    </div>
  );
};

export default Sale;
