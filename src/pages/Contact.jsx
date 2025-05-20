import fb from "../components/images/fb.png"; 
import ig from "../components/images/ig.png"; 
import tiktok from "../components/images/tiktok.png";
import email from "../components/images/email.png"; 



function Contact(){
    return (
        <section id="contact">
            <h2 className="contact_heading">Contact Me</h2>
            <p className="cnct">Feel free to reach out through any of the platforms below:</p>
            <div className="contact_container">
                <div className="contact-links">
                    <a href="https://myaccount.google.com/" className="contact-link">
                        <img src={email} alt="Gmail Logo" />
                    </a>
                    <a href="https://www.facebook.com/margaretteann.estanol" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <img src={fb} alt="Facebook Logo" />
                    </a>
                    <a href="https://www.tiktok.com/@margarette12_" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <img src={tiktok} alt="Tiktok Logo" />
                    </a>
                    <a href="https://www.instagram.com/margaretteannf/" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <img src={ig} alt="Instagram Logo" />
                 
                    </a>
                </div>
            </div>

        </section>
        
    );
};

export default Contact;