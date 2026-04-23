import { useState } from "react"
import "./FeaturedProjects.css"
import { Link } from "react-router-dom"

const projects = [
    {
        "title": "DevLog",
        "description": "A personal developer journal app to track daily coding progress and goals.",
        "tags": ["React", "TypeScript", "Firebase"],
        "github": "#"
    },
    {
        "title": "PathFinder",
        "description": "A graph algorithm visualizer that animates BFS and DFS step by step.",
        "tags": ["React", "TypeScript", "CSS Grid"],
        "github": "#"
    },
    {
        "title": "MatrixLab",
        "description": "An interactive linear algebra tool for visualizing matrix operations, eigenvalues, and transformations in real time.",
        "tags": ["React", "TypeScript", "D3.js"],
        "github": "#"
    }
]

export default function FeaturedProjects() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const closePopup = () => setIsOpen(false);
    return (
        <section className="home-featured-projects">
            <h2>Featured Projects</h2>
            {isOpen && (
                <div className="home-projects-popup-overlay" role="dialog" aria-modal="true" aria-labelledby="projects-popup-title">
                    <div className="home-projects-popup-content">
                        <h3 id="projects-popup-title">A quick note before you explore</h3>
                        <p>
                            These projects are currently curated placeholders while I finalize live demos and full repositories.
                            The complete case studies are coming soon.
                        </p>
                        <button type="button" className="home-projects-popup-close" onClick={closePopup}>
                            Continue
                        </button>
                    </div>
                </div>
            )}
            
            <div className="home-projects-grid">
                {projects.map((project) => (
                    <div key={project.title} className="home-project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="home-project-tags">
                            {project.tags.map((tag) => (
                                <span key={tag} className="home-tag">{tag}</span>
                            ))}
                        </div>
                        <a href={project.github} className="home-github-link">View on GitHub →</a>
                    </div>
                ))}
            </div>
            <Link to="/projects" className="home-projects-link">Read more → Projects</Link>
        </section>
    )
}
