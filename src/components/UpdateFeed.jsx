import '../css/Common.css';
import styles from '../css/Update.module.css';

// Import all projects and media files
const projects = require.context('../projects', true, /\.json$/).keys().map(projectPath => require(`../projects/${projectPath.replace('./', '')}`));
const media = require.context('../media', true, /\.(png|jpe?g|svg|webp|gif)$/);

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
}

function UpdatePost(post) {
    return (
        <li className={ styles.updatePost }>
            <img loading="lazy" alt={ post.title } src={ post.img.includes('http') ? post.img : media(`./${post.img}`) } />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h2>{ truncateText(post.title, 70) }</h2>
                <time dateTime={ post.date } style={{ fontSize: "0.75rem" }}> 
                    { Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(post.date)) } 
                </time>
                <p> { truncateText(post.description, 290) } </p>
            </div>
        </li>
    );
}

function UpdateFeed(filter) {

    // Filter projects that have updates
    var posts = projects.filter(post => post.updates);

    // Filter posts by tag
    if (filter.filter !== "all") {
        posts = posts.filter(post => post.slug === filter.filter);
    }

    // Flatten the posts array and sort by date
    posts = posts.flatMap(post => post.updates);
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <section id="updates" style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <h1 className="section-header">Updates</h1>
            <ul>
                { posts.map(post => <UpdatePost key={ post.slug } { ...post } />) }
            </ul>
        </section>
    );
}

export default UpdateFeed;
