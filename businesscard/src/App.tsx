import { useState, JSX } from 'react';
import Profile from './components/profile';
import Connect from './components/connect';
import { CardData } from './types/data';
import './App.scss';
import Button from './components/button';
import { faCode, faDumbbell, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import EmailLink from './components/emaillink';
import profilepic from './assets/profilepic.jpg';
import data from './data.json';
import ThemeSwitcher from './components/themeswitcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function App(): JSX.Element {
  const [cardData] = useState<CardData>(data as CardData);

  return (
    <div className="app-container">
      <ThemeSwitcher />

      <div className="main-content-wrapper">
        <Profile
          profilePicture={profilepic}
          name={cardData.name}
          title={cardData.title}
          location={cardData.location || "Location not specified"}
        />

        <div className="text-content-wrapper">
          <h1 className="desktop-only-name">{cardData.name}</h1>
          <h2 className="desktop-only-title">{cardData.title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < cardData.title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}</h2>
          <p className='desktop-only-location'>
            <FontAwesomeIcon icon={faLocationDot} />&nbsp;
            {cardData.location || "Location not specified"}
          </p>

          <div className="buttons-container">
            <EmailLink email={cardData.email} emailSubject={cardData.emailSubject} emailBody={cardData.emailBody} emailButtonText={cardData.emailButtonText}/>
            <Button
              icon={faCode}
              text={cardData.developerPortfolioButtonText}
              url={cardData.developerPortfolioUrl}
            />
            <Button
              icon={faDumbbell}
              text={cardData.personalTrainingButtonText}
              url={cardData.personalTrainingUrl}
            />
          </div>

          <Connect socials={cardData.socials} />
        </div>
      </div>
    </div>
  );
}

export default App;