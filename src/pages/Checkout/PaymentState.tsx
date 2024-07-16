import { useState } from "react";
import DropdownOptions from "./DropdownOptions";
import Processing from "./Processing";
import Congratulations from "./Congratulations";
import Failedtransaction from "./Failedtransaction";

export const PaymentState_1 = () => {
  const [paymentState, setPaymentState] = useState("none");
  return (
    <div className="flex flex-col  w-1/2  items-start mx-auto px-10 pt-14">
      <div
        className="mx-auto mb-8 relative w-[380px] h-[188px]  rounded-md bg-cover bg-center "
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dspkk9qlz/image/upload/v1718217116/Rectangle_175_laxlo3.svg)",
        }}
      >
        <div className="flex flex-col">
          <div className="absolute top-0 left-0 w-full flex justify-between p-5  mt-3">
            <img
              src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718219594/Chip_Image_cqwcbx.svg"
              alt="Image 1"
              className="h-[30px] w-[30px] object-cover"
            />

            <div className="text-white">
              <p className="text-[16px] font-Poppins">Bank name</p>
              <p className="text-[12px] font-Raleway font-[600]">Owner name</p>
            </div>
          </div>

          <div className="absolute w-full flex bottom-0   justify-between  p-5  ">
            <div className="flex justify-between items-center gap-2">
              <p className="text-[12px] font-Poppins text-white">****</p>

              <p className="text-[12px] font-Poppins text-white">****</p>

              <p className="text-[12px] font-Poppins text-white"> 0817</p>
            </div>
            <img
              src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718221239/Credit_Card_Logo_jkmusl.svg"
              alt="master card"
              className="object-cover w-auto h-6 ml-auto justify-end "
            />
          </div>
        </div>
      </div>

      <div className="   flex justify-between w-full">
        <div className="flex flex-row py-2 justify-between gap-4">
          <p className="  font-Poppins">Payment method</p>
          <img
            src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718221815/credit_card_r8wxy8.svg"
            alt="cardicon"
            className="w-7  h-auto object-cover"
          />
        </div>

        <p className="text-[#F25B38]">Edit</p>
      </div>

      <p className="text-sm font-Poppins">Others</p>

      <div className="flex w-full py-2 justify-between">
        <img
          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224418/Frame_87_yidurr.svg"
          alt="master cards"
        />
        <img
          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224451/Frame_90_kqqr1s.svg"
          alt="apple pay"
        />
        <img
          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224470/Frame_88_nvnie8.svg"
          alt="paypal"
        />
        <img
          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224497/Frame_89_f7s6pv.svg"
          alt="visa card"
        />
      </div>

      <div className="flex py-4 justify-between w-full">
        <div className="flex w-[86.25px]   h-[22px]">
          <p className="w-[129px] h-[24px]">Address</p>
          <img
            src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718223081/pin_drop_w9crrr.svg"
            alt="location"
          />
        </div>

        <p className="text-[#F25B38]">Edit</p>
      </div>

      <p className="font-Poppins text-sm py-2">
        4517 Washington Ave. Manchester, Kentucky 39495
      </p>

      <div className="flex justify-between w-full border-t pt-6 border-[#F25B38]">
        <div className="flex justify-between w-full py-1">
          <div className="flex flex-row items-center  ">
            <p className="w-[129px]   font-Poppins">Shipping</p>
            <img
              src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718225374/help_1_d7ncn4.svg"
              alt="cardicon"
              className="mx-2 w-5 h-auto object-cover"
            />
          </div>

          <p className="text-[#F25B38]"> $70</p>
        </div>
      </div>

      <div className="flex justify-between w-full py-1">
        <p className="w-[129px]  ">Cart total</p>

        <p className="text-[#F25B38]">$ 11,000</p>
      </div>

      <div className="flex justify-between w-full py-1">
        <p className="w-[129px] h-[24px] font-[500] text-xl">Total</p>
        <p className="text-[#F25B38]">$ 11,070</p>
      </div>

      <p
        className="text-white text-center pt-6 bg-[#F25B38] w-[560px] h-[72px]     mt-6 hover:bg-customOrange rounded font-Poppins"
        onClick={() => setPaymentState("processing")}
      >
        Checkout
      </p>

      {paymentState == "processing" && <Processing />}
      {paymentState == "success" && <Congratulations />}
      {paymentState == "failed" && <Failedtransaction />}
    </div>
  );
};

