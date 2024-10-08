/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Select from "react-select";
import Switch from "react-switch";
const LanguageAndRegion = () => {
  // const userData = useSelector((state: any) => state.User.data);
  const userData = true;
  const [disableComments, setDisableComments] = useState<boolean>(userData ? userData : false);
  // const [artDetail, setArtDetail] = useState<any>({ copyright_license: [] });

  const [Countries] = useState([
    { value: "random", label: "Random" },
    { value: "ai Art", label: "Ai Art" },
    { value: "architecture", label: "Architecture" },
    { value: "space", label: "Space" },
    { value: "painting", label: "Painting" },
    { value: "plant Life", label: "Plant Life" },
    { value: "abstract", label: "Abstract" },
    { value: "medieval", label: "Medieval" },
    { value: "futuristic", label: "Futuristic" },
    { value: "animation", label: "Animation" },
    { value: "spiritual", label: "Spiritual" },
  ]);
  return (
    <div className="w-full h-full p-5 rounded-md">
      <h2 className="text-xl p-3 py-2 border-b border-[#ff6f4349] text-customOrange font-Raleway">
        Language & Location
      </h2>

      <div className="m-auto w-full h-auto  flex flex-col  justify-center ">
        <h2 className="text-base p-3 pb-1 text-customOrange font-Raleway">Region *</h2>
        <h2 className="text-xs p-3 py-1 text-gray-800 font-Raleway">
          We use this information to improve your user experience
        </h2>

        <Select
          options={Countries}
          placeholder="Country"
          //   defaultInputValue={artData.tags}
          //   onChange={(selectedOptions) => {
          //     setArtDetail((prev) => ({
          //       ...prev,
          //       tags: selectedOptions.map((option) => option.value),
          //     }));
          //   }}
          className=" w-11/12   my-3 px-4 outline-none font-Poppins   rounded"
        />
        <Select
          options={Countries}
          placeholder="State/Province"
          className=" w-3/5    px-4 outline-none font-Poppins   rounded"
        />

        <h2 className="text-base p-3 pb-1 text-customOrange font-Raleway">Time Zone *</h2>
        <h2 className="text-xs p-3 py-1 text-gray-800 font-Raleway">
          We use this information to sne you your weekly digest at the appropriate time
        </h2>

        <Select
          options={Countries}
          placeholder="Time Zone"
          className=" w-3/5 py-2  px-4 outline-none font-Poppins   rounded"
        />
        <div className="mt-2 w-3/5 h-auto flex flex-row">
          <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
            Set Automatically by location
          </h2>

          <Switch
            // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
            checked={disableComments}
            onColor={"#f25b38"}
            offColor={"#8AC5C7"}
            height={24}
            className="ml-auto py-0"
            onChange={() => {
              setDisableComments(disableComments ? false : true);
              // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
            }}
          />
        </div>

        <h2 className="text-base p-3 pb-1 text-customOrange font-Raleway">Language *</h2>
        <Select
          options={Countries}
          placeholder="Language"
          className=" w-3/5 py-2  px-4 outline-none font-Poppins   rounded"
        />
      </div>
      <input
        type="button"
        name="Save"
        value="Save Changes"
        className="  py-2 my-3 flex ml-auto mr-[27px] px-4 text-white font-Nunito bg-[#02272F]  hover:bg-[#013d4b]  rounded-md cursor-pointer"
      />
    </div>
  );
};

export default LanguageAndRegion;
