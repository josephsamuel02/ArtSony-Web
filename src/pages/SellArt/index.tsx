/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdAdd, MdArrowCircleDown, MdArrowCircleUp, MdDelete, MdEdit } from "react-icons/md";
import { useEffect, useRef } from "react";

import Nav from "../../components/Nav";
import { useState } from "react";
import StageTwo from "./StageTwo";
import StageThree from "./StageThree";
import StageOne from "./StageOne";
import StageFour from "./StageFour";
import StageFive from "./StageFive";
import StageSix from "./StageSix";
import StageSeven from "./StageSeven";
import { SellArtworkDraft } from "../../Redux/PostArtwork";
import { useDispatch, useSelector } from "react-redux";

const SellArtwork = () => {
  const [addHint, setAddHint] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]); // State to store selected files
  const dispatch = useDispatch();
  const uploadStage = useSelector((state: any) => state.PostArtwork.sell_artwork_stage);
  const [uploadState, setUploadState] = useState(uploadStage);
  // Create a ref for the hidden file input element
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleAddFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      console.error("File input ref is null");
    }
  };

  // Function to handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files); // Convert FileList to an array
      setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]); // Append new files to the existing state
    }
  };

  const deleteArt = (i: number) => {
    const newArray = selectedFiles.filter((_item, index) => {
      return index !== i;
    });

    setSelectedFiles(newArray);
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
      selectedFiles.map((file) => convertToBase64(file))
    );
    dispatch(SellArtworkDraft({ images: convertedFiles }));
  };

  useEffect(() => {
    updatePost();
    setUploadState(uploadStage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadStage, selectedFiles, deleteArt]);

  return (
    <div className="w-full h-auto bg-white mt-20">
      <Nav />
      <div className="w-full h-auto flex flex-row">
        <div className="w-2/3 h-auto px-6">
          <input
            type="file"
            multiple
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => handleFileChange(e)}
          />
          {selectedFiles.length === 0 && (
            <div className="w-full h-[498px] relative flex flex-col items-center rounded-md border-2 border-[#fc7d6185] ">
              <img
                src="/images/upload bg art.svg"
                alt="bg background"
                className="absolute right-0 top-0 ml-auto w-56 h-56"
              />

              <div className=" mt-auto mx-auto w-auto h-auto flex flex-row items-center justify-center justify-items-center ">
                <div
                  className="mx-2 w-auto h-auto flex flex-col justify-center cursor-pointer"
                  onClick={() => handleAddFile()}
                >
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
                  <p className="font-Poppins text-[12px] text-center text-black">Embed</p>
                </div>
                <div className="mx-2 w-auto h-auto flex flex-col justify-center cursor-pointer">
                  <img
                    src="/images/iconp.svg"
                    alt="icon"
                    className="w-[65px] h-[65px] mx-auto"
                  />
                  <p className="font-Poppins text-[12px] text-center text-black">
                    Video/Audio
                  </p>
                </div>
                <div className="mx-2 w-auto h-auto flex flex-col justify-center cursor-pointer">
                  <img
                    src="/images/icomt.svg"
                    alt="icon"
                    className="w-[65px] h-[65px] mx-auto"
                  />
                  <p className="font-Poppins text-[12px] text-center text-black">Text</p>
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
          )}

          {selectedFiles.length > 0 && (
            <div className="w-full h-screen flex flex-col justify-center   overflow-y-scroll">
              <div className=" pb-0 h-full">
                {selectedFiles.map((file, index) => (
                  <div className=" relative  h-auto" key={index}>
                    <img
                      key={index}
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className=" relative h-auto w-full mb-6 object-cover rounded"
                      id={`image-${index}`}
                    />

                    <div className="absolute left-5 top-5 h-auto w-auto flex flex-col p-2 rounded-md bg-[#4948485d]">
                      <h3 className="my-auto py-1.5 cursor-pointer">
                        <MdEdit size={24} className="text-white hover:text-customOrange" />
                      </h3>
                      <h3
                        className="my-auto py-1.5 cursor-pointer"
                        onClick={() => deleteArt(index)}
                      >
                        <MdDelete size={24} className="text-white hover:text-customOrange " />
                      </h3>
                      <h3
                        onClick={() => {
                          const prevImage = document.getElementById(`image-${index - 1}`);
                          if (prevImage) {
                            prevImage.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }}
                        className="my-auto py-1.5 cursor-pointer"
                      >
                        <MdArrowCircleUp
                          size={24}
                          className="text-white hover:text-customOrange "
                        />
                      </h3>
                      <h3
                        onClick={() => {
                          const nextImage = document.getElementById(`image-${index + 1}`);
                          if (nextImage) {
                            nextImage.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }}
                        className="my-auto py-1.5 cursor-pointer"
                      >
                        <MdArrowCircleDown
                          size={24}
                          className="text-white hover:text-customOrange "
                        />
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedFiles.length > 0 && (
            <div
              className="relative mx-auto my-4 w-16 h-16 p-1 flex items-center bg-customOrange hover:bg-[#be4621] rounded-full cursor-pointer"
              onMouseOver={() => setAddHint(true)}
              onMouseLeave={() => setAddHint(false)}
              onClick={() => handleAddFile()}
            >
              <MdAdd size={36} color="white" className="m-auto" />
              {addHint && (
                <h3 className="absolute bottom-16 left-0 right-0 w-[136px] mx-auto font-Poppins text-xs text-center text-white px-2 py-2 bg-blue-gray-800 rounded">
                  Add more media
                </h3>
              )}
            </div>
          )}
        </div>

        {uploadState == "stageOne" && <StageOne />}
        {uploadState == "stageTwo" && <StageTwo />}
        {uploadState == "stageThree" && <StageThree />}
        {uploadState == "stageFour" && <StageFour />}
        {uploadState == "stageFive" && <StageFive />}
        {uploadState == "stageSix" && <StageSix />}
        {uploadState == "stageSeven" && <StageSeven />}
      </div>
    </div>
  );
};

export default SellArtwork;
