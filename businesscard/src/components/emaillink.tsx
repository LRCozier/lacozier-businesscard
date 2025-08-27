import React from 'react';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from './button';
import { EmailMeProps } from '../types/data';

const EmailLink: React.FC<EmailMeProps> = ({ email, emailSubject, emailBody, emailButtonText }) => {
  const params = new URLSearchParams();
  if (emailSubject) {
    params.append('subject', emailSubject);
  }
  if (emailBody) {
    params.append('body', emailBody);
  }

  const mailtoLink = `mailto:${email}?${params.toString()}`;

  const finalMailtoLink = mailtoLink.replace(/\+/g, '%20');

  return (
    <Button
      icon={faEnvelope}
      text={emailButtonText}
      url={finalMailtoLink}
    />
  );
};

export default EmailLink;