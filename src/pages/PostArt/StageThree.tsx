import { MdClose } from "react-icons/md";

interface compState {
  setUploadState: (item: string) => void;
}
const StageThree = ({ setUploadState }: compState) => {
  return (
    <div className="w-1/3 h-auto bg-[#02272F] flex flex-col p-4 rounded">
      <h3 className="w-full flex flex-row items-start">
        <MdClose size={24} color="white" className="ml-auto" />
      </h3>
      <h3 className="text-[20px] font-Raleway font-light text-white py-3">Add Co-Owners</h3>
      <div className="w-full h-auto flex flex-col">
        <div className="w-full h-auto my-2 flex flex-row items-center">
          <img
            src="/images/Ellipse 10.svg"
            alt="profile_image"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="px-2 font-Poppins font-light text-[14px] text-white">
            Profile User Name
          </p>
        </div>
      </div>
      <h3 className="text-[17px] font-Raleway font-light text-white py-3">
        Co-Owners
        <span className="text-[#d33d29] text-[13px] font-Poppins px-2">Optional</span>
      </h3>
      <div className="w-full h-auto flex flex-col">
        <div className="w-full h-auto my-2 flex flex-row items-center">
          <img
            src="/images/Ellipse 10.svg"
            alt="profile_image"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="px-2 font-Poppins font-light text-[14px] text-white">
            Profile User Name
          </p>
          <h3 className="ml-auto px-4 py-2 bg-[#8AC5C733] hover:bg-[#226364cc] text-white text-[14px] font-light font-Poppins rounded cursor-default">
            Remove
          </h3>
        </div>
        <div className="w-full h-auto my-2 flex flex-row items-center">
          <img
            src="/images/Ellipse 10.svg"
            alt="profile_image"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="px-2 font-Poppins font-light text-[14px] text-white">
            Profile User Name
          </p>
          <h3 className="ml-auto px-4 py-2 bg-[#8AC5C733] hover:bg-[#226364cc] text-white text-[14px] font-light font-Poppins rounded cursor-default">
            Remove
          </h3>
        </div>
      </div>
      <div className="w-full h-auto my-4 py-3 bg-[#8AC5C733] hover:bg-[#226364cc] rounded cursor-pointer ">
        <p className="text-[15px] font-Raleway font-light text-white text-center">
          Add team members +
        </p>
      </div>
      <h3 className="text-[20px] font-Raleway text-white py-3">
        Who is this Art done for ?
        <span className="text-[#d33d29] text-[13px] font-Poppins px-2">Optional</span>
      </h3>
      <div className="w-full h-auto bg-white rounded-md">
        <input
          type="text"
          placeholder="Individual, Company , Brand etc."
          className="w-full p-3 placeholder-blue-gray-500 font-Raleway rounded outline-none"
        />
      </div>
      <h3 className="text-[20px] font-Raleway text-white pt-4">
        Application ?
        <span className="text-[#d33d29] text-[13px] font-Poppins px-2">Optional</span>
      </h3>
      <span className="text-[#8AC5C7] text-[11px] font-Poppins px-1 py-0.5">
        You can give credit to people who contributed to creating your Art
      </span>
      <div className="w-full h-auto bg-white rounded-md">
        <input
          type="text"
          placeholder="Art Depo , Companies , Individuals etc"
          className="w-full p-3 placeholder-blue-gray-500 font-Raleway rounded outline-none"
        />
      </div>
      <div className="w-full h-auto mt-8 mb-4 rounded-md flex">
        <input
          type="button"
          value="Save as Draft"
          className="mx-1 w-1/3 py-3 text-[16px] font-poppins text-white bg-[#8AC5C733] hover:bg-[#20424481] rounded cursor-pointer"
        />
        <input
          type="button"
          value="Back"
          onClick={() => setUploadState("stageTwo")}
          className="mx-1 w-1/3 py-3 text-[16px] font-poppins text-white bg-[#d8450b50] hover:bg-[#be4621b6] border border-customOrange rounded cursor-pointer"
        />
        <input
          type="button"
          value="Next"
          onClick={() => setUploadState("stageFour")}
          className="mx-1 w-1/3 py-3 text-[16px] font-poppins text-white  bg-customOrange hover:bg-[#be4621] rounded cursor-pointer"
        />
      </div>
    </div>
  );
};

export default StageThree;
