import "./FeaturedProjects.css"
import { Link } from "react-router-dom"

const projects = [
    {
        "title": "Timer App",
        "description": "Full-stack time tracking app with authentication and clock in/out.",
        "tags": ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Mongoose", "Nodemailer"],
        "github": "https://github.com/Eytan425/Timer-App"
    },
    {
        "title": "Eytan's Portfolio",
        "description": "Personal portfolio showcasing projects and skills.",
        "tags": ["React", "TypeScript", "CSS"],
        "github": "https://github.com/Eytan425/AI-Engineering-Path/tree/main/Portfolio"
    },
    {
        "title": "MatrixLab",
        "description": "An interactive linear algebra tool for visualizing matrix operations, eigenvalues, and transformations in real time.",
        "tags": ["React", "TypeScript", "D3.js"],
        "github": "#"
    }
]

export default function FeaturedProjects() {
    return (
        <section className="home-featured-projects">
            <h2>Featured Projects</h2>
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