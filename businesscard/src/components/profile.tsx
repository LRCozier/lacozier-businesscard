import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profilepicture from '../assets/Profilepicture.jpg';

const Profile = () => {

  return(
    <>
    <div className='profilecard'>
    <img src={Profilepicture} alt="Profile Picture Luke Rudderham-Cozier" className="profilepic" />
    <h1>Luke Rudderham-Cozier</h1>
    <h2>Software Developer<br></br>
    Personal Trainer</h2>
    <p className='profile-location'><FontAwesomeIcon icon={faLocationDot} />Richmond Upon Thames, UK</p>
    </div>
    </>
  )

}

export default Profile;