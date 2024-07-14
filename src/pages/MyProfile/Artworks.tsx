import { FaHeart, FaEye } from "react-icons/fa";

const Artwork = () => {
  const cardsData = [
    {
      image: "cards/card1.svg",
      name: "Aurora",
      likes: 2,
      views: 10,
    },
    {
      image: "cards/card2.svg",
      name: "Forest Dream",
      likes: 2,
      views: 10,
    },
    {
      image: "cards/card3.svg",
      name: "Ice Cold",
      likes: 2,
      views: 10,
    },
    {
      image: "cards/card4.svg",
      name: "I Am Pink",
      likes: 2,
      views: 10,
    },
    {
      image: "cards/card5.svg",
      name: "X-ray Mushroom",
      likes: 2,
      views: 10,
    },
    {
      image: "cards/card6.svg",
      name: "Red Tiger",
      likes: 2,
      views: 10,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-3   ">
        {cardsData.map((d, i) => (
          <div className="mx-6 my-10 w-[375px] h-[260px] rounded-md  relative  " key={i}>
            <div className="flex w-full h-64">
              <img
                src={d.image}
                alt={d.name}
                className="relative w-full h-64 rounded-t-md object-cover"
              />
              <img
                className="absolute z-10 w-6 mt-9 ml-6"
                src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1718107635/perm_media_kofzof.svg"
                alt="folder"
              />
            </div>

            <div className="p-4 flex justify-between items-center rounded border-b-2 border-x border-[#fa684733] text-black bg-white bg-opacity-50">
              <h2 className="text-[16px] font-Poppins ">{d.name}</h2>
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
