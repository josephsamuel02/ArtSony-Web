/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdClose } from "react-icons/md";
import Select from "react-select";
import { useState } from "react";
import { SellArtworkDraft, SellArtworkStage } from "../../Redux/PostArtwork";
import { useDispatch } from "react-redux";

const StageFive = () => {
  const [artDetail, setArtDetail] = useState<any>({ dimensions: {} });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]); // State to store selected files

  const dispatch = useDispatch();

  const options = [
    { value: "physical", label: "Physical" },
    { value: "digital", label: "Digital" },
    { value: "hybrid", label: "Hybrid" },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files); // Convert FileList to an array
      setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]); // Append new files to the existing state
    }
  };

  const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const updatePost = async () => {
    const convertedFiles = await Promise.all(
      selectedFiles.map((file: any) => convertToBase64(file))
    );
    dispatch(
      SellArtworkDraft({ ...artDetail, certificate_of_authentication: convertedFiles })
    );
  };

  return (
    <div className="w-1/3 h-auto bg-[#02272F] flex flex-col p-4 rounded">
      <h3 className="w-full flex flex-row items-start">
        <MdClose size={24} color="white" className="ml-auto" />
      </h3>
      <h3 className="text-[20px] font-Raleway font-light text-white py-3">
        Certificate of Authentication (Type)
        <span className="text-[#d33d29] text-[13px] font-Poppins px-2">Required</span>
      </h3>
      <div className="w-full h-auto bg-white rounded-md">
        <Select
          options={options}
          onChange={(option) => {
            setArtDetail((prev: any) => ({
              ...prev,
              certificate_of_authentication_type: option?.value, // Extract the values from the selected options
            }));
          }}
        />
      </div>
      <h3 className="text-[20px] font-Raleway text-white  pt-3 ">Physical</h3>
      <p className="text-[#8AC5C7] text-[11px] font-Poppins px-1">
        This means a/an Original physical copy of the Certificate of Authentication will be
        included in the delivery package.
      </p>

      <h3 className="text-[20px] font-Raleway text-white mt-6">Digital</h3>
      <p className="text-[#8AC5C7] text-[11px] font-Poppins px-1">
        Certificate of Authentication should be clear and Legible
      </p>
      <div className="w-full h-auto mt-3 rounded-md">
        <input
          type="file"
          //multiple
          onChange={(e) => handleFileChange(e)}
          className="text-sm text-customOrange file:mr-5 file:py-2 file:px-4 file:rounded file:border-[1.5px] file:border-customOrange file:text-xs file:font-Poppins file:bg-[#f25a384b] file:text-white file:cursor-pointer hover:file:bg-[#f25a3881]"
        />
      </div>

      <h3 className="text-[20px] font-Raleway font-light text-white mt-6 py-3">
        Dimension
        <span className="text-[#d33d29] text-[13px] font-Poppins px-2">Optional</span>
      </h3>
      <div className="w-full h-auto items-center flex flex-row">
        <div className="mx-auto w-1/5 h-auto  ">
          <p className="text-[#ffffff] text-[15px] text-center font-Poppins font-light py-0.5">
            Width
          </p>
          <input
            type="number"
            placeholder="00:00"
            onChange={(e) =>
              setArtDetail((prev: any) => ({
                ...prev,
                dimensions: { ...prev.dimensions, width: e.target.value },
              }))
            }
            className="w-full p-2 placeholder-blue-gray-500 text-center bg-white font-Raleway rounded outline-none"
          />
        </div>
        <div className="mx-auto w-1/5 h-auto  ">
          <p className="text-[#ffffff] text-[15px] text-center font-Poppins font-light py-0.5">
            Breadth
          </p>
          <input
            type="number"
            placeholder="00:00"
            onChange={(e) =>
              setArtDetail((prev: any) => ({
                ...prev,
                dimensions: { ...prev.dimensions, breadth: e.target.value },
              }))
            }
            className="w-full p-2 placeholder-blue-gray-500 text-center bg-white font-Raleway rounded outline-none"
          />
        </div>
        <div className="mx-auto w-1/5 h-auto  ">
          <p className="text-[#ffffff] text-[15px] text-center font-Poppins font-light py-0.5">
            Height
          </p>
          <input
            type="number"
            placeholder="00:00"
            onChange={(e) =>
              setArtDetail((prev: any) => ({
                ...prev,
                dimensions: { ...prev.dimensions, height: e.target.value },
              }))
            }
            className="w-full p-2 placeholder-blue-gray-500 text-center bg-white font-Raleway rounded outline-none"
          />
        </div>
      </div>

      <div className="w-full h-auto mt-6 mb-4 rounded-md flex">
        <input
          type="button"
          value="Save as Draft"
          className="mx-1 w-1/3 py-3 text-[13px] font-poppins text-white bg-[#8AC5C733] hover:bg-[#20424481] rounded cursor-pointer"
        />
        <input
          type="button"
          value="Back"
          onClick={() => dispatch(SellArtworkStage("stageFour"))}
          className="mx-1 w-1/3 py-3 text-[16px] font-poppins text-white bg-[#d8450b50] hover:bg-[#be4621b6] border border-customOrange rounded cursor-pointer"
        />
        <input
          type="button"
          value="Next"
          onClick={() => {
            updatePost();
            dispatch(SellArtworkStage("stageSix"));
          }}
          className="mx-1 w-1/3 py-3 text-[16px] font-poppins text-white  bg-customOrange hover:bg-[#be4621] rounded cursor-pointer"
        />
      </div>
    </div>
  );
};

export default StageFive;
