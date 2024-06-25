
import React from 'react';
import { useLocation } from 'react-router-dom';
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


const UserPostDetail: React.FC = () => {
 
  const location = useLocation();
  const item = (location.state as { item: Item })?.item;

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className='flex flex-row bg-whitesmoke'>
        <div className=' scroll-mt-4 h-56 overflow'>
            <img src={item.imageUrl} alt={item.category} width="1020px" />
            <img src={item.imagesUrl} alt={item.category} width="1020px" />
        </div>
          <div className='  py-3 px-3.5 bg-white rounded-r-lg fixed right-3'>
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
                    <div className='bg-lightOrange py-2 text-customOrange rounded-md gap-1 flex flex-row justify-center items-center'>
                      <FontAwesomeIcon icon={faUserCircle} className='text-customOrange'/>
                      <button className='text-center'>Follow</button>
                    </div>
                    <div className=' flex flex-row py-2 text-orange-500 justify-center bg-lightOrange gap-1 rounded-md items-center'>
                      <FontAwesomeIcon icon={faMessage} className='text-customOrange'/>
                      <button className='text-center text-customOrange'>Message</button>
                    </div>
              </div>
              <hr className='py-3 mt-3'/>
              <div className='py-3'>
                        <p className='py-1'>{item.category}</p>
                        <p className='py-1'  style={{ color: 'rgba(255, 136, 108, 0.5)' }}>published 8th, November, 2022</p>
                <div className='flex flex-row gap-3 items-center py-1 cursor-pointer'>
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
                  <div className='flex flex-row items-center gap-7 justify-center space-x-30 cursor-pointer'>

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
                  <div className='flex flex-row gap-10 justify-center mt-40 cursor-pointer'>
                    <img src='/assets/Vector.svg' alt="svg" />
                    <img src='/assets/Vector1.svg' alt="svg" />
                    <img src='/assets/Vector2.svg' alt="svg" />
                    <img src='/assets/Vector3.svg' alt="svg" />
                  </div>
          </div>
    </div>
  );
};

export default UserPostDetail;
