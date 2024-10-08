import { useState } from "react";
import Nav from "../../components/NavBar/Nav";
import ProfileContent from "./ProfileContent";
import SideMenue from "./SideMenue";

const GeneralSettings = () => {
  const [displayCom, setDisplayComp] = useState("Personal Information");

  return (
    <div className="w-full h-auto mt-10 bg-white  ">
      <Nav />
      <div className="fixed left-0 right-0 w-full h-screen px-20 flex flex-row items-center  ">
        <SideMenue displayCom={displayCom} setDisplayComp={setDisplayComp} />
        <ProfileContent displayCom={displayCom} />
      </div>
    </div>
  );
};

export default GeneralSettings;
