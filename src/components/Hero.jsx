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
                    <p>
                        I focus mainly on computer graphics, but regardless of what I try my hands on
                        I always enjoy giving it my best. I am a team player and a quick learner who 
                        loves to overcome challenges with my problem solving abilites, learning from 
                        others and improving on knowledge every day.
                    </p>
                </div>
                <img src={ProfileIMG} alt="Profile" />
            </div>
        </section>
    );
}

export default Hero;
