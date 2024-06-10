import React from "react";


// Card component
export const Card: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="card relative mb-4 w-full gap-2" style={{ width: "233.79px", height: "151.15px" }}>
      <img src={image} alt="Card" className="w-full h-full object-cover" style={{ borderRadius: '10px' }} />
    </div>
  );
};

// Profilemain component
export const Moodboarddata = () => {
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
<div className="flex flex-col items-center w-full">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center">
    {groupData.map((group, index) => (
      <div
        key={index}
        className="group-container items-center justify-center"
        style={{ width: "450px", height: "360px" }}
      >
        <div className="grid grid-cols-2">
          {group.images.map((image, i) => (
            <Card key={i} image={image} />
          ))}
        </div>
        <div className="group-name text-center">
          <p className="text-lg font-semibold">{group.groupName}</p>
        </div>
      </div>
    ))}
  </div>
</div>




  
  );
};

export default Moodboarddata;
