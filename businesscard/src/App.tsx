import { useState, JSX } from 'react';
import ProfileImage from './components/profileimage';
import ProfileText from './components/profiletext';
import Connect from './components/connect';
import { CardData } from './types/data';
import './App.scss';
import Button from './components/button';
import { faCode, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import EmailLink from './components/emaillink';
import profilepic from './assets/profilepic.jpg';
import data from './data.json';
import ThemeSwitcher from './components/themeswitcher';

function App(): JSX.Element {
  const [cardData] = useState<CardData>(data as CardData);

  return (
    <div className="app-container">
      <ThemeSwitcher />

      <div className="main-content-wrapper">
        <ProfileImage profilePicture={profilepic} name={cardData.name} />

        <div className="text-content-wrapper">
          <ProfileText
            name={cardData.name}
            title={cardData.title}
            location={cardData.location || "Location not specified"}
          />

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