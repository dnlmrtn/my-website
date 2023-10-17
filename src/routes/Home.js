import React, { useState } from 'react'; // Import useState hook
import { Link } from 'react-router-dom';
import '../App.css'
import './Home.css';
import '../fonts/fonts.css'

const Home = () => {

    const [_, setTheme] = useState({
        textColor: '#008080ff',
        backgroundColor: '#ffffff',
    });

    const updateTheme = (textColor, backgroundColor) => {
        setTheme({ textColor, backgroundColor });
        document.documentElement.style.setProperty('--text-color', textColor);
        document.documentElement.style.setProperty('--background-color', backgroundColor);
    };

    return (
        <div className="home-container">
            <div className="round-rectangle">
                <div className='rectangle-container'>
                    <div className="heading">
                        Daniel Martin
                    </div>
                    <div className="content-container">
                        <div className='text-left'>Age</div>
                        <div className='text-right'>22</div>
                    </div>

                    <div className="content-container">
                        <div className='text-left'>Degree</div>
                        <div className='text-right'>Math &amp; Eng</div>
                    </div>
                    <div className="content-container" style={{ borderBottom: '1px solid #000' }}>
                        <div className='text-left'>Working on</div>
                        <div className='text-right'>RecessD</div>
                    </div>
                    <div className='vertical-container'>
                        <div className='vertical'>
                        </div>
                    </div>
                    <div className="text-left">
                        Finished BASc. at Queen’s in
                        Mathematics &amp; Engineering, Applied Mechanics option.
                        Building ML-based control systems at RecessD, a startup developing wireless industrial automation.<br />
                    </div>
                    <div className='vertical-container'>
                        <div className='vertical'>
                        </div>
                    </div>
                    <div className="text-left">
                        See the navbar to learn about my work history, passion projects, and personal interests. Github, LinkedIn, and site repo are linked in the footer.
                    </div>
                    <div className='vertical-container'>
                        <div className='vertical'>
                        </div>
                    </div>
                    <div className="text-left">Pick your favourite theme in the bottom left. <br /><br /><br /></div>
                </div>
            </div>
        </div >

    );
};

export default Home;
