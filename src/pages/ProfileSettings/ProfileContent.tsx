/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { GetMyProfile } from "../../Redux/User";
import About from "./About";
import Customization from "./Customization";
import LanguageAndRegion from "./LanguageAndRegion";
import PersonalInformation from "./PersonalInformation";
import SocialsAndLinks from "./SocialsAndLinks";

interface compData {
  displayCom: string;
}

const ProfileContent = ({ displayCom }: compData) => {
  const dispatch = useDispatch<AppDispatch>();
  const User = useSelector((state: any) => state.User.my_profile.data);

  const [userInfo, setUserInfo] = useState(User);

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(GetMyProfile());
    };
    fetchUser();
    setUserInfo(User);
  }, []);

  return (
    <div className="mx-auto w-4/6 h-[550px] flex flex-col items-start rounded-md shadow-md">
      {displayCom == "Personal Information" && <PersonalInformation userInfo={userInfo} />}
      {displayCom == "Customization" && <Customization userInfo={userInfo} />}
      {displayCom == "About" && <About userInfo={userInfo} />}
      {displayCom == "Language & Location" && <LanguageAndRegion userInfo={userInfo} />}
      {displayCom == "Socials & Links" && <SocialsAndLinks userInfo={userInfo} />}
    </div>
  );
};

export default ProfileContent;
