import About from "./About";
import LanguageAndRegion from "./LanguageAndRegion";
import SocialsAndLinks from "./SocialsAndLinks";
import AccountInformation from "./AccountInformation";
import Notification from "./Notification";

interface compData {
  displayCom: string;
}

const ProfileContent = ({ displayCom }: compData) => {
  return (
    <div className="mx-auto w-4/6 h-[550px] flex flex-col items-start rounded-md shadow-md">
      {/* "Account Information",
    "Notification",
    "privacy Settings",
    "Password",
    "Blocking",
    "Billing and Shipping",
    "Delete Account", */}

      {displayCom == "Account Information" && <AccountInformation />}
      {displayCom == "Notification" && <Notification />}
      {displayCom == "About" && <About />}
      {displayCom == "Language & Location" && <LanguageAndRegion />}
      {displayCom == "Socials & Links" && <SocialsAndLinks />}
    </div>
  );
};

export default ProfileContent;
