import { useState, useEffect, JSX } from 'react';
import Profile from './components/profile';
import About from './components/about'; 
import Connect from './components/connect'; 
import { CardData } from './types/data';
import './App.css';
import Button from './components/button';
import { faEnvelope, faCode, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import EmailLink from './components/emaillink';

function App(): JSX.Element {
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await fetch();//add API URL

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: CardData = await response.json();
        setCardData(data);
      } catch (e: any) {
        console.error("Failed to fetch card data:", e);
        setError(e);
        // Fallback if API fails
        setCardData({
          name: "Luke Rudderham-Cozier",
          title: "Software Developer\nPersonal Trainer",
          profilePicture: "http://localhost/path/to/your/assets/Profilepicture.jpg",
          about: "A results-driven professional consistently upholding high standards of excellence across all areas of work.",
          developerPortfolioUrl: "https://lrcozier.github.io/lacozier-devportfolio/",
          personalTrainingUrl: "PERSONAL_TRAINING_URL",
          email: "lrcozier@gmail.com",
          emailSubject: "Can We Talk?",
          emailBody: "Hey Luke,",
          emailButtonText: "Email Me!",
          developerPortfolioButtonText: "Developer Portfolio",
          personalTrainingButtonText: "Personal Training",
          socials: {
            instagram: "https://www.instagram.com/lacozierfitness/profilecard/?igsh=MXFrdHE0b24wMGlseA==",
            tiktok: "https://www.tiktok.com/@lacozierfitness?_t=ZN-8vugAgLd42o&_r=1",
            github: "https://github.com/LRCozier",
            linkedin: "https://www.linkedin.com/in/luke-rudderham-cozier-30205343/"
          },
          location: "Richmond Upon Thames, UK"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCardDetails();
  }, []);

  if (loading) {
    return <div className="loading-state">Loading your digital business card...</div>;
  }

  if (error && !cardData) {
    return <div className="error-state">Error: Could not load business card. Please try again later. ({error.message})</div>;
  }

  if (!cardData) {
    return <div className="no-data-state">No business card data available.</div>;
  }

  return (
    <div className="app-container">
      <Profile
        profilePicture={cardData.profilePicture}
        name={cardData.name}
        title={cardData.title}
        location={cardData.location || "Location not specified"}
      />

      <About
        about={cardData.about} />

      <div className="buttons-container">

        <EmailLink email={''} emailSubject={''} emailBody={''} emailButtonText={''}/>
        
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

      <Connect
        socials={cardData.socials}
      />
    </div>
  );
}

export default App;