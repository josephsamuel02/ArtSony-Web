/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdClose } from "react-icons/md";
import Select from "react-select";
import { ToolTip } from "../../components/ToolTip";
import { useState } from "react";
import { SellArtworkDraft, SellArtworkStage } from "../../Redux/PostArtwork";
import { useDispatch, useSelector } from "react-redux";

const StageSix = () => {
  const rdxData = useSelector((state: any) => state.PostArtwork.sell_artwork_draft);
  const dispatch = useDispatch();

  const [artDetail, setArtDetail] = useState<any>({ auction: false });

  const options = [
    { value: "fiat", label: "Fiat" },
    { value: "usd", label: "USD" },
    { value: "euro", label: "EURO" },
    { value: "gbp", label: "GBP" },
    { value: "ngn", label: "NGN" },
  ];

  const updatePost = async () => {
    dispatch(SellArtworkDraft(artDetail));
  };

  return (
    <div className="w-1/3 h-auto bg-[#02272F] flex flex-col p-4 rounded">
      <h3 className="w-full flex flex-row items-start">
        <MdClose size={24} color="white" className="ml-auto" />
      </h3>
      <div className="w-full h-auto mt-4 mb-10 rounded-md flex">
        <input
          type="button"
          value="Fixed Price"
          onClick={() => {
            setArtDetail((prev: any) => ({ ...prev, auction: false }));
          }}
          className={`mx-0 w-2/5 py-2 text-[16px] font-poppins text-white  hover:bg-[#be4621] border border-customOrange rounded cursor-pointer ${
            !artDetail.auction ? " bg-customOrange" : "bg-[#d8450b50]"
          }`}
        />
        <input
          type="button"
          value="Unction"
          onClick={() => {
            setArtDetail((prev: any) => ({ ...prev, auction: true }));
          }}
          className={`ml-auto w-2/5 py-2 text-[16px] font-poppins text-white bg-[#d8450b50] hover:bg-[#be4621] border border-customOrange rounded cursor-pointer  ${
            artDetail.auction ? " bg-customOrange" : "bg-[#d8450b50]"
          }`}
        />
      </div>
      {!artDetail.auction && (
        <div className="w-full h-auto">
          <div className="w-full h-auto bg-white rounded-md">
            <Select
              options={options}
              placeholder={"Currency"}
              defaultInputValue={rdxData.currency}
              onChange={(option) => {
                setArtDetail((prev: any) => ({ ...prev, currency: option?.value }));
              }}
            />
          </div>
          <h3 className="text-[16px] font-Raleway text-white  py-3 ">Amount</h3>
          <div className="w-full h-auto bg-white rounded-md">
            <input
              type="number"
              placeholder="00:00"
              defaultValue={rdxData.price}
              onChange={(e) => {
                setArtDetail((prev: any) => ({ ...prev, price: Number(e.target.value) }));
              }}
              className="w-full p-3 placeholder-customOrange text-customOrange text-center font-Raleway rounded outline-none"
            />
          </div>
          <div className="w-full h-auto mt-4 mb-3 flex flex-row items-center">
            <h3 className="mx-0 text-[16px] font-Raleway text-white  py-3 ">
              Artsony service fee
            </h3>
            <h3 className="ml-auto text-[16px] font-Raleway text-white  py-3 flex flex-row items-center ">
              Explain this <ToolTip header={""} tip={"Explain this"} />
            </h3>
          </div>
          <div className="w-2/5 h-auto bg-white rounded-md">
            <p className="p-3   text-customOrange text-center font-Raleway ">3636</p>
          </div>
        </div>
      )}
      {artDetail.auction && (
        <div className="w-full h-full flex flex-col items-center">
          <img
            src="/images/full logo.svg"
            alt="logo"
            className="mt-auto w-40 h-40 object-cover"
          />
          <p className="mb-auto p-3   text-white text-center text-[16px] font-Raleway ">
            Coming Soon
          </p>
        </div>
      )}
      <div className="w-full h-auto mt-auto mb-4 rounded-md flex">
        {/* <input
          type="button"
          value="Save as Draft"
          className="mx-1 w-1/3 py-3 text-[13px] font-poppins text-white bg-[#8AC5C733] hover:bg-[#20424481] rounded cursor-pointer"
        /> */}
        <input
          type="button"
          value="Back"
          onClick={() => dispatch(SellArtworkStage("stageFive"))}
          className="mx-1 w-1/2 py-3 text-[16px] font-poppins text-white bg-[#d8450b50] hover:bg-[#be4621b6] border border-customOrange rounded cursor-pointer"
        />
        <input
          type="button"
          value="Next"
          onClick={() => {
            updatePost();
            dispatch(SellArtworkStage("stageSeven"));
          }}
          className="mx-1 w-1/2 py-3 text-[16px] font-poppins text-white  bg-customOrange hover:bg-[#be4621] rounded cursor-pointer"
        />
      </div>
    </div>
  );
};

export default StageSix;
