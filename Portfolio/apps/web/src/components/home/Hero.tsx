import './Hero.css'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className="hero">
            <h1>Eytan Benittah</h1>
            <h2>Software engineering student: Technion - Israel Institute of Technology</h2>
            <p>Outside the classroom I train calisthenics, build things with code, and study Torah—I'm happiest when I'm deep in tech and learning something new.</p>
            <div className="hero-buttons">
                <Link to="/projects">
                    <button className="projects-button">View Projects</button>
                </Link>
                <button className="contact-button" >Contact Me</button>
            </div>
        </div>
    )
}
export default Hero;