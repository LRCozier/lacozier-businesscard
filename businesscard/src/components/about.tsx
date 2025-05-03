import EmailLink from "./emaillink";
import Profilepicture from '../assets/Profilepicture.jpg';
import { useState, useEffect } from "react";

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
        const response = await fetch('/data.json');
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
    <h1>{data.name}</h1>
    <img src={Profilepicture} alt="Profile Picture Luke Rudderham-Cozier" className="profilepic"/>
    <h2>{data.title}</h2>
    <p>{data.about}</p>
    <div className="buttons-row">
      <div>
      <button className="btn" onClick={() => window.open()}>Developer Portfolio</button>
      <button className="btn" onClick={() => window.open()}>Personal Traiing</button>
      </div>
    <div className="buttons-row-2">
      <EmailLink
        email={data.email}
        subject={data.emailSubject}
        body={data.emailBody}
        newTab={true}>
          {data.emailButtonText}
      </EmailLink>
    </div>
    </div>
    <p></p>
    </section>
    </>
  )
}

export default About;