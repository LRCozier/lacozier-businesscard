import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmailLink = (props: { email: any; subject: string; body: string; children: any; newTab: boolean}) => {
  const email = props.email;
  const subject = props.subject || '';
  const body = props.body || '';
  const children = props.children;
  const newTab = true;

  let params = '';

  if (subject || body) {
    params = '?';
  }

  if (subject) {
    params += 'subject=' + encodeURIComponent(subject);
  }

  if (body) {
    if (subject) {
      params += '&';
    }
    params += 'body=' + encodeURIComponent(body);
  }

  const mailtoLink = 'mailto:' + email + params;

  const handleClick = () => {
    if (newTab){
      window.open(mailtoLink, '_blank')
    } else {
      window.location.href = mailtoLink;
    }
  }

  return (
    <button onClick={handleClick} className="mail">
      <FontAwesomeIcon icon={faEnvelope} />  {children}
    </button>
  );
};

export default EmailLink;