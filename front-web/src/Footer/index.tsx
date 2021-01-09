import { ReactComponent as YoutubeIcon } from "./youtube.svg";
import { ReactComponent as LinkedinIcon } from "./linkedin.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";

import "./styles.css"

function Footer() {
    return (
      <footer className="main-footer">
          App desenvolvido durante a 2ª ed. do evento Semana Dev Superior
          <div className="footer-icons">
            <a href="youtube" target="_new">
                <YoutubeIcon />
            </a>

            <a href="linkedin" target="_new">
                <LinkedinIcon />
            </a>

            <a href="instragram" target="_new">
                <InstagramIcon />
            </a>
          </div>
      </footer>      
    )
}

export default Footer;