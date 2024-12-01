/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMyShopArtworks } from "../../Redux/ShopArtworks";
import { AppDispatch } from "../../Redux/store";

export const Store = () => {
  const dispatch = useDispatch<AppDispatch>();
  const User = useSelector((state: any) => state.User.my_profile.data);
  const artworkData = useSelector((state: any) => state.ShopArtworks.my_shop_artwork.data);

  const [artwork, setArtwork] = useState(artworkData);

  useEffect(() => {
    const getArtwork = async () => {
      dispatch(GetMyShopArtworks(User?.userId));
      setArtwork(artworkData);
    };
    getArtwork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex px-6 items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[80px]">
        {artwork.map((d: any, i: any) => (
          <div
            className="w-[320px] bg-white mx-auto rounded-lg cursor-default  transform transition-transform duration-300 hover:scale-105"
            key={i}
          >
            <img
              src={d.images[0]}
              alt=""
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="w-full h-auto py-3 bg-white flex flex-row rounded-b-lg border-x-2 border-b border-[#83828133]">
              <p className="px-4 text-left font-poppins text-[14px]">{d.artwork_name}</p>
              <h1 className="px-3 ml-auto justify-right text-[#F25B38]">${d.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
