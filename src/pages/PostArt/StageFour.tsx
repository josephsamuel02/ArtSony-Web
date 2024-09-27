/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdClose, MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from "react-icons/md";

import { useEffect, useState } from "react";
import { PostArtworkDraft, PostArtworkStage } from "../../Redux/PostArtwork";

import { useDispatch, useSelector } from "react-redux";
interface compData {
  selectedFiles: File[];
}

const StageFour = ({ selectedFiles }: compData) => {
  const [artDetail, setArtDetail] = useState<any>({});

  const ArtTitle = useSelector(
    (state: any) => state.PostArtwork.post_artwork_draft.artwork_name
  );
  const dispatch = useDispatch();
  const [Thumbnail, setThumbnail] = useState<any>([
    "https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ]);

  const imgLength = Thumbnail.length;
  const [TN, setTN] = useState(0);

  const updatePost = async () => {
    dispatch(PostArtworkDraft(artDetail));
  };

  useEffect(() => {
    setThumbnail(selectedFiles);
  }, [selectedFiles]);
  return (
    <div className="w-1/3 h-auto bg-[#02272F] flex flex-col p-4 rounded">
      <h3 className="w-full flex flex-row items-start">
        <MdClose size={24} color="white" className="ml-auto" />
      </h3>
      {Thumbnail && (
        <>
          <div className="relative w-full h-auto flex flex-col rounded">
            {selectedFiles.length == 0 ? (
              <img
                src={
                  "https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt=""
                className="w-full h-[210px] object-cover rounded"
              />
            ) : (
              <img
                src={URL.createObjectURL(selectedFiles[TN])}
                alt=""
                className="w-full h-[210px] object-cover rounded"
              />
            )}
            {Thumbnail.length === 0 ? (
              <p className="absolute bottom-6 left-0 right-0 text-[15px] font-Raleway font-light text-white text-center">
                Upload files to select a thumbnail
              </p>
            ) : (
              <p className="absolute bottom-6 left-0 right-0 text-[15px] font-Raleway font-light text-white text-center">
                {ArtTitle}
              </p>
            )}
          </div>
          {Thumbnail.length !== 0 && (
            <div className=" my-5 w-full h-auto flex flex-row">
              <p className=" mr-auto text-[15px] font-Raleway font-light text-white text-center">
                Thumbnail
              </p>
              <p className=" mx-auto text-[15px] flex flex-row gap-x-2 font-Raleway font-light text-white text-center">
                <MdOutlineArrowCircleLeft
                  size={25}
                  onClick={() => {
                    setTN(TN > 0 ? TN - 1 : 0);
                    setArtDetail((prev: any) => ({ ...prev, thumbnail: `${TN}` }));
                  }}
                  className="text-white hover:text-customOrange cursor-pointer"
                />
                <MdOutlineArrowCircleRight
                  size={25}
                  onClick={() => {
                    setTN((prevTN) => (prevTN < imgLength - 1 ? prevTN + 1 : prevTN));
                    setArtDetail((prev: any) => ({ ...prev, thumbnail: `${TN}` }));
                  }}
                  className="text-white hover:text-customOrange cursor-pointer"
                />
              </p>
              <p className=" ml-auto text-[15px] font-Raleway font-light text-white text-center"></p>
            </div>
          )}
          <div className="w-full h-auto my-4 py-3 bg-[#8AC5C733] hover:bg-[#226364cc] rounded cursor-pointer ">
            <p className="text-[15px] font-Raleway font-light text-white text-center">
              Preview
            </p>
          </div>
          <div className="w-full h-auto mt-auto mb-4 rounded-md flex">
            {/* <input
              type="button"
              value="Save as Draft"
              className="mx-1 w-1/3 py-3 text-[12px] font-poppins text-white bg-[#8AC5C733] hover:bg-[#20424481] rounded cursor-pointer"
            /> */}
            <input
              type="button"
              value="Back"
              onClick={() => dispatch(PostArtworkStage("stageThree"))}
              className="mx-1 w-1/2 py-3 text-[16px] font-poppins text-white bg-[#d8450b50] hover:bg-[#be4621b6] border border-customOrange rounded cursor-pointer"
            />
            <input
              type="button"
              value="Next"
              onClick={() => {
                updatePost();
                dispatch(PostArtworkStage("stageFive"));
              }}
              className="mx-1 w-1/2 py-3 text-[14px] font-poppins text-white  bg-customOrange hover:bg-[#be4621] rounded cursor-pointer"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default StageFour;
