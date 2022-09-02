import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
            <i><FontAwesomeIcon icon={faSquareTwitter} /></i>
            <i><FontAwesomeIcon icon={faSquareFacebook} /></i>
            <i><FontAwesomeIcon icon={faSquareInstagram} /></i>
            <i><FontAwesomeIcon icon={faSquareGithub} /></i>
            </div>
        </footer>
    )
}