import { MdClose } from "react-icons/md";
import Select from "react-select";

interface compState {
  setUploadState: (item: string) => void;
}
const StageOne = ({ setUploadState }: compState) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="w-1/3 h-auto bg-[#02272F] flex flex-col p-4 rounded">
      <h3 className="w-full flex flex-row items-start">
        <MdClose size={24} color="white" className="ml-auto" />
      </h3>
      <h3 className="text-[20px] font-Raleway font-light text-white py-3">Name of Art work</h3>
      <div className="w-full h-auto bg-white rounded-md">
        <input
          type="text"
          placeholder="Give your artwork a name."
          className="w-full p-3 placeholder-blue-gray-500 font-Raleway rounded outline-none"
        />
      </div>
      <h3 className="text-[20px] font-Raleway text-white py-3">
        Tags
        <span className="text-[#8AC5C7] text-[13px] font-Poppins px-1">
          ( Add up to 10 Tags , this help users find your Artwork. )
        </span>
      </h3>
      <div className="w-full h-auto bg-white rounded-md">
        <Select options={options} isMulti />
      </div>
      <h3 className="text-[20px] font-Raleway text-white py-3">
        Tools
        <span className="text-[#8AC5C7] text-[13px] font-Poppins px-1">
          ( Add tools like Software, Hardware or Materials you used)
        </span>
      </h3>
      <div className="w-full h-auto bg-white rounded-md">
        <Select options={options} isMulti />
      </div>

      <h3 className="text-[20px] font-Raleway text-white py-3">
        Description
        <span className="text-[#8AC5C7] text-[13px] font-Poppins px-1">
          (Give a brief description of your Artwork)
        </span>
      </h3>
      <div className="w-full h-auto bg-white rounded-md">
        <textarea className="w-full p-3 placeholder-blue-gray-500 font-Raleway rounded  outline-none" />
      </div>
      <span className="text-[#8AC5C7] text-[13px] font-Poppins py-1">
        Maximum of 250 characters
      </span>

      <div className="w-full h-auto mt-8 mb-4 rounded-md flex">
        <input
          type="button"
          value="Save as Draft"
          className="mr-auto w-2/5 py-3 text-[16px] font-poppins text-white bg-[#8AC5C733] hover:bg-[#20424481] rounded cursor-pointer"
        />
        <input
          type="button"
          value="Next"
          onClick={() => setUploadState("stageTwo")}
          className="ml-auto w-2/5 py-3 text-[16px] font-poppins text-white bg-customOrange hover:bg-[#be4621] rounded cursor-pointer"
        />
      </div>
    </div>
  );
};

export default StageOne;
