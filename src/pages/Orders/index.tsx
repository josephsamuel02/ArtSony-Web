import { useState } from "react";
import Nav from "../../components/NavBar/Nav";
import SideNav from "./SideNav";
import Tracker from "./Tracker";
import Files from "./Files";

const Orders = () => {
  const [orderType, setOrderType] = useState("physical");
  return (
    <div className="w-full h-auto  pt-28 bg-white">
      <Nav />
      <div className="fixed w-full h-auto flex flex-row bg-white">
        <SideNav orderType={orderType} setOrderType={setOrderType} />
        {orderType == "physical" && <Tracker />}
        {orderType == "digital" && <Files />}
      </div>
    </div>
  );
};
export default Orders;
