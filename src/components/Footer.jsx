import '../css/Footer.css';
import '../css/Common.css';
import '../css/Contacts.css';

import Contacts from './Contacts';

function Footer() {
    return (
        <footer id="footer">
            <div className="divider" />
            <div id="content" className="half-width">
                <h4> @RasmusMEA </h4>
                <h4> 
                    Latest Updated: <time dateTime={ "2025-04-09" }> 
                        { Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date("2025-04-09")) } 
                    </time> 
                </h4> 
                <Contacts />
            </div>
        </footer>
    );
}

export default Footer;
