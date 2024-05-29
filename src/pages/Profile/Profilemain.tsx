import React from 'react';
import { FaHeart, FaEye } from 'react-icons/fa'; // Importing the heart and eye icons
import { Profilemain } from './Profilemain.1';

export const Card: React.FC<{ image: string; name: string; loveIconCount: number; eyeIconCount: number }> = ({ image, name, loveIconCount, eyeIconCount }) => {
    return (
        <div className="card w-[475px] h-[360px] border border-gray-300 relative opacity-100">
            <img src={image} alt={name} className="w-full h-64 object-cover" />
            <div className="p-4 flex justify-between items-center text-black bg-white bg-opacity-50">
                <h2 className="text-lg font-semibold">{name}</h2>
                <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                        <FaHeart className="text-orange-500" />
                        <span>{loveIconCount}k</span>
                    </span>
                    <span className="flex items-center space-x-1">
                        <FaEye className="text-orange-500" />
                        <span>{eyeIconCount}k</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Profilemain;

