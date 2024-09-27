/* eslint-disable @typescript-eslint/no-explicit-any */
import Switch from "react-switch";
import { MdClose } from "react-icons/md";
import Select from "react-select";
import { useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { ToolTip } from "../../components/ToolTip";
import { useDispatch, useSelector } from "react-redux";
import { PostArtworkDraft, PostArtworkStage } from "../../Redux/PostArtwork";

const StageTwo = () => {
  const artData = useSelector((state: any) => state.PostArtwork.post_artwork_draft);

  const dispatch = useDispatch();
  const [disableComments, setDisableComments] = useState<boolean>(false);
  const [artDetail, setArtDetail] = useState<any>({ copyright_license: [] });

  const options = [
    { value: "everyone", label: "Everyone" },
    { value: "people_i_follow", label: "People I Follow" },
    { value: "people_following_me", label: "People Following Me" },
  ];

  const handleCheckboxChange = (event: any, licenseType: string) => {
    const { checked } = event.target; // Get the checked state of the checkbox

    setArtDetail((prev: any) => {
      // If the checkbox is checked, add the string to the array
      if (checked) {
        return {
          ...prev,
          copyright_license: [...prev.copyright_license, licenseType],
        };
      } else {
        // If the checkbox is unchecked, remove the string from the array
        return {
          ...prev,
          copyright_license: prev.copyright_license.filter(
            (license: string) => license !== licenseType
          ),
        };
      }
    });
  };

  const updatePost = async () => {
    dispatch(PostArtworkDraft({ ...artDetail, disable_comments: disableComments }));
  };

  return (
    <div className="w-1/3 h-auto bg-[#02272F] flex flex-col p-4 rounded">
      <h3 className="w-full flex flex-row items-start">
        <MdClose size={24} color="white" className="ml-auto" />
      </h3>
      <h3 className="text-[20px] font-Raleway font-light text-white py-3">Art Field</h3>
      <span className="text-[#8AC5C7] text-[13px] font-Poppins px-1 py-0.5">
        ( What fields will you categories your art )
        <span className="text-[#d33d29] text-[13px] font-Poppins px-1">Required</span>
      </span>
      <div className="w-full h-auto bg-white rounded-md">
        <input
          type="text"
          placeholder="Art Field"
          defaultValue={artData.art_field ? artData.art_field[0] : ""}
          className="w-full p-3 placeholder-blue-gray-500 font-Raleway rounded outline-none"
        />
      </div>
      <h3 className="text-[20px] font-Raleway font-light text-white py-3">Common Fields</h3>
      <div className="w-full h-auto flex flex-row flex-wrap">
        <h4 className="mx-2  my-1 p-1 text-[12px] text-center font-Poppins text-white border border-customOrange hover:border-white  rounded cursor-pointer">
          Abstract Art
        </h4>
        <h4
          className="mx-2  my-1 p-1 text-[12px] text-center font-Poppins text-white border border-customOrange hover:border-white  rounded cursor-pointer"
          onClick={() => setArtDetail((prev: any) => ({ ...prev, art_field: ["Painting"] }))}
        >
          Painting
        </h4>
        <h4 className="mx-2  my-1 p-1 text-[12px] text-center font-Poppins text-white border border-customOrange hover:border-white  rounded cursor-pointer">
          Photography
        </h4>
        <h4 className="mx-2  my-1 p-1 text-[12px] text-center font-Poppins text-white border border-customOrange hover:border-white  rounded cursor-pointer">
          Pencil Art
        </h4>
        <h4 className="mx-2  my-1 p-1 text-[12px] text-center font-Poppins text-white border border-customOrange hover:border-white  rounded cursor-pointer">
          Illustration
        </h4>
        <h4 className="mx-2  my-1 p-1 text-[12px] text-center font-Poppins text-white border border-customOrange hover:border-white  rounded cursor-pointer">
          Graphic Art
        </h4>
      </div>
      <h3 className="text-[20px] font-Raleway font-light text-white py-3">
        Who can see this post
      </h3>
      <div className="w-full h-auto bg-white rounded-md">
        <Select
          options={options}
          defaultInputValue={artData.visibility}
          onChange={(selectedOptions) =>
            setArtDetail((prev: any) => ({ ...prev, visibility: selectedOptions!.value }))
          }
        />
      </div>

      <div className="w-full h-auto mt-3 flex flex-row items-center">
        <h3 className="text-[17px] font-Raleway font-light text-white py-3">
          Disable Comment section for this post
        </h3>
        <Switch
          // onChange={() => setDisableComments(!disableComments)}
          defaultChecked={artData.disable_comments == true ? artData.disable_comments : false}
          checked={disableComments}
          onColor={"#f25b38"}
          offColor={"#8AC5C7"}
          className="ml-auto"
          onChange={() => {
            setDisableComments(disableComments ? false : true);
            setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
          }}
        />
      </div>

      <h3 className="text-[17px] font-Raleway font-light flex text-white py-3">
        Copyright & License <span className="ml-auto text-customOrange">Required</span>
      </h3>
      <div className="w-full h-auto flex flex-col ">
        <h3 className="flex flex-row ">
          <input
            type="checkbox"
            defaultChecked={
              artData.copyright_license
                ? artData.copyright_license.includes("Attribution (CC BY)")
                : false
            }
            onClick={(e) => handleCheckboxChange(e, "Attribution (CC BY)")}
            className="mr-2 my-0 accent-customOrange"
          />
          <p className="text-[12px] font-Raleway font-light flex flex-row items-center text-white py-3">
            Attribution (CC BY)
          </p>

          <ToolTip
            header={"Attribution (CC BY)"}
            tip={
              "This license lets others, remix, adapt, and build upon your work, even commercially, as long as they credit you for the original creation"
            }
          />
        </h3>
        <h3 className="flex flex-row ">
          <input
            type="checkbox"
            defaultChecked={
              artData.copyright_license
                ? artData.copyright_license.includes("Attribution ShareAlike (CC BY-SA)")
                : false
            }
            onClick={(e) => handleCheckboxChange(e, "Attribution ShareAlike (CC BY-SA)")}
            className="mr-2 my-0 accent-customOrange"
          />
          <p className="text-[12px] font-Raleway font-light flex flex-row items-center text-white py-3">
            Attribution ShareAlike (CC BY-SA)
          </p>
          <ToolTip
            header={"Attribution ShareAlike (CC BY-SA)"}
            tip={
              "This license lets others, remix, adapt, and build upon your work, even for commercial purposes, as long as they credit you and license their new creations under the identical terms."
            }
          />
        </h3>
        <h3 className="flex flex-row ">
          <input
            type="checkbox"
            defaultChecked={
              artData.copyright_license
                ? artData.copyright_license.includes("Attribution Derivs (CC BY-ND)")
                : false
            }
            onClick={(e) => handleCheckboxChange(e, "Attribution Derivs (CC BY-ND)")}
            className="mr-2 my-0 accent-customOrange"
          />
          <p className="text-[12px] font-Raleway font-light flex flex-row items-center text-white py-3">
            Attribution Derivs (CC BY-ND)
          </p>
          <ToolTip
            header={"Attribution Derivs (CC BY-ND)"}
            tip={
              "This license lets others reuse the work for any purpose, including commercially; however, it cannot be shared with others in adapted form, and credit must be provided to you."
            }
          />
        </h3>
        <h3 className="flex flex-row ">
          <input
            type="checkbox"
            onClick={(e) => handleCheckboxChange(e, "Attribution Non-commercial (CC BY-NC)")}
            defaultChecked={
              artData.copyright_license
                ? artData.copyright_license.includes("Attribution Non-commercial (CC BY-NC)")
                : false
            }
            className="mr-2 my-0 accent-customOrange"
          />
          <p className="text-[12px] font-Raleway font-light flex flex-row items-center text-white py-3">
            Attribution Non-commercial (CC BY-NC)
          </p>
          <ToolTip
            header={"Attribution Non-commercial (CC BY-NC)"}
            tip={
              " This license lets others, remix, adapt, and build upon your work non-commercially, and although their new work must also acknowledge you and be e non-commercial, they don't have to license their derivative works on the same terms."
            }
          />
        </h3>
        <div className="flex flex-row">
          <input
            type="checkbox"
            defaultChecked={
              artData.copyright_license
                ? artData.copyright_license.includes(
                    "Attribution-Non-commercial-ShareAlike (CC BY-NC-SA)"
                  )
                : false
            }
            onClick={(e) =>
              handleCheckboxChange(e, "Attribution-Non-commercial-ShareAlike (CC BY-NC-SA)")
            }
            className="mr-2 my-0 accent-customOrange"
          />
          <p className="text-[12px] font-Raleway font-light flex flex-row items-center text-white py-3">
            Attribution-Non-commercial-ShareAlike (CC BY-NC-SA)
          </p>
          <ToolTip
            header={"Attribution-Non-commercial-ShareAlike (CC BY-NC-SA)"}
            tip={
              "This license lets others, remix, adapt, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms"
            }
          />
        </div>
        <div className="flex flex-row">
          <input
            type="checkbox"
            defaultChecked={
              artData.copyright_license
                ? artData.copyright_license.includes(
                    "Attribution-Non-commercial-NoDerivs (CC BY-NC-ND)"
                  )
                : false
            }
            onClick={(e) =>
              handleCheckboxChange(e, "Attribution-Non-commercial-NoDerivs (CC BY-NC-ND)")
            }
            className="mr-2 my-0 accent-customOrange"
          />
          <p className="text-[12px] font-Raleway font-light flex flex-row items-center text-white py-3">
            Attribution-Non-commercial-NoDerivs (CC BY-NC-ND)
          </p>
          <ToolTip
            header={"Attribution-Non-commercial-NoDerivs (CC BY-NC-ND)"}
            tip={
              " This license lets others, download your works and share them with others as long as they credit you, but they can’t change them in any way or use them commercially."
            }
          />
        </div>
        <h3 className="flex flex-row ">
          <input
            type="checkbox"
            defaultChecked={
              artData.copyright_license
                ? artData.copyright_license.includes("All Rights Reserved")
                : false
            }
            onClick={(e) => handleCheckboxChange(e, "All Rights Reserved")}
            className="mr-2 my-0 accent-customOrange"
          />
          <p className="text-[12px] font-Raleway font-light flex flex-row items-center text-white py-3">
            All Rights Reserved
          </p>
          <ToolTip
            header={"All Rights Reserved"}
            tip={
              " This implies that no one can utilize your work without first getting permission from you"
            }
          />
        </h3>
      </div>
      <div className="w-full h-auto mt-8 mb-4 rounded-md flex">
        {/* <input
          type="button"
          value="Save as Draft"
          className="mx-1 w-1/3 py-3 text-[14px] font-poppins text-white bg-[#8AC5C733] hover:bg-[#20424481] rounded cursor-pointer"
        /> */}
        <input
          type="button"
          value="Back"
          onClick={() => dispatch(PostArtworkStage("stageOne"))}
          className="mx-1 w-1/2 py-3 text-[16px] font-poppins text-white bg-[#d8450b50] hover:bg-[#be4621b6] border border-customOrange rounded cursor-pointer"
        />
        <input
          type="button"
          value="Next"
          onClick={() => {
            updatePost();
            dispatch(PostArtworkStage("stageThree"));
          }}
          className="mx-1 w-1/2 py-3 text-[16px] font-poppins text-white  bg-customOrange hover:bg-[#be4621] rounded cursor-pointer"
        />
      </div>
    </div>
  );
};

export default StageTwo;
