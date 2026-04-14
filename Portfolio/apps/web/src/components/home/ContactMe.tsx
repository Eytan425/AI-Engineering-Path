import "./ContactMe.css"
import { Link } from "react-router-dom"

export default function ContactMe() {
  return (
    <section className="contact-me">
      <h2>Let's Connect!</h2>
      <p className="contact-me-intro">
        I’m looking for a full-stack software engineering role focused on building modern web applications.
      </p>

      <ul className="contact-info">
        <li>
          <strong>Email me → </strong>
          <a href="mailto:eytanbenittah@gmail.com">eytanbenittah@gmail.com</a>
        </li>

        <li>
          <strong>My GitHub → </strong>
          <a
            href="https://github.com/Eytan425"
            target="_blank"
            rel="noreferrer"
            aria-label="Eytan's GitHub profile (opens in a new tab)"
          >
            github.com/Eytan425
          </a>
        </li>
      </ul>

      <Link to="/contact" className="contact-link">
        For more contact information → Contact page
      </Link>
    </section>
  )
}