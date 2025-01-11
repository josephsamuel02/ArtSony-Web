import { useState } from "react";
import Nav from "../../components/NavBar/Nav";
import SideMenue from "./SideMenue";
import PageContent from "./PageContent";

const WalletStatistics = () => {
  const [displayCom, setDisplayComp] = useState("overview");

  return (
    <div className="w-full h-auto mt-10 bg-white  ">
      <Nav />
      <div className="fixed left-0 right-0 w-full h-screen px-6 flex flex-row items-center  ">
        <SideMenue displayCom={displayCom} setDisplayComp={setDisplayComp} />
        <PageContent displayCom={displayCom} />
      </div>
    </div>
  );
};

export default WalletStatistics;
