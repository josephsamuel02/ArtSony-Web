/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { SellArtworkDraft, SellArtworkStage } from "../../Redux/PostArtwork";

const StageOne = () => {
  const dispatch = useDispatch();
  const artData = useSelector((state: any) => state.PostArtwork.sell_artwork_draft);
  const [artDetail, setArtDetail] = useState({});

  const [Tags] = useState([
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

  const Tools = [
    { value: "corel Draw", label: "Corel Draw" },
    { value: "adobe illustrator", label: "Adobe illustrator" },
    { value: "spline", label: "Spline" },
    { value: "canva", label: "Canva" },
  ];

  const updatePost = async () => {
    dispatch(SellArtworkDraft(artDetail));
  };

  return (
    <div className="w-1/3 h-auto bg-[#02272F] flex flex-col p-4 rounded">
      <h3 className="w-full flex flex-row items-start">
        <MdClose size={24} color="white" className="ml-auto" />
      </h3>
      <h3 className="text-[20px] font-Raleway font-light text-white py-3">Name of Art work</h3>
      <div className="w-full h-auto bg-white rounded-md">
        <input
          type="text"
          placeholder="Give your artwork a name."
          className="w-full p-3 placeholder-blue-gray-500 font-Raleway rounded outline-none"
          defaultValue={artData.artwork_name}
          onChange={(e) => setArtDetail((prev) => ({ ...prev, artwork_name: e.target.value }))}
        />
      </div>
      <h3 className="text-[20px] font-Raleway text-white py-3">
        Tags
        <span className="text-[#8AC5C7] text-[13px] font-Poppins px-1">
          ( Add up to 10 Tags , this help users find your Artwork. )
        </span>
      </h3>
      <div className="w-full h-auto bg-white rounded-md">
        <Select
          options={Tags}
          isMulti
          defaultInputValue={artData.tags}
          onChange={(selectedOptions) => {
            setArtDetail((prev) => ({
              ...prev,
              tags: selectedOptions.map((option) => option.value),
            }));
          }}
        />
      </div>
      <h3 className="text-[20px] font-Raleway text-white py-3">
        Tools
        <span className="text-[#8AC5C7] text-[13px] font-Poppins px-1">
          ( Add tools like Software, Hardware or Materials you used)
        </span>
      </h3>
      <div className="w-full h-auto bg-white rounded-md">
        <Select
          options={Tools}
          isMulti
          defaultInputValue={artData.tools}
          onChange={(selectedOptions) => {
            setArtDetail((prev) => ({
              ...prev,
              tools: selectedOptions.map((option) => option.value),
            }));
          }}
        />
      </div>

      <h3 className="text-[20px] font-Raleway text-white py-3">
        Description
        <span className="text-[#8AC5C7] text-[13px] font-Poppins px-1">
          (Give a brief description of your Artwork)
        </span>
      </h3>
      <div className="w-full h-auto bg-white rounded-md">
        <textarea
          className="w-full p-3 placeholder-blue-gray-500 font-Raleway rounded  outline-none"
          maxLength={250}
          defaultValue={artData.description}
          onChange={(e) => setArtDetail((prev) => ({ ...prev, description: e.target.value }))}
        />
      </div>
      <span className="text-[#8AC5C7] text-[13px] font-Poppins py-1">
        Maximum of 250 characters
      </span>

      <div className="w-full h-auto mt-8 mb-4 rounded-md flex">
        {/* <input
          type="button"
          value="Save as Draft"
          className="mr-auto w-2/5 py-3 text-[16px] font-poppins text-white bg-[#8AC5C733] hover:bg-[#20424481] rounded cursor-pointer"
        /> */}
        <input
          type="button"
          value="Next"
          onClick={() => {
            updatePost();
            dispatch(SellArtworkStage("stageTwo"));
          }}
          className="ml-auto w-full py-3 text-[16px] font-poppins text-white bg-customOrange hover:bg-[#be4621] rounded cursor-pointer"
        />
      </div>
    </div>
  );
};

export default StageOne;
