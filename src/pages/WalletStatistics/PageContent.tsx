// import About from "./About";
// import LanguageAndRegion from "./LanguageAndRegion";
// import SocialsAndLinks from "./SocialsAndLinks";
// import AccountInformation from "./AccountInformation";
// import Notification from "./Notification";

import Overview from "./Overview";
import Sale from "./Sale";

 interface compData {
  displayCom: string;
}

const PageContent = ({ displayCom }: compData) => {
  return (
    <div className="mx-auto w-4/6 h-[550px] flex flex-col items-start rounded-md bg-blue-gray-50 ">
      {displayCom == "overview" && <Overview />}
      {displayCom == "sale" && <Sale />}
      {/*  {displayCom == "wallet" && <Wallet />}
      {displayCom == "progress" && <Progress />} */}
    </div>
  );
};

export default PageContent;
