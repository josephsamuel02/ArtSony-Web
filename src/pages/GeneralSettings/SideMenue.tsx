interface compData {
  displayCom: string;
  setDisplayComp: (item: string) => void;
}

const SideMenue = ({ displayCom, setDisplayComp }: compData) => {
  const settingsMenu = [
    "Account Information",
    "Notification",
    "privacy Settings",
    "Password",
    "Blocking",
    "Billing and Shipping",
    "Delete Account",
  ];

  return (
    <div className=" mx-auto py-4 rounded-md flex flex-col items-center w-1/4 h-[550px] shadow-md">
      <div className="w-full h-auto   p-3 bg-white flex flex-row items-center border-b border-gray-3s00 ">
        <p className=" text-[20px] text-customOrange font-Poppins  ">General Settings</p>
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
        </div>
      </div>
    </div>
  );
};

export default SideMenue;
