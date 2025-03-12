import './Features.css';
import './Common.css';

// Import all project files, images and logos
const projects = require.context('../projects', true, /\.json$/).keys().map(projectPath => require(`../projects/${projectPath.replace('./', '')}`));
const images = require.context('../images', true, /\.(png|jpe?g|svg|webp|gif)$/);
const logos = require.context('../logos', true, /\.(png|jpe?g|svg|webp|gif)$/);

function ProjectCard(project) {
    return (
        <li><a class="project-listing" href={ "" }>
            <div class="background" />
            <img class="project-img" loading="lazy" src={ project.img.includes('http') ? project.img : images(`./${project.img}`) } alt={ project.title } />
            <div class="img-overlay">
                <div class="round-buttons">
                    { project.github &&
                        <a href={ project.github } target="_blank" rel="noreferrer">
                            <img src={ logos(`./github-mark-white.svg`) } alt="GitHub Icon" />
                        </a>
                    }
                    { project.link &&
                        <a href={ project.link } target="_blank" rel="noreferrer">
                            <img src={ logos(`./external-link-white.svg`) } alt="External Link Icon" />
                        </a>
                    }
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

    // Sort projects by date
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <section id="Projects" class="half-width">
            <h1 class="section-header"> Projects </h1>
            <ul class="project-list">
                { projects.map(project => ProjectCard(project)) }
            </ul>
        </section>
    );
}

export default ProjectCards;
