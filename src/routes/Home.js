import React, { useState } from 'react'; // Import useState hook
import './Home.css';
import '../fonts/fonts.css'

const Home = () => {
    const [bodyColor, setBodyColor] = useState('#edffe0');

    const changeBodyColor = (color) => {
        setBodyColor(color);
        document.body.style.backgroundColor = color;
    };

    return (
        <div className="home-container">
            <div className="column column-1">
                <div className="profile-container"> {/* Added this div for the vertical line */}
                    <div className="round-rectangle" style={{ backgroundColor: bodyColor }}>
                        <div className="heading">
                            Daniel <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Martin
                        </div>
                    </div>
                    <br />
                    <br />

                    <div className="info-section">
                        <div className="content-container">
                            <div className='content-left'>Age</div>
                            <div className='content-right'>22</div>
                        </div>
                        <div className="content-container">
                            <div className='content-left'>Degree</div>
                            <div className='content-right'>Math &amp; Eng</div>
                        </div>
                        <div className="content-container">
                            <div className='content-left'>Working on</div>
                            <div className='content-right'>RecessD</div>
                        </div>
                        <div className="content-container">
                            <div className='content-left'>Fav. Food</div>
                            <div className='content-right'>Tacos</div>
                        </div>
                        <div className="content-container">
                            <div className='content-left'>Fav Quote</div>

                            <div className='content-right'></div>
                        </div>
                        <div className="content-container">
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='info-section'>
                        <div className='quote'>
                            "What I cannot create I do not understand."
                        </div>
                        <div className='quote-author'>
                            Richard Feynman
                        </div>

                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="column column-2">
                <div className="content">
                    <br /><br /><br /><br />
                    Finished BASc. at Queen’s in <br />
                    <br />
                    Math &amp; Engineering, Applied Mechanics option.<br />
                    <br />
                    Currently implementing ML-based control systems at RecessD, a startup developing wireless building automation.<br />
                    <br />
                    To see more work history,<br /> hit About Me.<br />
                    <br />
                    To see passion projects,<br /> see Projects.<br />
                    <br />
                    To get to know me,<br /> check out Personal.<br />
                    <br />
                    Or you can just reach out,<br />
                    I don’t bite.<br />
                    <br />

                </div>
            </div>
            <div className="separator"></div>
            <div className="column column-3">
                <button onClick={() => changeBodyColor('#edffe0')}>Set Color to #edffe0</button>
                <button onClick={() => changeBodyColor('#fbfeeb')}>Set Color to #fbfeeb</button>
            </div>
        </div >
    );
};

export default Home;
