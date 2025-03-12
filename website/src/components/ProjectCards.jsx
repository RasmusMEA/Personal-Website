import './Features.css';
import './Common.css';

const projects = [
    {
        title: 'Project 1',
        description: 'Project 1 Description',
        img: 'https://images.unsplash.com/photo-1569144157591-c60f3f82f137',
        date: '2021-09-01',
        tags: ['AI', 'NLP', 'Text Analysis'],
        tools: ['Python', 'TensorFlow', 'Keras'],
        link: 'https://cuono.dev',
    }
];

function ProjectCard(project) {
    return (
        <li><a class="project-listing" href="https://cuono.dev" target="_blank" rel="noreferrer">
            <div class="background" />
            <img class="project-img" loading="lazy" src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137" alt="Project Screenshot" />
            <div class="img-overlay">
                <div class="round-buttons">
                    <a href="https://cuono.dev" target="_blank" rel="noreferrer">
                        <img src="https://cuono.dev/favicon.ico" alt="Project Icon" />
                    </a>
                    <a href="https://cuono.dev" target="_blank" rel="noreferrer">
                        <img src="https://cuono.dev/favicon.ico" alt="Project Icon" />
                    </a>
                </div>
                <div class="tags bottom">
                    <span> AI </span>
                    <span> NLP </span>
                </div>
            </div>
            <div class="project-description">
                <h2> GPU-Based Real-Time Procedural Distribution of Vegetation </h2>
                <time dateTime="2021-09-01"> September 1, 2021 </time>
                <p> The AI product utilizes advanced NLP algorithms to understand and interpret human language,
                    enabling it to accurately process and analyze text-based inputs.
                </p>
                <div class="tags">
                    <span> AI </span>
                    <span> NLP </span>
                    <span> Text Analysis </span>
                </div>
            </div>
        </a></li>
    );
}

function ProjectCards() {
    return (
        <section id="Projects" class="half-width">
            <h1 class="section-header"> Latest Projects </h1>
            <ul class="project-list">
                { projects.map(project => <ProjectCard project={project} />) }
            </ul>
        </section>
    );
}

export default ProjectCards;
