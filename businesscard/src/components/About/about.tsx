import EmailLink from "./emaillink";

const About = () => {

  return(
    <>
    <section className="section-about">
    <h1>Luke Rudderham-Cozier</h1>
    <h2>Front End Engineer</h2>
    <div className="buttons-row">
    <button className="btn" onClick={() => window.open()}>Developer Portfolio</button>
    <button className="btn" onClick={() => window.open()}>Personal Traiing</button>
    <div className="buttons-row-2">
      <EmailLink
        email='lukerudderhamcozier@gmail.com'
        subject='Can We Talk?'
        body='Hey Luke,' 
        children={undefined}>
      </EmailLink>
    </div>
    </div>
    <p></p>
    </section>
    </>
  )

}

export default About;