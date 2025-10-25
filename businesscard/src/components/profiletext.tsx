import React from 'react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProfileTextProps } from '../types/data';

const ProfileText: React.FC<ProfileTextProps> = ({ name, title, location }) => {
  return (
    <div className='profile-text-content'>
      <h1>{name}</h1>
      <h2>{title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < title.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}</h2>
      <p className='profile-location'>
        <FontAwesomeIcon icon={faLocationDot} />&nbsp;
        {location}
      </p>
    </div>
  );
};

export default ProfileText;