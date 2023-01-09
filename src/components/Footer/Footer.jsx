import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-left">
          <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>
        </div>
        <div className="footer-right">
          <FontAwesomeIcon icon={faFacebookSquare} />
          <FontAwesomeIcon icon={faInstagramSquare} />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
