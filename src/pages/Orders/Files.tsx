import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaRegFile } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

const Files = () => {
  return (
    <div className="mx-auto w-2/3 h-screen flex flex-row ">
      <div className="w-1/2 h-auto">
        <h3 className="py-3 text-black font-Roboto text-sm">Planetary devastation </h3>
        <div className="h-auto  w-[300px] flex flex-col bg-white rounded-md border  border-[#fb4b303a]">
          <img src="/images/Rectangle 6.png" alt="" className="w-full h-[160px]" />
          <div className="w-full h-auto p-2 flex flex-row items-center bg-white">
            <img src="/images/lion.jpg" alt="" className="h-10 w-10 rounded-full" />
            <h3 className="px-1 font-Poppins text-black text-sm">Planetary devastation </h3>
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
            <p className="ml-auto   bg-white rounded p-0.5 text-xs text-black shadow">USD</p>
          </h2>
          <h2 className="text-xs text-black font-Poppins flex flex-row my-2">
            Artwork <p className="ml-auto    text-[#F25B38]">$100</p>
          </h2>
          <h2 className="text-xs text-black font-Poppins flex flex-row my-2">
            Shipping <p className="ml-auto    text-[#F25B38]">$100</p>
          </h2>
          <h2 className="text-md text-black font-Poppins flex flex-row my-2">
            Total
            <p className="ml-auto   bg-white rounded p-0.5 text-xs text-black shadow">paid</p>
          </h2>
          <input
            type="button"
            value="$100"
            className="w-full mt-5 py-2 text-white bg-[#073039] border border-[#083843cc] rounded"
          />
        </div>
      </div>

      <div className="w-1/2 h-auto">
        <div className="mt-10 h-[500px] p-2 px-3 w-[380px] flex flex-col bg-white rounded-md border  border-[#fb4b303a]">
          <div className="w-full h-auto py-3 flex flex-row  ">
            <p className="mx-auto    rounded p-0.5 text-xs text-black">
              Files( <span className=" text-customOrange"> 7</span>)
            </p>
            <p className="mx-auto    rounded p-0.5 text-xs flex flex-row items-center text-black">
              Download All <MdDownload size={25} className="text-customOrange" />
            </p>
            <p className="mx-auto    rounded p-0.5 text-xs flex flex-row items-center text-black">
              <BiDotsVerticalRounded size={20} />
            </p>
          </div>
          {/* files */}
          <div className="w-full h-auto py-3 flex flex-row  items-center">
            <FaRegFile size={22} />
            <h3 className="mx-auto    rounded p-0.5 text-xs text-black fle flex-row items-center">
              File description... (png)
            </h3>
            <p className="mx-auto  rounded p-0.5 text-xs flex flex-row items-center text-gray-500">
              230Mb
            </p>
            <p className="mx-auto    rounded p-0.5 text-xs flex flex-row items-center text-#8AC5C7">
              Download <MdDownload size={20} className="text-gray-700" />
            </p>
          </div>
          <div className="w-full h-auto py-3 flex flex-row  items-center">
            <FaRegFile size={22} />
            <h3 className="mx-auto    rounded p-0.5 text-xs text-black fle flex-row items-center">
              File description... (png)
            </h3>
            <p className="mx-auto  rounded p-0.5 text-xs flex flex-row items-center text-gray-500">
              230Mb
            </p>
            <p className="mx-auto    rounded p-0.5 text-xs flex flex-row items-center text-#8AC5C7">
              Download <MdDownload size={20} className="text-gray-700" />
            </p>
          </div>
          <div className="w-full h-auto py-3 flex flex-row  items-center">
            <FaRegFile size={22} />
            <h3 className="mx-auto p-0.5 text-xs text-black fle flex-row items-center">
              File description... (png)
            </h3>
            <p className="mx-auto p-0.5 text-xs flex flex-row items-center text-gray-500">
              230Mb
            </p>
            <p className="mx-auto p-0.5 text-xs flex flex-row items-center text-#8AC5C7">
              Download <MdDownload size={20} className="text-gray-700" />
            </p>
          </div>

          <div className="w-full py-3 my-4 bg-customOrange hover:bg-orange-900 rounded-md  flex flex-row items-center cursor-pointer">
            <p className="mx-auto text-white   font-Poppins  text-sm  flex flex-row">
              Download All <MdDownload size={20} className="mx-0 text-white" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
