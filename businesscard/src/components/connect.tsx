import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTiktok,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { ConnectProps } from '../types/data';

const Connect: React.FC<ConnectProps> = ({ socials }) => {
  if (!socials) {
    console.warn("Connect component received no 'socials' prop.");
    return null;
  }

  return (
    <div className='connect-section'>
      <ul className='socials-list'>
        {socials.instagram && (
          <li>
            <a href={socials.instagram} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} className="social-icon-svg" />
            </a>
          </li>
        )}
        {socials.tiktok && (
          <li>
            <a href={socials.tiktok} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faTiktok} className="social-icon-svg" />
            </a>
          </li>
        )}
        {socials.github && (
          <li>
            <a href={socials.github} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} className="social-icon-svg" />
            </a>
          </li>
        )}
        {socials.linkedin && (
          <li>
            <a href={socials.linkedin} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} className="social-icon-svg" />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Connect;