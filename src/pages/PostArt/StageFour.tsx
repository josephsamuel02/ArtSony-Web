import { MdClose, MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from "react-icons/md";
import UserPostDetail from "../../components/PostDetails/UserPostDetail";
import { useState } from "react";

interface compState {
  setUploadState: (item: string) => void;
}
const StageFour = ({ setUploadState }: compState) => {
  const [showPreview, setShowPreview] = useState(false);
  return (
    <div className="w-1/3 h-auto bg-[#02272F] flex flex-col p-4 rounded">
      <h3 className="w-full flex flex-row items-start">
        <MdClose size={24} color="white" className="ml-auto" />
      </h3>
      <div className="relative w-full h-auto flex flex-col rounded">
        <img
          src="/images/Property 1=Variant3.svg"
          alt=""
          className="w-full h-[210px] object-cover rounded"
        />
        <p className="absolute bottom-6 left-0 right-0 text-[15px] font-Raleway font-light text-white text-center">
          Skyline
        </p>
      </div>
      <div className=" my-5 w-full h-auto flex flex-row">
        <p className=" mr-auto text-[15px] font-Raleway font-light text-white text-center">
          Thumbnail
        </p>
        <p className=" mx-auto text-[15px] flex flex-row gap-x-2 font-Raleway font-light text-white text-center">
          <MdOutlineArrowCircleLeft color="white" size={25} onClick={() => alert("okay")} />
          <MdOutlineArrowCircleRight color="white" size={25} />
        </p>
        <p className=" ml-auto text-[15px] font-Raleway font-light text-white text-center"></p>
      </div>
      <div
        className="w-full h-auto my-4 py-3 bg-[#8AC5C733] hover:bg-[#226364cc] rounded cursor-pointer "
        onClick={() => setShowPreview(true)}
      >
        <p className="text-[15px] font-Raleway font-light text-white text-center">Preview</p>
      </div>
      <div className="w-full h-auto mt-auto mb-4 rounded-md flex">
        <input
          type="button"
          value="Save as Draft"
          className="mx-1 w-1/3 py-3 text-[16px] font-poppins text-white bg-[#8AC5C733] hover:bg-[#20424481] rounded cursor-pointer"
        />
        <input
          type="button"
          value="Back"
          onClick={() => setUploadState("stageThree")}
          className="mx-1 w-1/3 py-3 text-[16px] font-poppins text-white bg-[#d8450b50] hover:bg-[#be4621b6] border border-customOrange rounded cursor-pointer"
        />
        <input
          type="button"
          value="Next"
          onClick={() => setUploadState("stageFive")}
          className="mx-1 w-1/3 py-3 text-[16px] font-poppins text-white  bg-customOrange hover:bg-[#be4621] rounded cursor-pointer"
        />
      </div>
      {showPreview && <UserPostDetail setShowPostData={setShowPreview} />}
    </div>
  );
};

export default StageFour;
