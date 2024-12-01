import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { GetMyProfile, UpdateUserProfile } from "../../Redux/User";
import { MouseEvent, useEffect, useState } from "react";
import { Loading } from "../../components/Loading";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface compData {
  userInfo: any;
}

const PersonalInformation = ({ userInfo }: compData) => {
  const dispatch = useDispatch<AppDispatch>();
  const User = useSelector((state: any) => state.Auth.user.user);
  const [userData, setUserData] = useState({ userId: User?.userId });
  const [defaultUserData, setDefaultUserData] = useState(userInfo);
  const [loading, setLoading] = useState(false);

  const updateUserInfo = async (e: MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(UpdateUserProfile(userData));
    await dispatch(GetMyProfile());
    setDefaultUserData(User);

    setLoading(false);
  };

  useEffect(() => {
    setDefaultUserData(userInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const  = (sentence: string) => {
  //   if (!sentence) {
  //     return "";
  //   } else {
  //     return sentence
  //       .split("")
  //       .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
  //       .join("");
  //   }
  // };

  return (
    <div className="w-full h-full p-5 rounded-md">
      <h2 className="text-xl p-3 py-5 border-b border-[#ff6f4349] text-customOrange font-Raleway">
        Personal Information
      </h2>

      <div className="m-auto w-full h-auto mt-8 flex flex-col items-center justify-center ">
        <input
          type="text"
          name="Username"
          defaultValue={defaultUserData.user_name}
          onChange={(e) =>
            setUserData((prev: any) => ({ ...prev, user_name: e.target.value }))
          }
          placeholder="Username"
          className="w-5/6 py-2 my-3 px-4 outline-none font-Poppins border border-[#ff6f4373] rounded-md"
        />
        <input
          type="text"
          name="First name"
          defaultValue={defaultUserData.first_name}
          onChange={(e) =>
            setUserData((prev: any) => ({ ...prev, first_name: e.target.value }))
          }
          placeholder="First name"
          className="w-5/6 py-2 my-3 px-4 outline-none font-Poppins border border-[#ff6f4373] rounded-md"
        />
        <input
          type="text"
          name="Last name"
          defaultValue={defaultUserData.last_name !== null ? defaultUserData.last_name : ""}
          onChange={(e) =>
            setUserData((prev: any) => ({ ...prev, last_name: e.target.value }))
          }
          placeholder="Last name"
          className="w-5/6 py-2 my-3 px-4 outline-none font-Poppins border border-[#ff6f4373] rounded-md"
        />
        <input
          type="date"
          name="Date"
          defaultValue={
            defaultUserData.date_of_birth !== null ? defaultUserData.date_of_birth : ""
          }
          onChange={(e) =>
            setUserData((prev: any) => ({ ...prev, date_of_birth: e.target.value }))
          }
          placeholder="Date"
          className="w-5/6 py-2 my-3 px-4 outline-none font-Poppins border border-[#ff6f4373] rounded-md"
        />

        <input
          type="button"
          name="Save"
          value="Save Changes"
          onClick={(e: any) => updateUserInfo(e)}
          className="  py-2 my-3 ml-auto mr-[60px] px-4 text-white font-Poppins bg-[#02272F]  hover:bg-[#013d4b]  rounded-md cursor-pointer"
        />
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default PersonalInformation;
