/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdClose } from "react-icons/md";
import Select from "react-select";
import { useState } from "react";
import { SellArtworkDraft, SellArtworkStage } from "../../Redux/PostArtwork";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const StageFive = () => {
  const stateArtData = useSelector((state: any) => state.PostArtwork.sell_artwork_draft);

  const dispatch = useDispatch();
  const Dimension = useSelector(
    (state: any) => state.PostArtwork.sell_artwork_draft.dimensions
  );

  const [artDetail, setArtDetail] = useState<any>({
    dimensions: { length: "", breath: "", height: "" },
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]); // State to store selected files

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

  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const uploadImage = async (): Promise<void> => {
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("file", selectedFiles[i]);
      formData.append("upload_preset", "my_upload_preset");
      formData.append("cloud_name", "promotion-army");
      await axios
        .post(import.meta.env.VITE_CLOUDINARY_BASE_URL, formData)

        .then((response) => {
          setImageUrls((prev: any) => [...prev, response.data.secure_url]);
        })
        .catch((err) => console.log(err));
    }
  };

  const updatePost = async () => {
    await uploadImage();
    await dispatch(
      SellArtworkDraft({ ...artDetail, certificate_of_authentication: imageUrls })
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
          defaultInputValue={stateArtData.certificate_of_authentication_type}
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
            defaultValue={Dimension ? Dimension.length : ""}
            onChange={(e) =>
              setArtDetail((prev: any) => ({
                ...prev,
                dimensions: { ...prev.dimensions, length: e.target.value },
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
            defaultValue={Dimension ? Dimension.breadth : ""}
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
            defaultValue={Dimension ? Dimension.height : ""}
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

      <div className="w-full h-auto mt-6 mb-0 rounded-md flex">
        {/* <input
          type="button"
          value="Save as Draft"
          className="mx-1 w-1/3 py-3 text-[13px] font-poppins text-white bg-[#8AC5C733] hover:bg-[#20424481] rounded cursor-pointer"
        /> */}
        <input
          type="button"
          value="Back"
          onClick={() => dispatch(SellArtworkStage("stageFour"))}
          className="mx-1 w-1/2 py-3 text-[16px] font-poppins text-white bg-[#d8450b50] hover:bg-[#be4621b6] border border-customOrange rounded cursor-pointer"
        />
        <input
          type="button"
          value="Next"
          onClick={() => {
            updatePost();
            dispatch(SellArtworkStage("stageSix"));
          }}
          className="mx-1 w-1/2 py-3 text-[16px] font-poppins text-white  bg-customOrange hover:bg-[#be4621] rounded cursor-pointer"
        />
      </div>
    </div>
  );
};

export default StageFive;
