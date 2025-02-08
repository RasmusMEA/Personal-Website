import './Hero.css';

function Hero() {
    return (
        <section class="hero">
            <video src="https://cuono.dev/video1.mp4" type="video/mp4" autoPlay muted loop></video>
            <div class="hero-content">
                <h1>Rasmus Michael Emanuel Andersson</h1>
                <h3>Personal Website</h3>
            </div>
        </section>
    );
}

export default Hero;
