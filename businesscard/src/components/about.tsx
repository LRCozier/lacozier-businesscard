import EmailLink from "./emaillink";

const About = () => {

  return(
    <>
    <section className="section-about">
    <h1>Luke Rudderham-Cozier</h1>
    <h2>Front End Engineer</h2>
    <p>A results-driven professional consistently upholding high standards of excellence across all areas of work.</p>
    <div className="buttons-row">
    <button className="btn" onClick={() => window.open()}>Developer Portfolio</button>
    <button className="btn" onClick={() => window.open()}>Personal Traiing</button>
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