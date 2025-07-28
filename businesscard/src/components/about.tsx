import React from 'react';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutProps } from '../types/data';

const About: React.FC<AboutProps> = ({ about }) => {
  if (!about) {
    return null;
  }

  return (
    <>
      <section className="section-card">
        <h3><FontAwesomeIcon icon={faUser} />  About</h3>
          <p>{about}</p>
      </section>
    </>
  );
};

export default About;