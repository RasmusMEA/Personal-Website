import './Hero.css';
import '../common/Common.css';

import ProfileIMG from '../media/profile.jpg';

function Hero() {
    return (
        <section id="hero">
            <div id="overlay" class="half-width">
                <div>
                    <h1>Rasmus Andersson</h1>
                    <h2>M.Sc. Student in Computer Science @ KTH, Royal Institute of Technology, Sweden</h2>
                </div>
                <img src={ProfileIMG} alt="Profile" />
            </div>
        </section>
    );
}

export default Hero;
