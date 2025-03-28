import '../css/Contacts.css';

import GithubLogo from '../media/logos/github-mark-white.svg';
import LinkedInLogo from '../media/logos/linkedin.svg';
import MailLogo from '../media/logos/mail.svg';
import MailOpenLogo from '../media/logos/mail-open-fill.svg';
import ResumeLogo from '../media/logos/resume-thick.svg';
import Resume from '../media/resume.pdf';

function Contacts( { DarkMode=false } ) {
    return (
        <ul id="contacts">
            <li><a href="https://github.com/RasmusMEA" target="_blank" rel="noopener noreferrer">
                <img src={GithubLogo} alt="Github" {...!DarkMode && {style: {filter: "invert(1)"}}} />
            </a></li>
            <li><a href="https://www.linkedin.com/in/rasmusmea/?locale=en_US" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInLogo} alt="LinkedIn" {...DarkMode && {style: {filter: "invert(1)"}}} />
            </a></li>
            <li><a id="MailLogo" href="mailto:rasan@kth.se" target="_blank" rel="noopener noreferrer">
                <img src={MailLogo} alt="Mail" {...DarkMode && {style: {filter: "invert(1)"}}} 
                onMouseOver={ e => e.currentTarget.src = MailOpenLogo } 
                onMouseOut={ e => e.currentTarget.src = MailLogo } />
            </a></li>
            <li><a href={Resume} target="_blank" rel="noopener noreferrer">
                <img src={ResumeLogo} alt="Resume" {...DarkMode && {style: {filter: "invert(1)"}}} />
            </a></li>
        </ul>
    );
}

export default Contacts;