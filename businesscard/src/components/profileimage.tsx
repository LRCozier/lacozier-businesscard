import React from 'react';
import { ProfileImageProps } from '../types/data';

const ProfileImage: React.FC<ProfileImageProps> = ({ profilePicture, name }) => {
  return (
    <div className='profile-image-container'>
      <div className='profile-pic-border'></div>
      <img src={profilePicture} alt={`Profile Picture ${name}`} className="profile-pic" />
    </div>
  );
};

export default ProfileImage;