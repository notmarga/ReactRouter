import me2 from "../components/images/me2.jpeg"; 

function About() {
    return (
        <section id="about">
            <h2 className="about_heading">About Me</h2>
            <div className="about_container">
                <img src={me2} alt="Photo of me" className="circle-image2" /> 
                <p className="description">Hi! I'm Margarette Ann E. Felonia, an IT student who loves learning about technology and innovation. I have basic skills in database management, web development, and designing. I enjoy discovering new things about software development. My dream is to become a tech professional and build websites and games in the future.</p>
            </div>
        </section>
        
    );
};

export default About;