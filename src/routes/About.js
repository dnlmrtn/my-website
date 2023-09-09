import './About.css'
import '../App.css'

const About = () => {
    return <div className="about-container">
        <div className="about-item">
            <div className='title-container'>
                <div className='about-title'>Backend Dev.</div>
                <div className='superscript'> RecessD Automation </div>
            </div>
            <div className='about-description'>
                Designing reinforcement learning feedback control for industrial IoT systems.<br />
                Saving energy cost ~$10 000, CO2 reduction of ~1200kg per annum. <br />
                Mechanical design for embedded hardware products.<br />
                Web development/UI design.<br />
                <a href="http://www.recessd.com" target="_blank" rel="noopener noreferrer">recessd.com</a>
            </div>
        </div>
        <div className='vertical-container'>
            <div className='vertical'>
            </div>
        </div>
        <div className="about-item">
            <div className='title-container'>
                <div className='about-title'>Engineering Intern</div>
                <div className='superscript'> Formula Solutions Inc. </div>
            </div>
            <div className='about-description'>
                Designed assembly line components for aerospace-grade carbon fiber parts.<br />
                Tested resin mixing equipment to ensure compliance with standards.<br />
                Modeled 3D printed fixtures for drill press, pneumatic shears. <br />
                Supervised installation of equipment on the factory floor.<br />
                <a href="https://www.formulasolutionsinc.com/" target="_blank" rel="noopener noreferrer">formulasolutionsinc.com</a>
            </div>
        </div>
        <div className='vertical-container'>
            <div className='vertical'>
            </div>
        </div>
        <div className="about-item">
            <div className='title-container'>
                <div className='about-title'>Drone Photographer</div>
                <div className='superscript'> Self Employed </div>
            </div>
            <div className='about-description'>
                Freelance work capturing photo/video for residential and commercial clients.<br />
                Documenting renovations, real estate listings, and personal showcases.<br />
                Creative direction in filming/editing process.<br />
                Project management and outreach to clients.
            </div>
        </div>
        <div className='vertical-container'>
            <div className='vertical'>
            </div>
        </div>
        <div className="about-item">
            <div className='title-container'>
                <div className='about-title'>Mathematics Tutor</div>
                <div className='superscript'> Self Employed </div>
            </div>
            <div className='about-description'>
                Tutoring services for unviersity math/physics coursework.<br />
                Operating through Queen's Eng Soc. and freelance work.<br />
                Uni Subjects: Calculus, Lin Alg., Fluid/Solid-Dynamics.<br />
                HS Subjects: Calc, Functions, Data Management, Physics.


            </div>
        </div>
        <br /><br /><br />
    </div >
};

export default About;