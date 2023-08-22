import './About.css'

const Projects = () => {
    return <div className="about-container">
        <div className="about-item">
            <div className='title-container'>
                <div className='about-title'>RL For Insulin Dosing</div>
                <div className='superscript'>Thesis</div>
            </div>
            <div className='about-description'>
                My undergraduate thesis dissertation for Mathematics and Engineering Program.<br />
                Simulated glucose-insulin interraction using non-linear dynamic modeling.<br />
                Applied state-space analysis to Q-Learning in simulated environment.<br />
                Awarded <a href="https://www.queensu.ca/mathstat/undergraduate/current-undergraduate/mthe/projects" target="_blank" rel="noopener noreferrer">Keyser Prize</a> for outstanding thesis. <br />
                <a href={'https://github.com/dnlmrtn/my-website/blob/master/src/media/Thesis.pdf'} download="Thesis-DM.pdf"> Download the PDF</a>
            </div>
        </div>
        <div className='vertical-container'>
            <div className='vertical'>
            </div>
        </div>
        <div className="about-item">
            <div className='title-container'>
                <div className='about-title'>Brain Computer Interface</div>
                <div className='superscript'>QMIND</div>
            </div>
            <div className='about-description'>
                Developed a BCI to allow hands-free binary control of a video game via blinking.<br />
                Applied signal processing and data smoothing techniques to EEG signals.<br />
                Tested a variety of machine learning architectures for classification.<br />
                SVM achieved CV accuracy of 94.4% for blink detection with an F1 score of 96.3%.<br />
                Demonstrated live at <a href="https://www.cucai.ca/" target="_blank" rel="noopener noreferrer">CUCAI</a><br />
                <a href="https://github.com/dnlmrtn/my-website/blob/master/src/media/BCI.pdf" download>Download the PDF</a>
            </div>
        </div>
        <div className='vertical-container'>
            <div className='vertical'>
            </div>
        </div>
        <div className="about-item">
            <div className='title-container'>
                <div className='about-title'>HVAC Project Manager</div>
                <div className='superscript'>Relectric</div>
            </div>
            <div className='about-description'>
                Designed battery enclosures and active cooling system for electric go kart.<br />
                Analyzed models via flow/temperature simulations in SOLIDWORKS.<br />
                Modeled and fabricated enclosures using sheet metal brake.<br />
                Provided bend/weld drawings to machinists.<br />
                <a href="https://www.queensrelectric.ca/" target="_blank" rel="noopener noreferrer">queensrelectric.ca</a>
            </div>
        </div>
    </div>
};

export default Projects;