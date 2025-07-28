import React from 'react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProfileProps } from '../types/data';


const Profile: React.FC<ProfileProps> = ({ profilePicture, name, title, location }) => {
  return (
    <>
    <section className='section-card'>
    <div className='profilecard'>
      <div className='profile-pic-border'>
        <img src={profilePicture} alt={`Profile Picture ${name}`} className="profilepic" />
      </div>
        <h1>{name}</h1>
        <h2>{title.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < title.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}</h2>
        <p className='profile-location'>
          <FontAwesomeIcon icon={faLocationDot} />
          {location}
        </p>
      </div>
    </section>
    </>
  );
};

export default Profile;