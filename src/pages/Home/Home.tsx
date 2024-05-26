import React from 'react';
import UserPost from '../UserPost/UserPost';
import { UserArtProps } from '../../constants';
 // Adjust the path accordingly

function Home() {

  return (
    <div>
      <p>Home</p>
      <UserPost  items={UserArtProps} />
    </div>
  );
}

export default Home;
