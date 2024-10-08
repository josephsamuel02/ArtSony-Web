import { useState } from "react";
import Select from "react-select";
const About = () => {
  const [ArtFocus] = useState([
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
      <h2 className="text-xl p-3 py-5 border-b border-[#ff6f4349] text-customOrange font-Raleway">
        About
      </h2>

      <div className="m-auto w-full h-auto mt-5 flex flex-col  justify-center ">
        <h2 className="text-base p-3 pb-1 text-customOrange font-Raleway">Art Focus *</h2>
        <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
          What is your art focus ?
        </h2>

        <Select
          options={ArtFocus}
          isMulti
          placeholder="Examples : Photography, hyper-realism, Architecture."
          className=" w-[99%] py-2  px-4 outline-none font-Poppins   rounded"
        />
        <h2 className="text-base p-3 pb-1 text-customOrange font-Raleway">Bio *</h2>
        <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
          Tell people a little about yourself
        </h2>
        <textarea
          name="bio"
          className=" mx-auto w-11/12 h-[120px] py-2 my-3 px-4 outline-none font-Poppins border border-[#ff6f4373] rounded"
        />
        <h2 className="text-xs     text-customOrange font-Raleway">
          Maximum of 250 characters
        </h2>
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

export default About;
