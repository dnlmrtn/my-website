import React, { useState } from 'react'; // Import useState hook
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
                    <div className='text-left'><br /></div>
                    <div className="info-section">
                        <div className="content-container">
                            <div className='text-left'>Age</div>
                            <div className='text-right'>22</div>
                        </div>
                        <div className="content-container">
                            <div className='text-left'>Degree</div>
                            <div className='text-right'>Math &amp; Eng</div>
                        </div>
                        <div className="content-container">
                            <div className='text-left'>Working on</div>
                            <div className='text-right'>RecessD</div>
                        </div>
                        <div className="content-container">
                            <div className='text-left'>Fav. Food</div>
                            <div className='text-right'>Tacos</div>
                        </div>
                        <div className="content-container">
                            <div className='text-left'>Fav. Quote</div>

                            <div className='text-right'></div>
                        </div>
                    </div>
                    <div className='info-section'>
                        <div className='text-left'>
                            "What I cannot create I do not understand."
                        </div>
                        <div className='italic-text'>
                            Richard Feynman
                        </div>

                    </div>
                    <div className="text-left">
                        <br />
                        Finished BASc. at Queen’s in
                        Math &amp; Engineering, Applied Mechanics option.
                        Currently building ML-based control systems at RecessD, a startup developing wireless industrial automation.<br />
                        <br />
                        For work history, click About Me.<br />
                        For passion projects, hit Projects.<br />
                        For my interests, go to Personal.<br />
                        Feel free to reach out.
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Home;
