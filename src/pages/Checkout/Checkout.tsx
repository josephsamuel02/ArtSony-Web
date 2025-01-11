/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Nav from "../../components/NavBar/Nav";
import { PaymentState_1, PaymentState_2 } from "./PaymentState";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCartItem, GetUserCart, UpdateCartItem } from "../../Redux/Cart";
import { AppDispatch } from "../../Redux/store";

const Checkout = () => {
  const dispatch = useDispatch<AppDispatch | any>();
  const userId = useSelector((state: any) => state.Auth.User?.User?.userId);
  const shop_artworks = useSelector((state: any) => state.ShopArtworks?.shop_artworks.data);

  const my_cart = useSelector((state: any) => state.Cart?.cart.data);

  const [paymentOptionState] = useState("previousCard");
  const [cart, setCart] = useState(my_cart);
  const [shopArtwork, setShopArtwork] = useState(shop_artworks);

  const updateCart = (data: any) => {
    dispatch(UpdateCartItem({ userId: data.userId, product: { ...data } }));
    console.log(data);
  };

  const deleteItem = (data: any) => {
    dispatch(
      DeleteCartItem({
        userId: data.userId,
        product: { artwork_id: data.artwork_id, price: data.price, quantity: data.quantity },
      })
    );
  };

  const getMyCart = () => {
    dispatch(GetUserCart({ userId: userId }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getMyCart(), [userId]);
  useEffect(() => {
    setCart(my_cart);
    setShopArtwork(shop_artworks);
    // console.log(my_cart);
  }, [my_cart, shop_artworks]);
  return (
    <div className="w-full px-10  flex flex-col">
      <Nav />

      <div className="flex flex-row mx-auto mt-28">
        {/* ------------cards----------- */}
        <div className="mx-auto w-1/2 flex flex-col items-start justify-start border-r-2 border-[#F25B38]  gap-6   mb-9">
          <h1 className=" text-3xl font-[400]">Cart & Checkout</h1>

          {cart.products &&
            cart.products.map((d: any, i: any) => (
              <div
                key={i}
                className="flex flex-row py-2 h-44 w-11/12 rounded-md border border-[#f5dcdcd7] shadow-md hover:shadow-xl"
              >
                <img
                  src={d.thumbnail && d.thumbnail}
                  alt="bg"
                  className="w-56 h-40 object-cover "
                />
                <div className="relative my-3 mx-4 flex w-[495px] ">
                  <div className="flex flex-col h-auto gap-2">
                    <p className="text-[#2a9094] font-[14px] font-Poppins">{d.artwork_name}</p>
                    <p className="text-[#8F8F8F] font-[16px] font-Poppins">{d.rights}</p>
                    <div className="flex flex-row gap-2">
                      <p className="text-[#575757] w-[104px] h-[20px] text-sm font-[400]">
                        {d.artwork_type}
                      </p>
                      <img
                        className="w-[17px] h-[17px]"
                        src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718118918/help_x9fybk.svg"
                        alt="question"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-center w-[144px]">
                      <button
                        className="bg-[#eee9e8] hover:bg-[#f1d2cc]  w-[28px] h-[28px] text-[#F25B38] rounded-lg border border-[#D9D9D9]"
                        onClick={() =>
                          d.quantity > 1 &&
                          updateCart({ ...d, quantity: d.quantity > 1 ? d.quantity - 1 : 1 })
                        }
                      >
                        -
                      </button>
                      <p className="text-sm">{d.quantity}</p>
                      <button
                        className="bg-[#eee9e8] hover:bg-[#f1d2cc] w-[28px] h-[28px] text-[#F25B38] rounded-lg border border-[#D9D9D9]"
                        onClick={() => updateCart({ ...d, quantity: d.quantity + 1 })}
                      >
                        +
                      </button>
                    </div>
                    <h3 className="pr-2 mt-auto ">
                      <span className="text-[#240d08] text-sm">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "NGN",
                        }).format(d.price)}
                      </span>
                    </h3>
                  </div>
                  <div className="absolute top-0 right-0 flex flex-col justify-between h-[145px] items-end ">
                    <div className="p-2 bg-white hover:bg-[#e0e0e0] rounded-full">
                      <img
                        className="w-[15px] h-[15px]"
                        src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718120486/delete_iwoglq.svg"
                        alt="delete"
                        onClick={() => deleteItem(d)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

          <h2 className=" justify-start items-start w-full text-[14px] font-Poppins">
            Summary
          </h2>

          <div className="flex flex-col w-full h-[272px]  border border-[#D9D9D9] gap-9 justify-center">
            <div className="flex flex-col">
              {cart.products &&
                cart.products.map((d: any, i: number) => (
                  <div className="flex flex-row justify-between pt-5 pl-6" key={i}>
                    <div className="gap-5 flex text-[#8F8F8F]">
                      <p>{d.artwork_name}</p> <p>X{d.quantity}</p>
                    </div>

                    <h3 className="pr-6">
                      <span className="text-[#130704] text-sm">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "NGN",
                        }).format(d.price * d.quantity)}
                      </span>
                    </h3>
                  </div>
                ))}
            </div>
            {/* <img
              className="w-[666px] pl-4"
              src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718124070/Line_34_kalpt4.svg"
              alt=""
            /> */}
            <div className="flex h-[40px] flex-row justify-between   pl-6  items-center">
              <h1 className="pb-4 text-2xl">Total</h1>
              <h3 className="pr-6 pb-4 text-2xl">
                <span className="text-[#F25B38] text-xl">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "NGN",
                  }).format(cart.total_price)}
                </span>
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
          {shopArtwork &&
            shopArtwork.map((d: any, i: number) => (
              <div
                key={i}
                className="flex flex-col my-6 w-[351px] h-[288px] border border-[#f25a382d] shadow-lg hover:shadow-xl rounded-lg"
              >
                <div
                  className="flex justify-between p-2 relative object-cover w-[351px] h-[216px]"
                  style={{ backgroundImage: `url(${d.images[0]})` }}
                >
                  <img
                    src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718269585/shopping_cart_vxqsls.svg"
                    alt="Image 1"
                    className="h-[32px] w-[32px] absolute left-3 top-4"
                  />
                  <p className="text-white text-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4  font-Raleway ">
                    {d.artwork_name}
                  </p>
                </div>
                <div className="flex justify-between bg-white rounded-b-xl">
                  <div className="flex items-center gap-2 mt-3 ml-3">
                    <img
                      src={d.user.profile_img}
                      alt=""
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <p className="text-[#464646]">{d.user.user_name}</p>
                  </div>
                  <div className="flex items-center gap-6  mr-4 justify-between">
                    <img
                      src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718276229/Group_1818_hipuuo.svg"
                      alt=""
                    />
                    <p className="text-[#F25B38]">NGN {d.price}</p>
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
