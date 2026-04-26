import { useEffect } from 'react';
import "./ProjectPage.css"

const projects = [
    {
        title: "DevLog",
        description: "A personal developer journal app to track daily coding progress and goals.",
        tags: ["React", "TypeScript", "Firebase"],
        github: "#"
    },
    {
        title: "Portfolio",
        description: "My personal developer portfolio showcasing projects, skills, and contact info — built and deployed as a single-page app.",
        tags: ["React", "TypeScript", "Vite"],
        github: "#"
    },
    {
        title: "PathFinder",
        description: "A graph algorithm visualizer that animates BFS and DFS step by step.",
        tags: ["React", "TypeScript", "CSS Grid"],
        github: "#"
    },
    {
        title: "BudgetBuddy",
        description: "A personal finance tracker with monthly summaries and spending categories.",
        tags: ["React", "Node.js", "PostgreSQL"],
        github: "#"
    },
    {
        title: "MarkdownEditor",
        description: "A live markdown editor with real-time preview and local save support.",
        tags: ["React", "TypeScript"],
        github: "#"
    },
    {
        title: "ChatRoom",
        description: "A real-time multi-room chat application with user authentication.",
        tags: ["React", "Socket.io", "Node.js"],
        github: "#"
    },
    {
        title: "WeatherNow",
        description: "A weather dashboard that shows 7-day forecasts using a public weather API.",
        tags: ["React", "REST API", "CSS"],
        github: "#"
    },
    {
        title: "SortViz",
        description: "A sorting algorithm visualizer animating bubble, merge, and quick sort.",
        tags: ["React", "TypeScript"],
        github: "#"
    },
    {
        title: "CodeSnippets",
        description: "A personal snippet manager to save, tag, and search reusable code blocks.",
        tags: ["React", "Firebase", "TypeScript"],
        github: "#"
    },
    {
        title: "JobTracker",
        description: "A kanban-style board to track job applications through different stages.",
        tags: ["React", "TypeScript", "PostgreSQL"],
        github: "#"
    },
    {
        title: "QuizEngine",
        description: "A configurable quiz app that supports multiple choice and timed rounds.",
        tags: ["React", "TypeScript", "Node.js"],
        github: "#"
    },
    {
        title: "PortfolioGen",
        description: "A CLI tool that generates a static portfolio site from a JSON config file.",
        tags: ["Node.js", "TypeScript", "HTML/CSS"],
        github: "#"
    },
    {
        title: "ThreadSafe",
        description: "A multithreaded task queue implementation demonstrating concurrency patterns.",
        tags: ["C++", "Threads", "Systems"],
        github: "#"
    },
    {
        title: "MiniShell",
        description: "A lightweight Unix shell supporting piping, redirection, and background jobs.",
        tags: ["C", "Unix", "Systems"],
        github: "#"
    },
    {
        title: "RecipeBox",
        description: "A recipe saving app with ingredient scaling and a smart shopping list.",
        tags: ["React", "Node.js", "MongoDB"],
        github: "#"
    },
    {
        title: "FocusTimer",
        description: "A Pomodoro-style focus timer with session history and daily stats.",
        tags: ["React", "TypeScript"],
        github: "#"
    },
    {
        title: "LinkVault",
        description: "A bookmark manager that lets you organize and tag links into collections.",
        tags: ["React", "Firebase"],
        github: "#"
    },
    {
        title: "DataDiff",
        description: "A CLI tool that compares two CSV files and outputs a diff report.",
        tags: ["Python", "CLI"],
        github: "#"
    },
    {
        title: "ImageResizer",
        description: "A drag-and-drop batch image resizer that runs entirely in the browser.",
        tags: ["React", "Canvas API", "TypeScript"],
        github: "#"
    },
    {
        title: "MiniDB",
        description: "A toy relational database engine supporting basic SQL queries from scratch.",
        tags: ["C++", "Systems", "Algorithms"],
        github: "#"
    },
    {
        title: "EventBoard",
        description: "A campus event board where students can post and RSVP to local events.",
        tags: ["React", "Node.js", "PostgreSQL"],
        github: "#"
    },
    {
        title: "StudySync",
        description: "A collaborative study planner where groups can share notes and schedules.",
        tags: ["React", "Firebase", "TypeScript"],
        github: "#"
    }
];

export default function ProjectPage() {
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="featured-projects">
            <div className="projects-page-shell">
                <header className="projects-page-intro">
                    <h1>Featured Projects</h1>
                    <h2>A lot of ideas, but some are still under construction!</h2>
                </header>

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
            </div>
        </section>
    );
}