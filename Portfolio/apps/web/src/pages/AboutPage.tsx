import "./AboutPage.css"

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-page-shell">
        <header className="about-page-intro">
          <h1>About Me</h1>

          <h2>
            Focused on building scalable software systems and advancing towards AI infrastructure.
          </h2>
        </header>

        <div className="about-page-content">
          <p>
            I’m a software engineering student focused on building systems that are not just functional, but scalable and well-designed. I work across the stack, combining clean frontend experiences with solid backend architecture.
          </p>

          <p>
            My main toolkit includes JavaScript, React, Node.js, and modern databases like MongoDB and Firebase. I also work with Python and am expanding into AI and infrastructure, with a focus on understanding how systems operate at a deeper level.
          </p>

          <p>
            I build projects with intent—developer tools, algorithm visualizers, and full-stack applications with authentication and persistent data. I care about writing code that is efficient, maintainable, and structured for growth.
          </p>

          <p>
            I’m continuously pushing toward higher-level engineering, with the goal of working in demanding, high-performance environments and specializing in AI systems and infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}