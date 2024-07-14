export const Moodboard = () => {
  const groupData = [
    {
      groupName: "Ocean Art",
      images: [
        "public/cards/rock.svg",
        "public/cards/ocean1.svg",
        "public/cards/ocean2.svg",
        "public/cards/danfo.svg",
      ],
    },
    {
      groupName: "Colours",
      images: [
        "public/cards/art1.svg",
        "public/cards/art2.svg",
        "public/cards/art3.svg",
        "public/cards/art4.svg",
      ],
    },
    {
      groupName: "Nature photographs",
      images: [
        "public/cards/nature1.svg",
        "public/cards/nature2.svg",
        "public/cards/nature3.svg",
        "public/cards/nature4.svg",
      ],
    },
    {
      groupName: "Ocean Art",
      images: [
        "public/cards/rock.svg",
        "public/cards/ocean1.svg",
        "public/cards/ocean2.svg",
        "public/cards/danfo.svg",
      ],
    },
  ];

  return (
    <div className=" w-full h-h-full    ">
      <div className=" h-full grid grid-cols-1 md:grid-cols-3 gap-4  ">
        {groupData.map((group, index) => (
          <div key={index} className="mx-4 relative w-[350px] h-[350px] ">
            <div className="w-[400.79px] h-[151px] grid grid-cols-2">
              {group.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt="Card"
                  className="w-full h-full object-cover rounded-sm"
                />
              ))}
              <p className="   w-full absolute bottom-[50px] left-0 right-0  text-[16px] text-center  font-Poppins font-semibold">
                {group.groupName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moodboard;
