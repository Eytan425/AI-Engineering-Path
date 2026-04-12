import { Link } from 'react-router-dom'
import './AboutTeaser.css'

export default function AboutTeaser() {
    return (
        <section className="about-teaser">
            <h2>About Me</h2>
            <p>Software engineering student at the Technion. I build things with code, train calisthenics, and study Torah. Always deep in something new.</p>
            <Link to="/about" className="about-link">Read more → About</Link>
        </section>
    )
}