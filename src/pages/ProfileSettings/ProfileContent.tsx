import About from "./About";
import Customization from "./Customization";
import LanguageAndRegion from "./LanguageAndRegion";
import PersonalInformation from "./PersonalInformation";

interface compData {
  displayCom: string;
}

const ProfileContent = ({ displayCom }: compData) => {
  return (
    <div className="mx-auto w-4/6 h-[550px] flex flex-col items-start rounded-md shadow-md">
      {displayCom == "Personal Information" && <PersonalInformation />}
      {displayCom == "Customization" && <Customization />}
      {displayCom == "About" && <About />}
      {displayCom == "Language & Location" && <LanguageAndRegion />}
    </div>
  );
};

export default ProfileContent;
