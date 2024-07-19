import { MdAdd, MdArrowCircleDown, MdArrowCircleUp, MdDelete, MdEdit } from "react-icons/md";
import Nav from "../../components/Nav";
import { useState } from "react";
import StageTwo from "./StageTwo";
import StageThree from "./StageThree";
import StageOne from "./StageOne";
import StageFour from "./StageFour";
import StageFive from "./StageFive";
import StageSix from "./StageSix";
import StageSeven from "./StageSeven";

const PostArt = () => {
  const [addHint, setAddHint] = useState(false);
  const [uploadState, setUploadState] = useState("stageOne");
  return (
    <div className="w-full h-auto bg-white mt-20">
      <Nav />
      <div className="w-full h-auto flex flex-row">
        <div className="w-2/3 h-auto px-6">
          <div className="w-full h-[498px] relative flex flex-col items-center rounded-md border-2 border-[#fc7d6185] ">
            <img
              src="/images/upload bg art.svg"
              alt="bg background"
              className="absolute right-0 top-0 ml-auto w-56 h-56"
            />

            <div className="absolute left-5 top-5 h-auto w-auto flex flex-col p-2 rounded-md bg-[#4948485d]">
              <h3 className="my-auto py-1.5 cursor-pointer">
                <MdEdit size={24} color="white" />
              </h3>
              <h3 className="my-auto py-1.5 cursor-pointer">
                <MdDelete size={24} color="white" />
              </h3>
              <h3 className="my-auto py-1.5 cursor-pointer">
                <MdArrowCircleUp size={24} color="white" />
              </h3>
              <h3 className="my-auto py-1.5 cursor-pointer">
                <MdArrowCircleDown size={24} color="white" />
              </h3>
            </div>
            <div className=" mt-auto mx-auto w-auto h-auto flex flex-row items-center justify-center justify-items-center ">
              <div className="mx-2 w-auto h-auto flex flex-col justify-center cursor-pointer">
                <img
                  src="/images/icon1471.svg"
                  alt="icon"
                  className="w-[65px] h-[65px] mx-auto"
                />
                <p className="font-Poppins text-[12px] text-center text-black">Image</p>
              </div>
              <div className="mx-2 w-auto h-auto flex flex-col justify-center cursor-pointer">
                <img
                  src="/images/icon m  .svg"
                  alt="icon"
                  className="w-[65px] h-[65px] mx-auto"
                />
                <p className="font-Poppins text-[12px] text-center text-black">Multi-Shot</p>
              </div>
              <div className="mx-2 w-auto h-auto flex flex-col justify-center cursor-pointer">
                <img
                  src="/images/iconp.svg"
                  alt="icon"
                  className="w-[65px] h-[65px] mx-auto"
                />
                <p className="font-Poppins text-[12px] text-center text-black">Video/Audio</p>
              </div>
              <div className="mx-2 w-auto h-auto flex flex-col justify-center cursor-pointer">
                <img
                  src="/images/icomt.svg"
                  alt="icon"
                  className="w-[65px] h-[65px] mx-auto"
                />
                <p className="font-Poppins text-[12px] text-center text-black">Image</p>
              </div>
              <div className="mx-2 w-auto h-auto flex flex-col justify-center cursor-pointer">
                <img
                  src="/images/iconb.svg"
                  alt="icon"
                  className="w-[65px] h-[65px] mx-auto"
                />
                <p className="font-Poppins text-[12px] text-center text-black">3D</p>
              </div>
            </div>
            <div className="mx-auto mb-auto mt-8 w-full h-auto flex flex-col">
              <p className="text-[#A19D9D] py-2 text-center font-Poppins text-[16px]">
                Only High resolution images ( png, jpg, gif) will be accepted
              </p>
              <p className="text-[#A19D9D] py-2  text-center font-Poppins text-[16px]">
                size :1600 x 1200 or higher is recommended
              </p>
              <p className="text-[#A19D9D] py-2  text-center font-Poppins text-[16px]">
                High video quality of 720p and above is recommended
              </p>
            </div>

            <img
              src="/images/post bg art 2.svg"
              alt="bg background"
              className="absolute left-0 bottom-0 mr-auto w-56 h-56"
            />
          </div>
          <h3
            className="relative mx-auto my-4 w-16 h-16 p-1 flex items-center bg-customOrange hover:bg-[#be4621] rounded-full cursor-pointer"
            onMouseOver={() => setAddHint(true)}
            onMouseLeave={() => setAddHint(false)}
          >
            <MdAdd size={36} color="white" className="m-auto" />
            {addHint && (
              <h3 className="absolute bottom-16 left-0 right--10 w-[136px] mx-auto font-Poppins text-sm text-white px-2 bg-blue-gray-600 rounded">
                Add another media
              </h3>
            )}
          </h3>
        </div>
        {uploadState == "stageOne" && <StageOne setUploadState={setUploadState} />}
        {uploadState == "stageTwo" && <StageTwo setUploadState={setUploadState} />}
        {uploadState == "stageThree" && <StageThree setUploadState={setUploadState} />}
        {uploadState == "stageFour" && <StageFour setUploadState={setUploadState} />}
        {uploadState == "stageFive" && <StageFive setUploadState={setUploadState} />}
        {uploadState == "stageSix" && <StageSix setUploadState={setUploadState} />}
        {uploadState == "stageSeven" && <StageSeven setUploadState={setUploadState} />}
      </div>
    </div>
  );
};

export default PostArt;
