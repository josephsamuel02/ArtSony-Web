/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "react-tooltip/dist/react-tooltip.css";
import {
  PostArtwork,
  ResetSellDraft,
  SellArtworkDraft,
  SellArtworkStage,
} from "../../Redux/PostArtwork";
import { Loading } from "../../components/Loading";
import { AppDispatch } from "../../Redux/store";
import axios from "axios";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { useNavigate } from "react-router-dom";

interface cmpData {
  uploadImage: () => Promise<void>;
}

const StageSeven = ({ uploadImage }: cmpData) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const userId = useSelector((state: any) => state.Auth.user.user.userId);
  const stateArtData = useSelector((state: any) => state.PostArtwork.sell_artwork_draft);
  const [productionFilesUrls, setProductionFilesUrls] = useState<string[]>([]);
  const [artData, setArtData] = useState<any>(stateArtData);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState("false");

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleAddFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      console.error("File input ref is null");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files); // Convert FileList to an array
      setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]); // Append new files to the existing state
    }
  };
  const deleteFile = (i: number) => {
    const newArray = selectedFiles.filter((_item, index) => {
      return index !== i;
    });

    setSelectedFiles(newArray);
  };

  const uploadProductionFiles = async (): Promise<void> => {
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("file", selectedFiles[i]);
      formData.append("upload_preset", "my_upload_preset");
      formData.append("cloud_name", "promotion-army");
      await axios
        .post(import.meta.env.VITE_CLOUDINARY_BASE_URL, formData)

        .then((response) => {
          setProductionFilesUrls((prev: any) => [...prev, response.data.secure_url]);
        })
        .catch((err) => console.log(err));
    }

    await dispatch(SellArtworkDraft({ production_files: productionFilesUrls }));
  };

  const uploadArtwork = async (draft: string) => {
    setLoading("true");
    try {
      await uploadImage();
      await uploadProductionFiles();
      const action = await dispatch(
        PostArtwork({ ...artData, userId: userId, draft: draft === "draft" ? true : false })
      );

      if (PostArtwork.fulfilled.match(action)) {
        // Handle success
        setLoading("success");
        dispatch(ResetSellDraft());
        navigate(PUBLIC_ROUTES.HOME);
      } else if (PostArtwork.rejected.match(action)) {
        // Handle error
        setLoading("failed");
        console.error("Failed to post artwork:", action.payload);
      }

      setLoading("false");
    } catch (error) {
      setLoading("error");
    }
  };

  useEffect(() => {
    setArtData(stateArtData);
  }, [stateArtData]);
  useEffect(() => {
    dispatch(SellArtworkDraft({ production_files: productionFilesUrls }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productionFilesUrls]);

  return (
    <div className="w-1/3 h-auto bg-[#02272F] flex flex-col p-4 rounded">
      <h3 className="w-full flex flex-row items-start">
        <MdClose size={24} color="white" className="ml-auto" />
      </h3>
      <h3 className="text-[20px] font-Raleway font-light text-white  py-3">
        Additional Files
      </h3>
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
          multiple
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e)}
          className="my-2 mb-5 text-sm text-customOrange file:mr-5 file:py-2 file:px-4 file:rounded file:border-[1.5px] file:border-customOrange file:text-xs file:font-Poppins file:bg-[#f25a384b] file:text-white file:cursor-pointer hover:file:bg-[#f25a3881]"
        />
        {selectedFiles.length !== 0
          ? selectedFiles.map((d, i) => (
              <div key={i} className="my-1 flex flex-row ">
                <p className="  text-sm text-customOrange ">{d.name}</p>
                <span onClick={() => deleteFile(i)} className="ml-auto">
                  <MdClose size={18} color="orangered" />
                </span>
              </div>
            ))
          : ""}
      </div>

      <span className="text-[#a9ddde] text-[10px] font-Poppins px-1 py-1">
        You can select multiple files
      </span>
      <div
        className="w-full h-auto mb-6 py-3 bg-white hover:bg-[#f5ffffcc] rounded cursor-pointer "
        onClick={() => handleAddFile()}
      >
        <p className="text-[15px] font-Raleway text-[#02272F] text-center">+ Add files </p>
      </div>

      <div className="w-full h-auto mt-auto mb-4 rounded-md flex">
        {/* <input
          type="button"
          value="Save as Draft"
          onClick={() => {
            uploadArtwork("draft");
          }}
          className="mx-1 w-1/3 py-3 text-[13px] font-poppins text-white bg-[#8AC5C733] hover:bg-[#20424481] rounded cursor-pointer"
        /> */}
        <input
          type="button"
          value="Back"
          onClick={() => dispatch(SellArtworkStage("stageSix"))}
          className="mx-1 w-1/2 py-3 text-[16px] font-poppins text-white bg-[#d8450b50] hover:bg-[#be4621b6] border border-customOrange rounded cursor-pointer"
        />
        <input
          type="button"
          value="Upload"
          onClick={() => {
            uploadArtwork("not_draft");
          }}
          className="mx-1 w-1/2 py-3 text-[16px] font-poppins text-white  bg-customOrange hover:bg-[#be4621] rounded cursor-pointer"
        />
      </div>
      {loading == "true" ? <Loading /> : null}
    </div>
  );
};

export default StageSeven;
