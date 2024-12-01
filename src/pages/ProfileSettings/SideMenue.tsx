import { clearAuthData } from "../../Redux/AuthSlice";
import { AppDispatch } from "../../Redux/store";
import { clearUserData } from "../../Redux/User";
import { useDispatch } from "react-redux";

interface compData {
  displayCom: string;
  setDisplayComp: (item: string) => void;
}

const SideMenue = ({ displayCom, setDisplayComp }: compData) => {
  const dispatch = useDispatch<AppDispatch>();
  const settingsMenu = [
    "Personal Information",
    "Customization",
    "About",
    "Language & Location",
    "Socials & Links",
  ];

  return (
    <div className=" mx-auto py-4 rounded-md flex flex-col items-center w-1/4 h-[550px] shadow-md">
      <div className="w-full h-auto   py-3 bg-white flex flex-row items-center border-b border-gray-3s00 ">
        <div className="relative ml-2 w-[80px] h-[80px] rounded-full flex items-center justify-around ">
          <img
            src="/images/profile_bg-image.svg"
            alt=""
            className="m-auto absolute w-[65px] h-[65px] rounded-full object-cover z-10 "
          />
          <img
            src="/images/profilimage.jpeg"
            alt=""
            className="m-auto flex absolute w-[55px] h-[55px] rounded-full object-cover z-20 "
          />
        </div>

        <div className=" mx-5 w-3/5 flex flex-col  ">
          <p className=" text-[16px] text-[#2e2d2d] font-Poppins  ">Lee Chang</p>
          <p className="py-1  text-[12px] text-[#F25B38] font-Poppins font-light ">
            Member since 2023
          </p>
          <p className=" text-[9px] text-[#131211] font-Poppins font-light ">
            profile Settings
          </p>
        </div>
      </div>

      <div className="w-full h-auto ">
        <div className="w-full h-auto py-5 flex flex-col    ">
          {settingsMenu.map((d: string, i: number) => (
            <h3
              className={`px-3 py-4 text-[15px] text-[#2e2d2d] hover:bg-[#f25a382a] font-semibold font-Poppins cursor-default border-l-4 ${
                displayCom == d ? "bg-[#f25a384f]  border-customOrange " : "border-white"
              } ${d == "Sign Out" ? "text-customOrange" : "text-[#2e2d2d]"}`}
              key={i}
              onClick={() => setDisplayComp(d)}
            >
              {d}
            </h3>
          ))}

          <h3
            className="px-3 py-4 text-[15px] text-customOrange hover:bg-[#f25a382a] font-semibold font-Poppins   border-l-4 cursor-pointer "
            onClick={() => {
              dispatch(clearUserData());
              dispatch(clearAuthData());
              window.location.assign("/");
            }}
          >
            Sign Out
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SideMenue;
