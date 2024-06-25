'use client';

import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";





interface UserArtProps {
  items:{
    id: string;
    imageUrl: string;
    name: string;
    location: string;
    category: string;
    imgUrl:string;
    picUrl?:string;  
    photoUrl?:string;
    profession:string;
  }[]

}

const UserPost = (props:UserArtProps) => {
  return (
    <div>
   <br />
      <div className="grid grid-rows-4 grid-flow-col gap-4 justify-center">
        {props.items.map((item) => (
          <div key={item.id}>
              <Link  to={`/userdetails/${item.id}`} state={{item}}>
            <img src={item.imageUrl} alt={item.category}
            width={"290px"}
             />
            <div className="flex gap-3 items-center border-2 border-t-0 py-1.5 justify-center border-customOrange rounded-br rounded-bl border-y border-x ">
              <img src={item.imgUrl}/>
              <p>{item.name}</p>
            <FontAwesomeIcon icon={faHeart} style={{color:'#F25B38'}}/>
            <p>3K</p>
            <FontAwesomeIcon icon={faEye} style={{color:'#F25B38'}}/>
            <p>1.1k</p>
            </div>
            </Link>
          </div>

        ))}

      </div>
     
    </div>
  );
};

export default UserPost;