import "./TechStack.css"

export default function TechStack() {
  return (
    <section className="tech-stack">
      <h2>Tech Stack</h2>
      <p className="tech-stack-intro">
        Here are the tools I use to build and ship full-stack web apps.
      </p>

      <ul className="tech-stack-groups">
        <li>
            <strong>Languages:</strong> Python, C, C#, C++
        </li>
        <li>
          <strong>Frontend:</strong> React, TypeScript, Vite, React Router
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Express, TypeScript
        </li>
        <li>
          <strong>Database:</strong> PostgreSQL, MongoDB
        </li>
        <li>
          <strong>DevOps:</strong> Docker
        </li>
        <li>
          <strong>Tooling:</strong> Git, GitHub
        </li>

      </ul>

      <p className="tech-stack-learning">
        <strong>Learning next:</strong> PostgreSQL, Docker
      </p>
    </section>
  )
}