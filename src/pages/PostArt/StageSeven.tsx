import { MdClose } from "react-icons/md";
import "react-tooltip/dist/react-tooltip.css";

interface compState {
  setUploadState: (item: string) => void;
}
const StageSeven = ({ setUploadState }: compState) => {
  return (
    <div className="w-1/3 h-auto bg-[#02272F] flex flex-col p-4 rounded">
      <h3 className="w-full flex flex-row items-start">
        <MdClose size={24} color="white" className="ml-auto" />
      </h3>
      <h3 className="text-[20px] font-Raleway font-light text-white  py-3">Files</h3>
      <span className="text-[#8AC5C7] text-[13px] font-Poppins px-1 py-0.5">
        For all Digital Artworks, all files relating to the creation of the Art piece must be
        Uploaded. You may also add any additional Videos ,Document etc. as you see fit.
      </span>

      <h3 className="text-[20px] font-Raleway font-light text-white mt-6 py-3">Add File</h3>
      <span className="text-[#8AC5C7] text-[13px] font-Poppins px-1 py-0.5">
        Supported file formats : pdf, svg, png, jpeg, figma ,Adobe XD
      </span>

      <div className="w-full h-auto   my-4 flex flex-col">
        <input
          type="file"
          className="my-2 text-sm text-customOrange file:mr-5 file:py-2 file:px-4 file:rounded file:border-[1.5px] file:border-customOrange file:text-xs file:font-Poppins file:bg-[#f25a384b] file:text-white file:cursor-pointer hover:file:bg-[#f25a3881]"
        />
        <input
          type="file"
          className="my-2 text-sm text-customOrange file:mr-5 file:py-2 file:px-4 file:rounded file:border-[1.5px] file:border-customOrange file:text-xs file:font-Poppins file:bg-[#f25a384b] file:text-white file:cursor-pointer hover:file:bg-[#f25a3881]"
        />
        <input
          type="file"
          className="my-2 text-sm text-customOrange file:mr-5 file:py-2 file:px-4 file:rounded file:border-[1.5px] file:border-customOrange file:text-xs file:font-Poppins file:bg-[#f25a384b] file:text-white file:cursor-pointer hover:file:bg-[#f25a3881]"
        />
      </div>

      <div className="w-full h-auto my-10 py-3 bg-white hover:bg-[#f5ffffcc] rounded cursor-pointer ">
        <p className="text-[15px] font-Raleway text-[#02272F] text-center">+ Add new file </p>
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
          onClick={() => setUploadState("stageSix")}
          className="mx-1 w-1/3 py-3 text-[16px] font-poppins text-white bg-[#d8450b50] hover:bg-[#be4621b6] border border-customOrange rounded cursor-pointer"
        />
        <input
          type="button"
          value="Next"
          onClick={() => setUploadState("stageEight")}
          className="mx-1 w-1/3 py-3 text-[16px] font-poppins text-white  bg-customOrange hover:bg-[#be4621] rounded cursor-pointer"
        />
      </div>
    </div>
  );
};

export default StageSeven;
