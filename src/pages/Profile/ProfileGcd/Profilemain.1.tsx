
import { Card } from '../Profilepage/Profilemain';

export function Profilemain() {
    const cardsData = [
        {
            image: 'cards/card1.svg',
            name: 'Aurora',
            loveIconCount: 2,
            eyeIconCount: 10
        },
        {
            image: 'cards/card2.svg',
            name: 'Forest Dream',
            loveIconCount: 2,
            eyeIconCount: 10
        },
        {
            image: 'cards/card3.svg',
            name: 'Ice Cold',
            loveIconCount: 2,
            eyeIconCount: 10
        },
        {
            image: 'cards/card4.svg',
            name: 'I Am Pink',
            loveIconCount: 2,
            eyeIconCount: 10
        },
        {
            image: 'cards/card5.svg',
            name: 'X-ray Mushroom',
            loveIconCount: 2,
            eyeIconCount: 10
        },
        {
            image: 'cards/card6.svg',
            name: 'Red Tiger',
            loveIconCount: 2,
            eyeIconCount: 10
        }
    ];

    return (
        <div className="flex items-center justify-center" style={{ width: '1728px' }}>
            <div className="grid grid-cols-3 gap-[80px]">
                {cardsData.map((cardData, index) => (
                    <Card key={index} image={cardData.image} name={cardData.name} loveIconCount={cardData.loveIconCount} eyeIconCount={cardData.eyeIconCount} />
                ))}
            </div>
        </div>
    );
}
