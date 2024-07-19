import Frontend from './Frontend';
import Backend from './Backend';
import './Skills.css'
const Skills = () => {
    return (
        <div className="skills section" id="skills">
            <h2 className="section__title">
                Skills
            </h2>
            <span className="section__subtitle">My tecnical level</span>
            <div className="skills__container container">
                <Frontend />
                <Backend />
            </div>
        </div>
    )
}

export default Skills