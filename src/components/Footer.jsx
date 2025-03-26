import './Footer.css';
import '../common/Common.css';
import '../common/Contacts.css';

import Contacts from '../common/Contacts';

function Footer() {
    return (
        <footer id="footer">
            <div class="divider" />
            <div id="content" class="half-width">
                <h4> @RasmusMEA </h4>
                <h4> 
                    Latest Updated: <time dateTime={ "2025-03-26" }> 
                        { Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date("2025-03-26")) } 
                    </time> 
                </h4> 
                <Contacts />
            </div>
        </footer>
    );
}

export default Footer;
