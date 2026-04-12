import "./FeaturedProjects.css"

const projects = [
    {
        title: "DevLog",
        description: "A personal developer journal app to track daily coding progress and goals.",
        tags: ["React", "TypeScript", "Firebase"],
        github: "#"
    },
    {
        title: "PathFinder",
        description: "A graph algorithm visualizer that animates BFS and DFS step by step.",
        tags: ["React", "TypeScript", "CSS Grid"],
        github: "#"
    }
]

export default function FeaturedProjects() {
    return (
        <section className="featured-projects">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.title} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map((tag) => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                        <a href={project.github} className="github-link">View on GitHub →</a>
                    </div>
                ))}
            </div>
        </section>
    )
}