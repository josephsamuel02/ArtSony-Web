import { useState } from "react";
import Nav from "../../components/Nav";
import { PaymentState_1, PaymentState_2 } from "./PaymentState";

const Checkout = () => {
  const [paymentOptionState, setpaymentoptionState] = useState("previousCard");

  const items = [
    {
      title: "Soul Mountain",
      rights: "Exclusive Rights",
      price: 200,
      image:
        "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718118210/Group_1339_ol2ukf.svg",
      botton1: "+",
      botton2: "-",
    },
    {
      title: "Crimson Sky",
      rights: "Exclusive Rights",
      price: 1000,
      image:
        "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718121792/Rectangle_174_q6mssw.svg",
      botton1: "+",
      botton2: "-",
    },
    {
      title: "Glassified",
      rights: "Exclusive Rights",
      price: 500,
      image:
        "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718122076/Group_1695_s1ykp7.svg",
      botton1: "+",
      botton2: "-",
    },
  ];

  const details = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718245464/Rectangle_7_hcw1fb.svg",
      artname: "Fussion",
      avatarUrl:
        "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718275823/Ellipse_10_x2eyae.svg",
      name: "Arlene McCoy",
      price: "$ 1,000",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718278552/Rectangle_7_1_lpxtgu.svg",
      artname: "Metal Wave",
      avatarUrl:
        "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718278730/Ellipse_10_1_mkytlw.svg",
      name: "Eleanor Pena",
      price: "$ 600",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718278888/Rectangle_7_2_y97mpx.svg",
      artname: "Food Chain",
      avatarUrl:
        "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718278809/Ellipse_10_2_lqlnew.svg",
      name: "Darrell Steward",
      price: "$ 1000",
    },
    {
      id: 4,
      imageUrl:
        "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718278888/Rectangle_7_2_y97mpx.svg",
      artname: "Pet Dog",
      avatarUrl:
        "https://res.cloudinary.com/dspkk9qlz/image/upload/v1718279032/Group_32_xh4auo.svg",
      name: "Ronald Richards",
      price: "$ 500",
    },
  ];

  return (
    <div className="w-full px-10  flex flex-col">
      <Nav />

      <div className="flex flex-row  mx-auto   mt-28">
        {/* ------------cards----------- */}
        <div className="mx-auto w-1/2 flex flex-col items-start justify-start border-r-2 border-[#F25B38]  gap-6   mb-9">
          <h1 className=" text-3xl font-[400]">Cart & Checkout</h1>

          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-row h-44 w-10/12 rounded-md border border-[#f5dcdc]"
            >
              <img src={item.image} alt="bgone" className="w-44 h-44" />
              <div className="relative my-auto mx-4 flex      w-[495px]   ">
                <div className="flex flex-col  h-auto gap-2">
                  <p className="text-[#8AC5C7] font-[14px] font-Poppins">{item.title}</p>
                  <p className="text-[#8F8F8F] font-[16px] font-Poppins">{item.rights}</p>
                  <div className="flex flex-row gap-2">
                    <p className="text-[#8F8F8F] w-[104px] h-[20px] text-sm font-[400]">
                      Physical artwork
                    </p>
                    <img
                      className="w-[17px] h-[17px]"
                      src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718118918/help_x9fybk.svg"
                      alt="question"
                    />
                  </div>
                  <div className="flex flex-row gap-4 items-center w-[144px]">
                    <button className="bg-[#f8eae7] w-[32px] h-[32px] text-[#F25B38] rounded-md border border-[#D9D9D9]">
                      {item.botton1}
                    </button>
                    <p>1</p>
                    <button className="bg-[#f8eae7] w-[32px] h-[32px] text-[#F25B38] rounded-md border border-[#D9D9D9]">
                      {item.botton2}
                    </button>
                  </div>
                </div>
                <div className="absolute right-0 flex flex-col justify-between h-[145px]  items-end ">
                  <img
                    className="w-[19.21px] h-[19.21px]"
                    src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718120486/delete_iwoglq.svg"
                    alt="delete"
                  />
                  <h3 className="pr-2">
                    USD <span className="text-[#F25B38]">$ {item.price}</span>
                  </h3>
                </div>
              </div>
            </div>
          ))}

          <h2 className=" justify-start items-start w-full text-[14px] font-Poppins">
            Summary
          </h2>

          <div className="flex flex-col w-full h-[272px]  border border-[#D9D9D9] gap-9 justify-center">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between pt-5 pl-6">
                <div className="gap-5 flex text-[#8F8F8F]">
                  <p>Soul Mountain</p> <p>x1</p>{" "}
                </div>

                <h3 className="pr-6">
                  USD <span className="text-[#F25B38]">$ 200</span>
                </h3>
              </div>

              <div className="flex flex-row justify-between pt-5  pl-6">
                <div className="gap-5 flex text-[#8F8F8F]">
                  <p>Crimson Sky</p> <p>x2</p>{" "}
                </div>

                <h3 className="pr-6">
                  USD <span className="text-[#F25B38]">$ 2000</span>
                </h3>
              </div>

              <div className="flex flex-row justify-between pt-5  pl-6">
                <div className="gap-5 flex text-[#8F8F8F]">
                  <p>Glassified</p> <p>x1</p>{" "}
                </div>

                <h3 className="pr-6">
                  USD <span className="text-[#F25B38]">$ 1000</span>
                </h3>
              </div>
            </div>
            {/* <img
              className="w-[666px] pl-4"
              src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718124070/Line_34_kalpt4.svg"
              alt=""
            /> */}
            <div className="flex h-[40px] flex-row justify-between   pl-6  items-center">
              <h1 className="pb-4 text-2xl">Total</h1>
              <h3 className="pr-6 pb-4 text-2xl">
                USD <span className="text-[#F25B38]">$ 1000</span>
              </h3>
            </div>
          </div>
        </div>

        {/* -----------------payment card-------------- */}
        {paymentOptionState == "previousCard" && <PaymentState_1 />}

        {paymentOptionState == "newCard" && <PaymentState_2 />}
      </div>

      <div className="flex flex-col w-full h-auto mx-auto mt-10 pt-10 border-t-2 border-[#F25B38]  ">
        <h1 className="font-Poppins text-[30px]  py-2">Artworks you may like </h1>

        <div className="w-full grid grid-cols-3 justify-around ">
          {details.map((detail) => (
            <div
              key={detail.id}
              className="flex flex-col my-6 w-[351px] h-[288px] border border-[#f25a386a] rounded-md"
            >
              <div
                className="flex justify-between p-2 relative object-cover w-[351px] h-[216px]"
                style={{ backgroundImage: `url(${detail.imageUrl})` }}
              >
                <img
                  src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718269585/shopping_cart_vxqsls.svg"
                  alt="Image 1"
                  className="h-[32px] w-[32px] absolute left-3 top-4"
                />
                <p className="text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 font-[400]">
                  {detail.artname}
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2 mt-3 ml-3">
                  <img src={detail.avatarUrl} alt="" />
                  <p>{detail.name}</p>
                </div>
                <div className="flex items-center gap-6 mt-3 mr-5 justify-between">
                  <img
                    src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718276229/Group_1818_hipuuo.svg"
                    alt=""
                  />
                  <p className="text-[#F25B38]">{detail.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" py-10 flex item-center justify-center w-full gap-6  ">
          <img
            className="w-[47.86px] h-[47.86px]"
            src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1716894980/loadmorei_zc92qi.svg"
            alt=""
          />

          <button className="text-[#F25B38] text-[24px]">See more Art ?</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
