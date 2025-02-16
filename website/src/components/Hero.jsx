import './Hero.css';
import './Common.css';

function Hero() {
    return (
        <section id="hero">
            <video src="https://cuono.dev/video1.mp4" type="video/mp4" autoPlay muted loop></video>
            <div class="hero-content half-width">
                <div>
                    <h1>Rasmus M E Andersson</h1>
                </div>
                <img src="https://cuono.dev/favicon.ico" alt="Personal Image"></img>
            </div>
        </section>
    );
}

export default Hero;
