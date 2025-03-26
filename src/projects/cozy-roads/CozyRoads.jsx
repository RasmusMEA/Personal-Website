import '../../components/Hero.css';
import './cozy-roads.css';
import '../../common/Common.css';

import Background from '../../media/cozy-roads.gif'
import PlayArrow from './play-arrow.png';

function CozyRoads() {
    return (
        <div>
            <img class="background fade-bottom" src={Background} alt="Background" style={{ height: "70vh" }} />
            <div class="half-width">
                <div style={{ paddingTop: "20vh" }}>
                    <h1 class="title">Cozy Roads</h1>
                    <h3 style={{ paddingBottom: "5vh", width: "80%", margin: "auto" }}>
                        Cozy Roads is an isometric puzzle game where players have to meet 
                        the demands of an ever-growing town by building roads and managing 
                        traffic. Players must plan ahead and build roads to connect 
                        houses, schools, markets, and other buildings to keep the town running 
                        smoothly. The game features a variety of buildings and challenges 
                        players to think strategically to keep the the residents happy.
        
                    </h3>
                    <div class="description-grid">
                        <div>
                            <h2>Relaxing Vibe</h2>
                            <p>
                                With isometric perspective and low-poly art style, 
                                the game offers players a cozy and engaging experience 
                                as players navigate the complexities of urban planning.
                            </p>
                        </div>
                        <div>
                            <h2>Strategic</h2>
                            <p>
                                Players have to play wisely regarding their the tile-placing strategy. 
                                Traffic jam would occur in no time if you hesitate a second!
                            </p>
                        </div>
                        <div>
                            <h2>Explorative</h2>
                            <p>
                                Explore and gain a wide range of assets in the rush hour mode. 
                                Decorate your city in the endless urban mode with these aesthetics 
                                or historical building.
                            </p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a class="play-button" href="/Personal-Website/play/cozy-roads" target="_blank" rel="noreferrer">
                            <img src={PlayArrow} alt="Play" /> Play Now
                        </a>
                    </div>
                </div>
                
                <div style={{ marginTop: "10vh" }}>
                    <h1 class="title" style={{ fontSize: "4rem" }}>How To Play</h1>
                    <div class="description-grid" style={{ marginBottom: "4vh" }}>
                        <div>
                            <h2>Controls</h2>
                            <p>
                                Hold left click to place tiles, hold right click to remove them.
                                Keep an eye out for and manage available tiles in the bottom left corner.
                            </p>
                        </div>
                        <div>
                            <h2>Objective</h2>
                            <p>
                                Connect all resident buildings to all types of commercial or public facilities.
                                Keep the traffic flow smooth and avoid traffic jams.
                            </p>
                        </div>
                        <div>
                            <h2>Scoring</h2>
                            <p>
                                Earn points for every travel completed. Use points to unlock assets in endless urban mode.
                            </p>
                        </div>
                    </div>
                    <div class="split-card" style={{ display: "flex", justifyContent: "space-between" }}>
                        <div class="card">
                            <img src={Background} alt="Background" />
                            <div class="img-overlay">
                                <h2>RUSH HOUR MODE</h2>
                                <p>
                                    Connecting buildings on a grid map to facilitate car movements 
                                    of from departure building and the destination. Additional buildings 
                                    are randomly spawned on the map as the game progresses, try to balance 
                                    the expansion with managing traffic flow. 
                                </p>
                            </div>
                        </div>
                        <div style={{ width: "1px", backgroundColor: "white" }} />
                        <div class="card">
                            <img src={Background} alt="Background" />
                            <div class="img-overlay" style={{ height: "100%" }}>
                                <h2>ENDLESS URBAN MODE</h2>
                                <p>
                                    Enjoy the freedom to build the city without time constraint 
                                    and specific objectives. Customize the urban environment with 
                                    aesthetic cityscapes and different road layouts. Use points 
                                    earned from rush hour mode to unlock assets in endless urban mode.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: "5vh", marginBottom: "2vh" }}>
                    <h1 class="title" style={{ fontSize: "4rem" }}>Updates</h1>
                </div>
                
                <div style={{ marginTop: "5vh", marginBottom: "5vh" }}>
                    <h1 class="title" style={{ fontSize: "4rem" }}>Motivation Behind Project</h1>
                    <p>
                        Cozy Roads started from a game design course, where groups of students
                        are tasked to develop a game prototype with motivated choices of game mechanics and
                        art style based on target audience. Whilst the prototype was never fully developed 
                        due to time constraints, the idea and prototype of a relaxing city-building game was 
                        well-received and taught the importance of user experience and game design principles.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CozyRoads;
