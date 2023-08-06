const Home = () => {
    const setBodyColor = (color) => {
        document.body.style.backgroundColor = color;
    };

    return (
        <div>
            <body>Home page content</body>
            <button onClick={() => setBodyColor('#edffe0')}>Set Color to #edffe0</button>
            <button onClick={() => setBodyColor('#fbfeeb')}>Set Color to #fbfeeb</button>
        </div>
    );
};

export default Home;