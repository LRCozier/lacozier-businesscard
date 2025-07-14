export interface CardData {
  name: string;
  title: string;
  profilePicture: string;
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

export interface HeaderProps {
  profilePicture: string;
  name: string;
  title: string;
}

export interface MainContentProps {
  about: string;
  email: string;
  emailSubject: string;
  emailBody: string;
  emailButtonText: string;
  developerPortfolioUrl: string;
  developerPortfolioButtonText: string;
  personalTrainingUrl: string;
  personalTrainingButtonText: string;
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