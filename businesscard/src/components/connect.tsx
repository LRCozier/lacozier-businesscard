import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTiktok,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { ConnectProps } from '../types/data';

const Footer: React.FC<ConnectProps> = ({ socials }) => {
  if (!socials) {
    console.warn("Footer component received no 'socials' prop.");
    return null;
  }

  return (
    <ul className='socials'>
      {socials.instagram && (
        <a href={socials.instagram} target='_blank' rel='noopener noreferrer'>
          <li><FontAwesomeIcon icon={faInstagram}/></li>
        </a>
      )}
      {socials.tiktok && (
        <a href={socials.tiktok} target='_blank' rel='noopener noreferrer'>
          <li><FontAwesomeIcon icon={faTiktok} /></li>
        </a>
      )}
      {socials.github && (
        <a href={socials.github} target='_blank' rel='noopener noreferrer'>
          <li><FontAwesomeIcon icon={faGithub} /></li>
        </a>
      )}
      {socials.linkedin && (
        <a href={socials.linkedin} target='_blank' rel='noopener noreferrer'>
          <li><FontAwesomeIcon icon={faLinkedin} /></li>
        </a>
      )}
    </ul>
  );
};

export default Footer;