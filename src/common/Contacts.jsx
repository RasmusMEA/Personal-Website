import './Contacts.css';

import GithubLogo from '../logos/github-mark-white.svg';
import LinkedInLogo from '../logos/linkedin.svg';
import MailLogo from '../logos/mail.svg';
import MailOpenLogo from '../logos/mail-open-fill.svg';
import ResumeLogo from '../logos/resume-thick.svg';
import Resume from '../media/resume.pdf';

function Contacts( { DarkMode=false } ) {
    return (
        <ul id="contacts" class="hidden">
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