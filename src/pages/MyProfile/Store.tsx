export const Store = () => {
  const cardsData = [
    {
      image: "public/cards/fireflies.svg",
      name: "Fire Flies",
      amount: " 100",
      showIcon: true,
    },
    {
      image: "public/cards/Beaming lights.svg",
      name: "Beaming lights",
      amount: " 1000",
      showIcon: false,
    },
    {
      image: "public/cards/Goldrain.svg",
      name: "Gold rain",
      amount: " 200",
      showIcon: true,
    },
    {
      image: "public/cards/Cyber punk.svg",
      name: "Cyber punk",
      amount: " 1000",
      showIcon: false,
    },
    {
      image: "public/cards/White out.svg",
      name: "White out",
      amount: " 700",
      showIcon: false,
    },
    {
      image: "public/cards/White out2.svg",
      name: "White out",
      amount: "2000",
      showIcon: false,
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-3 gap-[80px]">
        {cardsData.map((d, i) => (
          <div className="w-[360px] bg-white mx-auto" key={i}>
            <img src={d.image} alt="" className="w-full h-[200px] object-cover" />
            <div className="w-full h-auto py-3 bg-white flex flex-row rounded-b border-x-2 border-b border-[#F25B3833]">
              <p className="px-4 text-left font-poppins text-[14px]">{d.name}</p>
              <h1 className="px-3 ml-auto justify-right text-[#F25B38]">${d.amount}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
