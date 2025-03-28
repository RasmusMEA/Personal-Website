import '../../css/Hero.css';
import '../../css/Common.css';
import styles from './gpu-vegetation.module.css';

import Background from '../../media/gpu-vegetation.gif'

function GpuVegetation() {
    return (
        <div className={styles.gpuVegetation}>
            <img class="background fade-bottom" src={Background} alt="Background" style={{ height: "70vh" }} />
            <div class="half-width">
                <div style={{ paddingTop: "20vh" }}>
                    <h1 class="title">GPU-Based Real-Time Procedural Distribution of Vegetation on Procedural Virtual Terrains</h1>
                    <h3 style={{ paddingBottom: "5vh", width: "80%", margin: "auto" }}>
                        This project is a Unity tool that allows for the real-time procedural distribution 
                        of vegetation on large-scale virtual terrains, with consideration of both abiotic 
                        and biotic factors from a heightmap. It does this by computing a moisture map and 
                        distributing vegetation in layers from largest to smallest plants, with the ability 
                        to adjust parameters such as moisture, temperature, and slope.
                    </h3>
                </div>

                <div style={{ marginTop: "5vh", marginBottom: "2vh" }}>
                    <h1 class="title" style={{ fontSize: "4rem" }}>Updates</h1>
                </div>
                
                <div style={{ marginTop: "5vh", marginBottom: "5vh" }}>
                    <h1 class="title" style={{ fontSize: "4rem" }}>Motivation Behind Project</h1>
                    <p>
                        
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GpuVegetation;
