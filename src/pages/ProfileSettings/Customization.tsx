/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { UpdateUserProfile, GetMyProfile } from "../../Redux/User";
import axios from "axios";
import { Loading } from "../../components/Loading";

interface compData {
  userInfo: any;
}

const Customization = ({ userInfo }: compData) => {
  const dispatch = useDispatch<AppDispatch>();
  const User = useSelector((state: any) => state.Auth.user.user);
  const [userData, setUserData] = useState({ userId: User.userId });
  const [defaultUserData, setDefaultUserData] = useState(userInfo);
  const [selectedFiles, setSelectedFiles] = useState<any>(); // State to store selected files
  const [imageUrl, setImageUrl] = useState<any>({ profile_img: "", profile_poster_img: "" });
  const [loading, setLoading] = useState(false);

  // Create a ref for the hidden file input element
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleAddFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      console.error("File input ref is null");
    }
  };

  const CoverFileInputRef = useRef<HTMLInputElement | null>(null);
  const handleAddCoverFile = () => {
    if (CoverFileInputRef.current) {
      CoverFileInputRef.current.click();
    } else {
      console.error("File input ref is null");
    }
  };

  // Function to handle file selection
  const handleFileChange = (e: any, image_for: string) => {
    if (e.target.files) {
      if (image_for === "profile_img") {
        setSelectedFiles((prev: any) => ({ ...prev, profile_img: e.target.files[0] }));
        setImageUrl((prev: any) => ({
          ...prev,
          profile_img: e.target.files[0],
        }));
      }
      if (image_for === "profile_poster_img") {
        setSelectedFiles((prev: any) => ({
          ...prev,
          profile_poster_img: e.target.files[0],
        }));
        setImageUrl((prev: any) => ({
          ...prev,
          profile_poster_img: e.target.files[0],
        }));
      }
    }
  };

  const uploadImage = async (): Promise<void> => {
    const formData = new FormData();

    if (selectedFiles.profile_img) {
      formData.append("file", selectedFiles.profile_img);
      formData.append("upload_preset", "my_upload_preset");
      formData.append("cloud_name", "promotion-army");
      await axios
        .post(import.meta.env.VITE_CLOUDINARY_BASE_URL, formData)
        .then((response) => {
          setUserData((prev) => ({ ...prev, profile_img: response.data.secure_url }));
        })
        .catch((err) => console.log(err));
    }

    if (selectedFiles.profile_poster_img) {
      formData.append("file", selectedFiles.profile_poster_img);
      formData.append("upload_preset", "my_upload_preset");
      formData.append("cloud_name", "promotion-army");
      await axios
        .post(import.meta.env.VITE_CLOUDINARY_BASE_URL, formData)
        .then((response) => {
          setUserData((prev) => ({ ...prev, profile_poster_img: response.data.secure_url }));
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteProfileImage = async () => {
    await dispatch(UpdateUserProfile({ profile_img: "" }));
    dispatch(GetMyProfile());
  };

  const deleteCoverImage = async () => {
    await dispatch(UpdateUserProfile({ profile_poster_img: "" }));
    dispatch(GetMyProfile());
  };

  const updateUserInfo = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    await uploadImage();
    await dispatch(UpdateUserProfile(userData));
    await dispatch(GetMyProfile());
    setDefaultUserData(User);
    setLoading(false);
  };

  useEffect(() => {
    setDefaultUserData(userInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full rounded-md">
      <h2 className="text-xl p-3 border-b border-[#ff6f4349]text-customOrange font-Raleway">
        Customization
      </h2>
      <div className="m-auto w-full h-auto flex flex-col justify-center">
        <h2 className="text-sm px-3 py-2 text-customOrange font-Raleway">Profile Photo</h2>
        {defaultUserData.profile_img !== null && (
          <img
            src={defaultUserData.profile_img}
            alt="profile image"
            className=" mb-2 mx-auto w-[90px] h-[90px] rounded-full object-cover"
          />
        )}

        {typeof imageUrl.profile_img == "string" && defaultUserData.profile_img == null && (
          <img
            src={"/images/ideogram.jpeg"}
            alt="profile image"
            className=" mb-2 mx-auto w-[90px] h-[90px] rounded-full object-cover"
          />
        )}

        {typeof imageUrl.profile_img !== "string" && (
          <img
            src={URL.createObjectURL(imageUrl.profile_img)}
            alt="profile image"
            className=" mb-2 mx-auto w-[90px] h-[90px] rounded-full object-cover"
          />
        )}

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e, "profile_img")}
        />
        <div className="mx-auto w-[300px] h-auto flex flex-row items-center ">
          <input
            type="button"
            name="change"
            value="Change"
            onClick={() => handleAddFile()}
            className="py-1 my-3  mx-auto px-4 text-sm text-white font-Poppins bg-[#02272F]  hover:bg-[#013d4b]  rounded-md cursor-pointer"
          />
          <input
            type="button"
            name="delete"
            onClick={() => deleteProfileImage()}
            value="Delete"
            className="  py-1 my-3  mx-auto px-4 text-sm text-customOrange font-Poppins bg-white border border-[#f76c534b] hover:bg-[#f76c534b]  rounded-md cursor-pointer"
          />
        </div>

        {defaultUserData.profile_poster_img !== null && (
          <img
            src={defaultUserData.profile_poster_img}
            alt="profile image"
            className=" mb-2 mx-auto w-11/12 h-[180px] rounded  object-cover"
          />
        )}

        {typeof imageUrl.profile_poster_img == "string" &&
          defaultUserData.profile_poster_img == null && (
            <img
              src={"/images/ideogram.jpeg"}
              alt="profile image"
              className=" mb-2 mx-auto w-11/12 h-[180px] rounded object-cover"
            />
          )}

        {typeof imageUrl.profile_poster_img !== "string" && (
          <img
            src={URL.createObjectURL(imageUrl.profile_poster_img)}
            alt="profile image"
            className=" mb-2 mx-auto w-11/12 h-[180px] rounded  object-cover"
          />
        )}

        <div className="mx-auto w-[300px] h-auto flex flex-row items-center ">
          <input
            type="button"
            name="Change2"
            value="Change"
            onClick={() => handleAddCoverFile()}
            className="py-1 my-3  mx-auto px-4 text-sm text-white font-Poppins bg-[#02272F]  hover:bg-[#013d4b]  rounded-md cursor-pointer"
          />
          <input
            type="button"
            name="Save"
            value=" Delete"
            onClick={() => deleteCoverImage()}
            className="  py-1 my-3  mx-auto px-4 text-sm text-customOrange font-Poppins bg-white border border-[#f76c534b] hover:bg-[#f76c534b]  rounded-md cursor-pointer"
          />

          <input
            type="file"
            ref={CoverFileInputRef}
            style={{ display: "none" }}
            onChange={(e) => handleFileChange(e, "profile_poster_img")}
          />
        </div>
      </div>
      <input
        type="button"
        name="Save"
        value="Save Changes"
        onClick={(e: any) => updateUserInfo(e)}
        className=" flex  py-2 my-3  mr-10 ml-auto px-4 text-sm text-white font-Poppins bg-[#02272F]  hover:bg-[#013d4b]  rounded-md cursor-pointer"
      />
      {loading && <Loading />}
    </div>
  );
};

export default Customization;
