import Profilepicture from '../assets/Profilepicture.jpg';
import { useState, useEffect } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface data {
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
}

const About = () => {

  const [data, setData] = useState<data | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData: data = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching business card data:", error);
        setData({
          name: "Default Name",
          title: "Default Title",
          about: "Default about text.",
          profilePicture: Profilepicture,
          developerPortfolioUrl: "#",
          personalTrainingUrl: "#",
          email: "default@example.com",
          emailSubject: "Default Subject",
          emailBody: "Default Body",
          emailButtonText: "Default Email",
          developerPortfolioButtonText: "Default Portfolio",
          personalTrainingButtonText: "Default Training",
        });
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }


  return(
    <>
    <section className="section-about">
    <div className="card-container">
      <p><FontAwesomeIcon icon={faUser} />{data.about}</p>
    </div>
    </section>
    </>
  )
}

export default About;