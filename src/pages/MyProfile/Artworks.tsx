/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { GetMyArtworks } from "../../Redux/FetchArtwork";

const Artwork = () => {
  const dispatch = useDispatch<AppDispatch>();
  const User = useSelector((state: any) => state.User?.my_profile?.data);
  const artworkData = useSelector((state: any) => state.ShopArtworks?.my_shop_artwork?.data);

  const [artwork] = useState<any>([]);

  useEffect(() => {
    const getArtwork = async () => {
      dispatch(GetMyArtworks(User?.userId));
      // setArtwork(artworkData);
      console.log(artworkData);
    };
    getArtwork();
  }, [User?.userId, artworkData, dispatch]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-3   ">
        {artwork &&
          artwork.map((d: any, i: any) => (
            <div
              className=" relative mx-6 my-10 w-[300px] h-auto rounded-md cursor-pointer  transform transition-transform duration-300 hover:scale-105 "
              key={i}
            >
              <img
                className="absolute z-10 w-6 mt-9 left-6"
                src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718107635/perm_media_kofzof.svg"
                alt="folder"
              />

              <img
                src={d.images[0]}
                alt={d.artwork_name}
                className=" w-full h-[180px] rounded-t-md object-cover"
              />

              <div className="p-3 flex justify-between items-center rounded border-b-2 border-x border-[#fa684733] text-black bg-white bg-opacity-50">
                <h2 className="text-[16px] font-Poppins ">{d.artwork_name}</h2>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <FaHeart className="text-[#F25B38]" />
                    <span className="text-Poppins text-[12px]">{d.likes}k</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FaEye className="text-[#F25B38]" />
                    <span className="text-Poppins text-[12px]">{d.views}k</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Artwork;
