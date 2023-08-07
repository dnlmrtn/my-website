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
            <div className="color-row">
                <div className="color-circle" style={{ borderColor: "#008080", backgroundColor: "#fffad6" }} onClick={() => updateTheme("#008080", "#fffad6")}></div>
                <div className="color-circle" style={{ borderColor: "#008080", backgroundColor: "#f3fef8" }} onClick={() => updateTheme("#008080", "#f3fef8")}></div>
                <div className="color-circle" style={{ borderColor: "#008080", backgroundColor: "#f6faee" }} onClick={() => updateTheme("#008080", "#f6faee")}></div>
                <div className="color-circle" style={{ borderColor: "#000000", backgroundColor: "#b5c6b5" }} onClick={() => updateTheme("#000000", "#b5c6b5")}></div>
                <div className="color-circle" style={{ borderColor: "#000000", backgroundColor: "#f76694" }} onClick={() => updateTheme("#000000", "#f76694")}></div>
                <div className="color-circle" style={{ borderColor: "#000000", backgroundColor: "#eae2cc" }} onClick={() => updateTheme("#000000", "#eae2cc")}></div>
                <div className="color-circle" style={{ borderColor: "#3f5c8f", backgroundColor: "#ffffff" }} onClick={() => updateTheme("#3f5c8f", "#ffffff")}></div>
                <div className="color-circle" style={{ borderColor: "#663a2c", backgroundColor: "#ffffff" }} onClick={() => updateTheme("#663a2c", "#ffffff")}></div>
                <div className="color-circle" style={{ borderColor: "#20471e", backgroundColor: "#ffffff" }} onClick={() => updateTheme("#20471e", "#ffffff")}></div>
                <div className="color-circle" style={{ borderColor: "#fffad6", backgroundColor: "#008080" }} onClick={() => updateTheme("#fffad6", "#008080")}></div>
                <div className="color-circle" style={{ borderColor: "#f3fef8", backgroundColor: "#008080" }} onClick={() => updateTheme("#f3fef8", "#008080")}></div>
                <div className="color-circle" style={{ borderColor: "#f6faee", backgroundColor: "#008080" }} onClick={() => updateTheme("#f6faee", "#008080")}></div>
                <div className="color-circle" style={{ borderColor: "#b5c6b5", backgroundColor: "#000000" }} onClick={() => updateTheme("#b5c6b5", "#000000")}></div>
                <div className="color-circle" style={{ borderColor: "#f76694", backgroundColor: "#000000" }} onClick={() => updateTheme("#f76694", "#000000")}></div>
                <div className="color-circle" style={{ borderColor: "#eae2cc", backgroundColor: "#000000" }} onClick={() => updateTheme("#eae2cc", "#000000")}></div>
                <div className="color-circle" style={{ borderColor: "#ffffff", backgroundColor: "#3f5c8f" }} onClick={() => updateTheme("#ffffff", "#3f5c8f")}></div>
                <div className="color-circle" style={{ borderColor: "#ffffff", backgroundColor: "#663a2c" }} onClick={() => updateTheme("#ffffff", "#663a2c")}></div>
                <div className="color-circle" style={{ borderColor: "#ffffff", backgroundColor: "#20471e" }} onClick={() => updateTheme("#ffffff", "#20471e")}></div>
            </div>
        </div>
    );
};

export default Footer;