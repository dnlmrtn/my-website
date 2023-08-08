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
                Developing machine learning closed-loop control for industrial IoT systems.<br />
                Global energy savings ~$100 000, CO2 reduction of ~1200kg per annum. <br />
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
                <div className='about-title'>Engineering Intern.</div>
                <div className='superscript'> Formula Solutions Inc. </div>
            </div>
            <div className='about-description'>
                Designing automated manufacturing line for aerospace carbon fiber components.<br />
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
                <div className='about-title'>Drone Photographer.</div>
                <div className='superscript'> Self Employed </div>
            </div>
            <div className='about-description'>
                Freelance work capturing photo/video for residential and commercial clients.<br />
                Using adobe software to edit high quality videos.<br />
                Creative direction in video planning process.<br />
                Project management and outreach to clients.
            </div>
        </div>
        <div className='vertical-container'>
            <div className='vertical'>
            </div>
        </div>
    </div >
};

export default About;