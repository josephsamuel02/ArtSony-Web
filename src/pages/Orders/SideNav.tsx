import { MdSearch } from "react-icons/md";

interface compState {
  orderType: string;
  setOrderType: (item: string) => void;
}

const SideNav = ({ orderType, setOrderType }: compState) => {
  return (
    <div className="w-1/3 h-full flex flex-col bg-whit px-8  bg-white">
      <div className="mx-auto w-full h-full border px-3 pl-5 items-center flex flex-row border-customOrange  rounded-md">
        <MdSearch color="#f25b38" size={25} />
        <input
          type="text"
          placeholder="Search..."
          className="w-4/5 h-auto bg-transparent text-sm font-light text-black font-Poppins p-2 outline-none focus:outline-none"
        />
      </div>

      <div className=" my-4 mt-6 w-full h-full flex flex-row  ">
        <input
          type="button"
          value="Physical"
          onClick={() => setOrderType("physical")}
          className={`w-[44%] h-auto  rounded text-sm font-light  font-Poppins p-2 border outline-none focus:outline-none cursor-pointer ${
            orderType == "physical" ? "bg-[#02272F] text-white" : " bg-white   border-gray-400"
          }`}
        />
        <input
          type="button"
          value="Digital"
          onClick={() => setOrderType("digital")}
          className={`w-[44%] ml-auto h-auto  rounded text-sm font-light font-Poppins p-2 border focus:outline-none cursor-pointer ${
            orderType == "digital" ? "bg-[#02272F] text-white" : "bg-white border-gray-400"
          }`}
        />
      </div>

      {orderType == "physical" && (
        <div className="w-full h-screen pb-60 overflow-y-scroll flex flex-col ">
          <div className="w-full h-auto p-3 my-1 bg-white rounded shadow-lg">
            <div className="w-full h-auto flex flex-row items-center">
              <p className="mx-auto text-gray-700 text-[11px]">Order No: A2450</p>
              <p className="mx-auto text-gray-700 text-[11px]">23, Sept 2022. 4:30pm</p>
              <p className="mx-auto text-gray-700 text-[11px]">
                Status :
                <span className="text-customOrange">
                  <span className="text-customOrange"> In progress</span>
                </span>
              </p>
            </div>

            <div className="w-full h-auto flex flex-row items-center">
              <img src="/icons/cube icon.svg" alt="" className="w-9 h-9 my-2 " />
              <p className="mx-4 text-gray-700 text-[14px]">African Beauty</p>
            </div>
            <input type="range" name="" min="10" max="100" className="  bg-transparent" />
            <p className="my-2 text-gray-700 text-[12px]">
              Time estimate : <span className="text-customOrange">3</span> days
            </p>
          </div>
          <div className="w-full h-auto p-3 my-1 bg-white rounded shadow-lg">
            <div className="w-full h-auto flex flex-row items-center">
              <p className="mx-auto text-gray-700 text-[11px]">Order No: A2450</p>
              <p className="mx-auto text-gray-700 text-[11px]">23, Sept 2022. 4:30pm</p>
              <p className="mx-auto text-gray-700 text-[11px]">
                Status :
                <span className="text-customOrange">
                  <span className="text-customOrange"> In progress</span>
                </span>
              </p>
            </div>

            <div className="w-full h-auto flex flex-row items-center">
              <img src="/icons/cube icon.svg" alt="" className="w-9 h-9 my-2 " />
              <p className="mx-4 text-gray-700 text-[14px]">African Beauty</p>
            </div>
            <input type="range" name="" min="10" max="100" className="  bg-transparent" />
            <p className="my-2 text-gray-700 text-[12px]">
              Time estimate : <span className="text-customOrange">3</span> days
            </p>
          </div>
          <div className="w-full h-auto p-3 my-1 bg-white rounded shadow-lg">
            <div className="w-full h-auto flex flex-row items-center">
              <p className="mx-auto text-gray-700 text-[11px]">Order No: A2450</p>
              <p className="mx-auto text-gray-700 text-[11px]">23, Sept 2022. 4:30pm</p>
              <p className="mx-auto text-gray-700 text-[11px]">
                Status :
                <span className="text-customOrange">
                  <span className="text-customOrange"> In progress</span>
                </span>
              </p>
            </div>

            <div className="w-full h-auto flex flex-row items-center">
              <img src="/icons/cube icon.svg" alt="" className="w-9 h-9 my-2 " />
              <p className="mx-4 text-gray-700 text-[14px]">African Beauty</p>
            </div>
            <input type="range" name="" min="10" max="100" className="  bg-transparent" />
            <p className="my-2 text-gray-700 text-[12px]">
              Time estimate : <span className="text-customOrange">3</span> days
            </p>
          </div>
          <div className="w-full h-auto p-3 my-1 bg-white rounded shadow-lg">
            <div className="w-full h-auto flex flex-row items-center">
              <p className="mx-auto text-gray-700 text-[11px]">Order No: A2450</p>
              <p className="mx-auto text-gray-700 text-[11px]">23, Sept 2022. 4:30pm</p>
              <p className="mx-auto text-gray-700 text-[11px]">
                Status :
                <span className="text-customOrange">
                  <span className="text-customOrange"> In progress</span>
                </span>
              </p>
            </div>

            <div className="w-full h-auto flex flex-row items-center">
              <img src="/icons/cube icon.svg" alt="" className="w-9 h-9 my-2 " />
              <p className="mx-4 text-gray-700 text-[14px]">African Beauty</p>
            </div>
            <input type="range" name="" min="10" max="100" className="  bg-transparent" />
            <p className="my-2 text-gray-700 text-[12px]">
              Time estimate : <span className="text-customOrange">3</span> days
            </p>
          </div>
          <div className="w-full h-auto p-3 my-1 bg-white rounded shadow-lg">
            <div className="w-full h-auto flex flex-row items-center">
              <p className="mx-auto text-gray-700 text-[11px]">Order No: A2450</p>
              <p className="mx-auto text-gray-700 text-[11px]">23, Sept 2022. 4:30pm</p>
              <p className="mx-auto text-gray-700 text-[11px]">
                Status :
                <span className="text-customOrange">
                  <span className="text-customOrange"> In progress</span>
                </span>
              </p>
            </div>

            <div className="w-full h-auto flex flex-row items-center">
              <img src="/icons/cube icon.svg" alt="" className="w-9 h-9 my-2 " />
              <p className="mx-4 text-gray-700 text-[14px]">African Beauty</p>
            </div>
            <input type="range" name="" min="10" max="100" className="  bg-transparent" />
            <p className="my-2 text-gray-700 text-[12px]">
              Time estimate : <span className="text-customOrange">3</span> days
            </p>
          </div>
        </div>
      )}

      {orderType == "digital" && (
        <div className="w-full h-screen pb-60 overflow-y-scroll flex flex-col ">
          <div className="w-full h-auto p-3 my-1 bg-white rounded shadow-lg">
            <div className="w-full h-auto flex flex-row items-center">
              <p className="mx-auto text-gray-700 text-[11px]">Order No: A2450</p>
            </div>

            <div className="w-full h-auto flex flex-row items-center">
              <img src="/icons/cube icon.svg" alt="" className="w-9 h-9 my-2 " />
              <p className="mx-2 text-gray-700 text-[14px]">African Beauty</p>
              <p className="ml-auto text-gray-700 text-[12px]">
                File: <span className="text-customOrange">7</span>
              </p>
            </div>

            <p className="mx-auto mt-2 text-gray-700 text-[11px]">23, Sept 2022. 4:30pm</p>
          </div>
          <div className="w-full h-auto p-3 my-1 bg-white rounded shadow-lg">
            <div className="w-full h-auto flex flex-row items-center">
              <p className="mx-auto text-gray-700 text-[11px]">Order No: A2450</p>
            </div>

            <div className="w-full h-auto flex flex-row items-center">
              <img src="/icons/cube icon.svg" alt="" className="w-9 h-9 my-2 " />
              <p className="mx-2 text-gray-700 text-[14px]">African Beauty</p>
              <p className="ml-auto text-gray-700 text-[12px]">
                File: <span className="text-customOrange">7</span>
              </p>
            </div>

            <p className="mx-auto mt-2 text-gray-700 text-[11px]">23, Sept 2022. 4:30pm</p>
          </div>
          <div className="w-full h-auto p-3 my-1 bg-white rounded shadow-lg">
            <div className="w-full h-auto flex flex-row items-center">
              <p className="mx-auto text-gray-700 text-[11px]">Order No: A2450</p>
            </div>

            <div className="w-full h-auto flex flex-row items-center">
              <img src="/icons/cube icon.svg" alt="" className="w-9 h-9 my-2 " />
              <p className="mx-2 text-gray-700 text-[14px]">African Beauty</p>
              <p className="ml-auto text-gray-700 text-[12px]">
                File: <span className="text-customOrange">7</span>
              </p>
            </div>

            <p className="mx-auto mt-2 text-gray-700 text-[11px]">23, Sept 2022. 4:30pm</p>
          </div>
          <div className="w-full h-auto p-3 my-1 bg-white rounded shadow-lg">
            <div className="w-full h-auto flex flex-row items-center">
              <p className="mx-auto text-gray-700 text-[11px]">Order No: A2450</p>
            </div>

            <div className="w-full h-auto flex flex-row items-center">
              <img src="/icons/cube icon.svg" alt="" className="w-9 h-9 my-2 " />
              <p className="mx-2 text-gray-700 text-[14px]">African Beauty</p>
              <p className="ml-auto text-gray-700 text-[12px]">
                File: <span className="text-customOrange">7</span>
              </p>
            </div>

            <p className="mx-auto mt-2 text-gray-700 text-[11px]">23, Sept 2022. 4:30pm</p>
          </div>
          <div className="w-full h-auto p-3 my-1 bg-white rounded shadow-lg">
            <div className="w-full h-auto flex flex-row items-center">
              <p className="mx-auto text-gray-700 text-[11px]">Order No: A2450</p>
            </div>

            <div className="w-full h-auto flex flex-row items-center">
              <img src="/icons/cube icon.svg" alt="" className="w-9 h-9 my-2 " />
              <p className="mx-2 text-gray-700 text-[14px]">African Beauty</p>
              <p className="ml-auto text-gray-700 text-[12px]">
                File: <span className="text-customOrange">7</span>
              </p>
            </div>

            <p className="mx-auto mt-2 text-gray-700 text-[11px]">23, Sept 2022. 4:30pm</p>
          </div>
          <div className="w-full h-auto p-3 my-1 bg-white rounded shadow-lg">
            <div className="w-full h-auto flex flex-row items-center">
              <p className="mx-auto text-gray-700 text-[11px]">Order No: A2450</p>
            </div>

            <div className="w-full h-auto flex flex-row items-center">
              <img src="/icons/cube icon.svg" alt="" className="w-9 h-9 my-2 " />
              <p className="mx-2 text-gray-700 text-[14px]">African Beauty</p>
              <p className="ml-auto text-gray-700 text-[12px]">
                File: <span className="text-customOrange">7</span>
              </p>
            </div>

            <p className="mx-auto mt-2 text-gray-700 text-[11px]">23, Sept 2022. 4:30pm</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNav;
