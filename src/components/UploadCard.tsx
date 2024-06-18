import { useState } from "react";

const UploadCard = () => {
  const [cardSate, setCardState] = useState("upload");

  return (
    <div
      className={`w-full h-full fixed top-0 bottom-0 left-0 right-0 flex items-center   backdrop-brightness-50 backdrop-blur-xs z-50
    ${cardSate == "close" ? "hidden" : "flex"}
    
    `}
    >
      <div className="m-auto relative w-[750px] h-[550px] p-20 bg-white shadow-lg rounded-md z-20">
        <img
          src="/images/x.svg"
          alt=""
          className="absolute  right-10 top-10 mx-auto  w-[40px] h-[40px] cursor-pointer"
          onClick={() => setCardState("close")}
        />

        <img
          src="/images/Group 1706.svg"
          alt=""
          className="absolute top-0 left-0 w-[250px] h-auto "
        />
        {/* {State 1} */}
        {cardSate == "upload" && (
          <div className="w-auto h-auto flex flex-col items-center">
            <h3 className="text-center text-[#333333] text-[40px] font-Raleway pb-8 ">
              Upload
            </h3>
            <div className="w-auto h-auto flex flex-row items-center">
              <div className=" mx-3 p-4  w-[208px] h-[208px] flex flex-col items-center border border-[#d6d3d3] rounded">
                <img
                  src="/images/Group 1471.svg"
                  alt=""
                  className=" mx-auto  w-[95.83px] h-[95.83px]"
                />
                <h3 className="text-center pt-6 text-[#333333] text-[16px] font-Raleway  ">
                  Post New Artwork
                </h3>
              </div>
              <div
                className=" mx-3 p-4  w-[208px] h-[208px]  flex flex-col items-center border  border-[#d6d3d3] rounded"
                onClick={() => setCardState("sell artwork")}
              >
                <img
                  src="/images/Group 1471 (1).svg"
                  alt=""
                  className="  bottom-0 right-mx-auto0 w-[95.83px] h-[95.83px]"
                />
                <h3 className="text-center pt-6 text-[#333333] text-[16px] font-Raleway  ">
                  Sell Artwork
                </h3>
              </div>
            </div>
          </div>
        )}
        {/* State 2 */}

        {cardSate == "sell artwork" && (
          <div className="w-auto h-auto flex flex-col  ">
            <h3 className="text-center text-[#333333] text-[40px] font-Raleway pb-8 ">
              Sell Artwork
            </h3>
            <div className="w-auto h-auto flex flex-row items-center justify-center">
              <div className=" mx-3 p-4  w-[208px] h-[208px] flex flex-col items-center border border-[#d6d3d3] rounded">
                <img
                  src="/images/Group 1471 (2).svg"
                  alt=""
                  className=" mx-auto  w-[95.83px] h-[95.83px]"
                />
                <h3 className="text-center pt-6 text-[#333333] text-[16px] font-Raleway  ">
                  Digital
                </h3>
              </div>
              <div
                className=" mx-3 p-4  w-[208px] h-[208px]  flex flex-col items-center border  border-[#d6d3d3] rounded"
                // onClick={() => setCardState("sell artwork")}
              >
                <img
                  src="/images/Group 1471 (3).svg"
                  alt=""
                  className="  bottom-0 right-mx-auto0 w-[95.83px] h-[95.83px]"
                />
                <h3 className="text-center pt-6 text-[#333333] text-[16px] font-Raleway  ">
                  Physical
                </h3>
              </div>
            </div>

            <div
              className="w-[200px] h-auto px-10 py-2 absolute bottom-12 bg-[#02272F]  flex flex-row items-center shadow-md  rounded-md cursor-pointer"
              onClick={() => setCardState("upload")}
            >
              <img src="/images/arrow_back_ios.svg" alt="" className="h-8 w-auto px-0" />
              <p className=" mx-6 text-white text-[16px] font-Poppins   ">Back</p>
            </div>
          </div>
        )}
        <img
          src="/images/Group 1705.svg"
          alt=""
          className="absolute bottom-0 right-0 w-[250px] h-auto"
        />
      </div>
    </div>
  );
};

export default UploadCard;
