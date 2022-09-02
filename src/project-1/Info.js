import img from "../images/laura_smith.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Info() {
    return (
        <div className="header">
            <img className="profile-pic" src={img} />

            <section className="detail-section">
                <h1 className="name">Laura Smith</h1>
                <h3 className="job-title">Frontend Developer</h3>
                <h6 className="website">laurasmith.website</h6>
            </section>

            <div className="btn-container">
                <button className="email-btn"><i><FontAwesomeIcon icon={faEnvelope} /></i>Email</button>
                <button className="linkedIn-btn"><i><FontAwesomeIcon icon={faLinkedin} /></i>LinkedIn</button>
            </div>

           
        </div>
    )
}