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
        <div className="card-container">
          <p><FontAwesomeIcon icon={faUser} />{about}</p>
        </div>
      </section>
    </>
  );
};

export default About;