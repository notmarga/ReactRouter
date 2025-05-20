import { useNavigate } from 'react-router-dom';
import me8 from "../components/images/me8.jpeg";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">        
            <img src={me8} alt="Profile" className="circle-image1" /> 
            <div>
                <h1 className="name-container">I’m Margarette Ann Felonia</h1>
                <p className="text-content">
                    A dedicated Information Technology student with a strong interest in web development, design, and emerging technologies.
                </p>
                <button className="about-button" onClick={() => navigate('/about')}>
                    Get to Know Me
                </button>
            </div>
        </div>
    );
}

export default Home;