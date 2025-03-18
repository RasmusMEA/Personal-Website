import './Footer.css';
import '../common/Common.css';
import '../common/Contacts.css';

import Contacts from '../common/Contacts';

function Footer() {
    return (
        <footer id="footer">
            <div class="divider" />
            <div id="content" class="half-width">
                <p> @RasmusMEA </p>
                <Contacts />
            </div>
        </footer>
    );
}

export default Footer;
