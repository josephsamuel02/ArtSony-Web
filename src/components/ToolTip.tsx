import { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const ToolTip = ({ header, tip }: any) => {
  const [showTip, setShowTip] = useState(false);
  return (
    <div
      className="relative px-1 flex flex-row items-center"
      onMouseOver={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
    >
      <BsQuestionCircle color="white" size={13} />

      {showTip && (
        <div className=" absolute bottom-8 right-[-70px] p-2 w-[180px] bg-white shadow rounded-md z-10">
          <h4 className="text-[12px] font-Poppins font-bold">{header}</h4>
          <p className=" text-[11px] p-0 font-Poppins text-black ">{tip}</p>
        </div>
      )}
    </div>
  );
};