export const PaymentState_2 = () => {
  const options1 = ["Kenturky", "two", "three"];
  const options2 = ["USA", "five", "six"];
  return (
    <div className="flex flex-col  w-[500px] mx-auto justify-items-start">
      <div className="mx-auto flex flex-col justify-between w-full gap-y-4 mt-12  ">
        <div className="flex w-[86.25px] gap-2 h-[22px]">
          <p className="w-[129px] h-[24px]">Address</p>
          <img
            src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718373220/pin_drop_1_dhx34a.svg"
            alt="location"
          />
        </div>

        <div className="flex items-center px-4 justify-center w-[553.15px] h-[66.6px] rounded border border-customOrange">
          <input
            type="text"
            placeholder="Address"
            className="w-full h-full border border-none outline-none font-Poppins text-[18.5px]"
          />
        </div>

        <div className="flex items-center px-4 justify-center w-[553.15px] h-[66.6px] rounded border border-customOrange">
          <input
            type="text"
            placeholder="City"
            className="w-full h-full border border-none outline-none font-Poppins text-[18.5px]"
          />
        </div>

        <DropdownOptions
          className="checkout-dropdown w-[324.68px] h-[66.6px] border border-customOrange  pl-4 text-[18px] font-Poppins outline-none"
          options={options1}
          placeholder={"Select State"}
        />
        <DropdownOptions
          className="checkout-dropdown w-[553.15px] h-[66.6px] border border-customOrange text-[18px] font-Poppins pl-4 outline-none"
          options={options2}
          placeholder={"select country"}
        />
      </div>

      {/* ---------------------card payment---------- */}

      <hr className="bg-[#8fdcde] w-[554px] my-4" />
      <div className="flex justify-between w-full">
        <div className="flex justify-between w-full">
          <div className="flex justify-between gap-6">
            <p className="w-[129px] h-[24px] font-Poppins">Shipping</p>
            <img
              src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718225374/help_1_d7ncn4.svg"
              alt="cardicon"
            />
          </div>
          <p className="text-[#F25B38]">$70</p>
        </div>
      </div>

      <div className="flex justify-between w-full">
        <p className="w-[129px] h-[24px]">Cart total</p>
        <p className="text-[#F25B38]">$ 11,000</p>
      </div>

      <div className="flex justify-between w-full">
        <p className="w-[129px] h-[24px] font-[500] text-xl">Total</p>
        <p className="text-[#F25B38]">$ 11,070</p>
      </div>

      <hr className="bg-[#8fdcde] w-full my-6" />

      {/* 
---------cards payment options--------- */}
      <div className="flex w-full justify-between gap-y-4 ">
        <img
          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224418/Frame_87_yidurr.svg"
          alt="master cards"
        />
        <img
          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224451/Frame_90_kqqr1s.svg"
          alt="apple pay"
        />
        <img
          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224470/Frame_88_nvnie8.svg"
          alt="paypal"
        />
        <img
          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718224497/Frame_89_f7s6pv.svg"
          alt="visa card"
        />
      </div>

      {/* -----------card info--------- */}
      <div className="flex justify-between w-full gap-y-4">
        <p className="w-[129px] h-[24px]">Card info</p>

        <div className="flex flex-row justify-between gap-4">
          <p className="">Mastarcard</p>

          <img
            src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718364511/Credit_Card_Logo_1_n7ywml.svg"
            alt="mastercard"
          />
        </div>
      </div>

      <div className="flex my-2 mt-10 items-center px-4 justify-center w-[553.15px] h-[66.6px] rounded border border-customOrange">
        <input
          type="text"
          placeholder="Holders name"
          className="w-full h-full border border-none outline-none font-Poppins  text-[18.5px]"
        />
      </div>

      <div className="flex my-2 items-center px-4 justify-center w-[553.15px] h-[66.6px] rounded border border-customOrange">
        <input
          type="text"
          placeholder="Card No:"
          className="w-full h-full border border-none outline-none font-Poppins text-[18.5px]"
        />
      </div>

      <div className="flex my-2 flex-row justify-between  w-[553.15px]">
        <div className="flex  pl-6 w-[242.15px] h-[66.6px] rounded border border-customOrange ">
          <input
            type="text"
            placeholder="CVV"
            className="w-[202px] h-full border border-none outline-none  font-Poppins text-[18.5px]"
          />
        </div>

        <div className="flex pl-6 w-[242.15px] h-[66.6px]  rounded border border-customOrange">
          <input
            type="text"
            placeholder="dd/mm/yyyy"
            className="w-full h-full border-none outline-none font-medium text-lg"
          />
        </div>
      </div>

      <a
        href="#email"
        className="text-white text-center pt-6 bg-customOrange w-[560px] h-[72px] mt-6 hover:bg-customOrange rounded font-Poppins"
      >
        Checkout
      </a>
    </div>
  );
};
