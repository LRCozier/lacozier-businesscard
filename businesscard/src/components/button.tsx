import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonProps } from '../types/data';

const Button: React.FC<ButtonProps> = ({ icon, text, url }) => {
  if (!text || !url) {
    console.warn("DynamicButton requires 'text' and 'url' props.");
    return null;
  }

  return (
    <button className="btn" onClick={() => window.open(url, '_blank', 'noopener noreferrer')}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {text}
    </button>
  );
};

export default Button;