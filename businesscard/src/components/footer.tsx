import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faTiktok,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <ul>
      <li><FontAwesomeIcon icon={faInstagram} /></li>
      <li><FontAwesomeIcon icon={faTiktok} /></li>
      <li><FontAwesomeIcon icon={faGithub} /></li>
      <li><FontAwesomeIcon icon={faLinkedin} /></li>
    </ul>
  );
};

export default Footer;