export default function Services() {
    return (
        <div id="services">
            <div id="stack" className="about-element">
                <h1>My Stack</h1>
                <div id="stack-container">
                    <div id="stack-front">
                        <h2>Front-End</h2>
                        <img src="/assets/html5.png" alt="HTML5" />
                        <img src="/assets/css3.png" alt="CSS3" />
                        <img src="/assets/js.png" alt="JavaScript" />
                        <img src="/assets/react.png" alt="React" />
                    </div>
                    <div id="stack-back">
                        <h2>Back-End</h2>
                        <img src="/assets/nodejs.png" alt="Node.js" />
                        <img src="/assets/express.png" alt="Express" />
                        <img src="/assets/mongodb.png" alt="MongoDB" />
                    </div>
                </div>
            </div>
        </div>
    )
}