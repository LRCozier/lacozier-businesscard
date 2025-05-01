import EmailLink from "./emaillink";
import Profilepic from '../assets/Profile picture.jpg';

const About = () => {

  return(
    <>
    <section className="section-about">
    <h1>Luke Rudderham-Cozier</h1>
    <img src={Profilepic} alt="Profile Picture Luke Rudderham-Cozier" className="profilepic"/>
    <h2>Front End Engineer & Personal Trainer</h2>
    <p>A results-driven professional consistently upholding high standards of excellence across all areas of work.</p>
    <div className="buttons-row">
      <div>
      <button className="btn" onClick={() => window.open()}>Developer Portfolio</button>
      <button className="btn" onClick={() => window.open()}>Personal Traiing</button>
      </div>
    <div className="buttons-row-2">
      <EmailLink
        email='lukerudderhamcozier@gmail.com'
        subject='Can We Talk?'
        body='Hey Luke,'
        newTab={true}>
          Email Me!
      </EmailLink>
    </div>
    </div>
    <p></p>
    </section>
    </>
  )

}

export default About;