import './Hero.css';
import './Common.css';

import ProfileIMG from '../media/profile.jpg';

function Hero() {
    return (
        <section id="hero">
            <video src="https://cuono.dev/video1.mp4" type="video/mp4" autoPlay muted loop />
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
