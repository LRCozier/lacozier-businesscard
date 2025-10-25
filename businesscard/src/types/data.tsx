export interface CardData {
  name: string;
  title: string;
  profilePicture: string;
  location: string;
  about: string;
  developerPortfolioUrl: string;
  personalTrainingUrl: string;
  email: string;
  emailSubject: string;
  emailBody: string;
  emailButtonText: string;
  developerPortfolioButtonText: string;
  personalTrainingButtonText: string;
  socials: {
    instagram: string;
    tiktok: string;
    github: string;
    linkedin: string;
  };
}

export interface ProfileTextProps {
  name: string;
  title: string;
  location: string;
}

export interface ProfileImageProps {
  profilePicture: string;
  name: string;
}

export interface AboutProps {
  about: string;
}

export interface EmailMeProps{
  email: string;
  emailSubject: string;
  emailBody: string;
  emailButtonText: string;
}

export interface ConnectProps {
  socials: {
    instagram: string;
    tiktok: string;
    github: string;
    linkedin: string;
  };
}

export interface ButtonProps {
  icon?: import('@fortawesome/fontawesome-svg-core').IconDefinition;
  text: string;
  url: string;
}