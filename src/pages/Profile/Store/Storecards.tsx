import React from 'react';

export const Card: React.FC<{ image: string; name: string; amount: string; showIcon: boolean }> = ({ image, name, amount, showIcon }) => {
    return (
        <div className="card w-[475px] h-[360px] border border-gray-300 relative opacity-100">
            <img src={image} alt={name} className="w-full h-64 object-cover" />
            <div className="absolute top-0 left-0 w-full flex justify-between p-2">
                <img src="public/cards/carts.svg" alt="Image 1" className="h-[48px] w-[48px]" />
                <img src="public/cards/artson.svg" alt="Image 2" className="h-[24px] w-[24px]" />
            </div>
            <div className="p-4 flex justify-between items-center text-black bg-white bg-opacity-50">
                <h2 className="text-lg font-semibold">{name}</h2>
                <div className="flex items-center space-x-4">
                    {showIcon ? (
                        <span className="flex items-center space-x-2"> {/* Increased space between icon and amount */}
                            <img src="public/cards/sun.svg" alt="Icon" className="h-[19px] w-[19px] text-orange-500 " />
                            <span>{amount}</span>
                        </span>
                    ) : (
                        <span>{amount}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export const Profilemain = () => {
    const cardsData = [
        {
            image: 'public/cards/fireflies.svg',
            name: 'Fire Flies',
            amount: '$100',
            showIcon: true
        },
        {
            image: 'public/cards/Beaming lights.svg',
            name: 'Beaming lights',
            amount: '$1000',
            showIcon: false
        },
        {
            image: 'public/cards/Goldrain.svg',
            name: 'Gold rain',
            amount: '$200',
            showIcon: true
        },
        {
            image: 'public/cards/Cyber punk.svg',
            name: 'Cyber punk',
            amount: '$1000',
            showIcon: false
        },
        {
            image: 'public/cards/White out.svg',
            name: 'White out',
            amount: '$700',
            showIcon: false
        },
        {
            image: 'public/cards/White out2.svg',
            name: 'White out',
            amount: '$2000',
            showIcon: false
        }
    ];

    return (
        <div className="flex items-center justify-center" style={{ width: '1728px' }}>
            <div className="grid grid-cols-3 gap-[80px]">
                {cardsData.map((cardData, index) => (
                    <Card
                        key={index}
                        image={cardData.image}
                        name={cardData.name}
                        amount={cardData.amount}
                        showIcon={cardData.showIcon}
                    />
                ))}
            </div>
        </div>
    );
};

export default Profilemain;
