import '../css/Projects.css';
import '../css/Common.css';
import { Link } from 'react-router-dom';

// Import all project files and media files
const projects = require.context('../projects', true, /\.json$/).keys().map(projectPath => require(`../projects/${projectPath.replace('./', '')}`));
const media = require.context('../media', true, /\.(png|jpe?g|svg|webp|gif)$/);

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
}

function ProjectCard(project) {
    return (
        <li><Link className="project-listing" to={ project.slug ? `/${project.slug}` : project.external }>
            <div className="blurred-background" />
            <img className="project-img" loading="lazy" src={ project.img.includes('http') ? project.img : media(`./${project.img}`) } alt={ project.title } />
            <div className="img-overlay" style={{ aspectRatio: "16/9" }}>
                <div className="round-buttons">
                    { project.github &&
                        <a href={ project.github } target="_blank" rel="noreferrer">
                            <img src={ media(`./logos/github-mark-white.svg`) } alt="GitHub Icon" />
                        </a>
                    }
                    { project.external &&
                        <a href={ project.external } target="_blank" rel="noreferrer">
                            <img src={ media(`./logos/external-link-white.svg`) } alt="External Link Icon" />
                        </a>
                    }
                </div>
                <div id="project-tags" className="tags bottom">
                    { project.tags.map(tag => <span> { tag } </span>) }
                </div>
            </div>
            <div className="project-description">
                <h2> { project.title } </h2>
                <time dateTime={ project.date } style={{ fontSize: "0.875rem" }}> { Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(project.date)) } </time>
                <p> { truncateText(project.description, 260) } </p>
                <div id="tools" className="tags">
                    { project.tools.map(tag => <span> { tag } </span>) }
                </div>
            </div>
        </Link></li>
    );
}

function ProjectCards() {

    // Sort projects by date
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <section id="projects">
            <h1 className="section-header"> Projects </h1>
            <ul className="project-list">
                { projects.map(project => <ProjectCard key={ project.slug ? project.slug : project.external } { ...project } />) }
            </ul>
        </section>
    );
}

export default ProjectCards;
