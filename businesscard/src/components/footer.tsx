import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faTiktok,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <ul className='socials'>
      <a href='https://www.instagram.com/lacozierfitness/profilecard/?igsh=MXFrdHE0b24wMGlseA==' target='_blank'><li><FontAwesomeIcon icon={faInstagram} /></li></a>
      <a href='https://www.tiktok.com/@lacozierfitness?_t=ZN-8vugAgLd42o&_r=1' target='_blank'><li><FontAwesomeIcon icon={faTiktok} /></li></a>
      <a href='https://github.com/LRCozier' target='_blank'><li><FontAwesomeIcon icon={faGithub} /></li></a>
      <a href='https://www.linkedin.com/in/luke-rudderham-cozier-30205343/' target='_blank'><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
    </ul>
  );
};

export default Footer;