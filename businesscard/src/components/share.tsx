import {faShare} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShareCard = () => {


  return(
    <>
    <div className='buttons-container'>    
      <button>
        <h4><FontAwesomeIcon icon={faShare} />Share</h4>
      </button>
    </div>
    </>
  )
}

export default ShareCard;