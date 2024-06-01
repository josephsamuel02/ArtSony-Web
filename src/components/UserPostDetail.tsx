
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Item } from './types/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import { faRemove } from '@fortawesome/free-solid-svg-icons/faRemove';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder';
import { faShare } from '@fortawesome/free-solid-svg-icons/faShare';
import { faFlag } from '@fortawesome/free-solid-svg-icons/faFlag';

interface UserPostDetailParams {
  id: string;
}

const UserPostDetail: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const item = (location.state as { item: Item })?.item;

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className='flex flex-row '>
      <div className='mt-3 scroll-mt-4 h-56'>
          <img src={item.imageUrl} alt={item.category} width="800px" />
          <img src={item.imagesUrl} alt={item.category} width="800px" />
      </div>
      <div className=' mt-3 py-3 px-3.5 h-30 bg-white border-2 h-96'>
        <div className='flex flex-row items-center space-x-60'>
          <h3>Owner</h3>
          <FontAwesomeIcon icon={faRemove}/>
        </div>
          <div className='flex gap-3'>
            <img src={item.imgUrl}/>
            <div className='flex flex-col gap-0.5'>
            <h1>{item.name}</h1>
            <p>{item.profession}</p>
            </div>
          </div>
          <div className='flex flex-col mt-2 gap-2'>
            <div className='bg-orange-600 py-2 text-white rounded-md gap-1 flex flex-row justify-center items-center'>
              <FontAwesomeIcon icon={faUserCircle} style={{color:'white'}}/>
              <button className='text-center'>Follow</button>
            </div>
            <div className=' flex flex-row py-2 text-orange-500 justify-center bg-customOrange gap-1 rounded-md items-center'>
              <FontAwesomeIcon icon={faMessage} style={{color:'orange'}}/>
              <button className='text-center'>Message</button>
            </div>
          </div>
          <hr className='py-3 mt-3'/>
          <div>
            <p>{item.category}</p>
            <p className='#F25B38'>published 8th, November, 2022</p>
            <div className='flex flex-row gap-3 items-center'>
              <div className='flex flex-row gap-1 items-center'>
              <FontAwesomeIcon color='orange' icon={faEye}/>
              <p>40k</p>
              </div>
              <div className='flex flex-row gap-1 items-center'>
              <FontAwesomeIcon color='orange' icon={faHeart}/>
              <p>12k</p>
              </div>
              <div className='flex flex-row gap-1 items-center'>
              <FontAwesomeIcon color='orange' icon={faMessage}/>
              <p>10</p>
              </div>
            </div>
          </div>
          <hr className='py-3 mt-3'/>
          <div className='flex flex-row items-center gap-7 justify-center space-x-30'>

            <div className='border py-1 px-2 rounded-md'>
            <FontAwesomeIcon color='orange' icon={faFolder} />
            </div>
            <div className='border py-1 px-2 rounded-md'>
            <FontAwesomeIcon color='orange' icon={faShare} />
            </div>
            <div className='border py-1 px-2 rounded-md'>
             <FontAwesomeIcon color='orange' icon={faFlag} />
            </div>
          </div>
      </div>
    </div>
  );
};

export default UserPostDetail;
