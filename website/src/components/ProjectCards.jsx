import './Features.css';
import './Common.css';

// Import all project files
const projects = require.context('../projects', true, /\.json$/).keys().map(projectPath => require(`../projects/${projectPath.replace('./', '')}`));

function ProjectCard(project) {
    return (
        <li><a class="project-listing" href={ project.link } target="_blank" rel="noreferrer">
            <div class="background" />
            <img class="project-img" loading="lazy" src={ project.img } alt="Project Image" />
            <div class="img-overlay">
                <div class="round-buttons">
                    <a href="https://cuono.dev" target="_blank" rel="noreferrer">
                        <img src="https://cuono.dev/favicon.ico" alt="Project Icon" />
                    </a>
                    <a href="https://cuono.dev" target="_blank" rel="noreferrer">
                        <img src="https://cuono.dev/favicon.ico" alt="Project Icon" />
                    </a>
                </div>
                <div id="project-tags" class="tags bottom">
                    { project.tags.map(tag => <span> { tag } </span>) }
                </div>
            </div>
            <div class="project-description">
                <h2> { project.title } </h2>
                <time dateTime={ project.date }> { Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(project.date)) } </time>
                <p> { project.description } </p>
                <div id="tools" class="tags">
                    { project.tools.map(tag => <span> { tag } </span>) }
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
                { projects.map(project => ProjectCard(project)) }
            </ul>
        </section>
    );
}

export default ProjectCards;
