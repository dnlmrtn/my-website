import React, { useState } from 'react'; // Import useState hook

const Footer = () => {
    const [_, setTheme] = useState({
        textColor: '#008080ff',
        backgroundColor: '#ffffff',
    });

    const updateTheme = (textColor, backgroundColor) => {
        setTheme({ textColor, backgroundColor });
        document.documentElement.style.setProperty('--text-color', textColor);
        document.documentElement.style.setProperty('--background-color', backgroundColor);
    };
    const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim();

    return (
        <div className='footer'>
            <div className='footer-left'>
                <div className="color-row">
                    <div className="color-circle" style={{ borderColor: "#000000", backgroundColor: "#eae2cc" }} onClick={() => updateTheme("#000000", "#eae2cc")}></div>
                    <div className="color-circle" style={{ borderColor: "#000000", backgroundColor: "#b5c6b5" }} onClick={() => updateTheme("#000000", "#b5c6b5")}></div>
                    <div className="color-circle" style={{ borderColor: "#000000", backgroundColor: "#f76694" }} onClick={() => updateTheme("#000000", "#f76694")}></div>
                    <div className="color-circle" style={{ borderColor: "#eae2cc", backgroundColor: "#000000" }} onClick={() => updateTheme("#eae2cc", "#000000")}></div>
                    <div className="color-circle" style={{ borderColor: "#b5c6b5", backgroundColor: "#000000" }} onClick={() => updateTheme("#b5c6b5", "#000000")}></div>
                    <div className="color-circle" style={{ borderColor: "#f76694", backgroundColor: "#000000" }} onClick={() => updateTheme("#f76694", "#000000")}></div>
                </div>
            </div>
            <div className='footer-center'>
                <a href='https://github.com/dnlmrtn' target='_blank' rel="noreferrer">
                    GitHub
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href='https://www.linkedin.com/in/daniel-martin-0787/' target='_blank' rel="noreferrer">
                    LinkedIn
                </a>
            </div>
            <div className='footer-right'>
                <a href='https://github.com/dnlmrtn/my-website' target='_blank' rel="noreferrer">
                    22.08.2022
                </a>
            </div>


        </div>
    );
};

export default Footer;