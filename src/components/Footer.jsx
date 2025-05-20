function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Me</h4>
          <p>
            A dedicated Information Technology student with a strong interest in web development, design, and emerging technologies.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/project">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: feloniamargaretteann12@gmail.com</p>
          <p>Phone: 09706608946</p>
          <p>
            <a href="https://www.facebook.com/margaretteann.estanol" target="_blank" rel="noopener noreferrer" className="f_cnt">
              Facebook
            </a>{" "}
            |{" "}
            <a href="https://www.instagram.com/margaretteannf/" target="_blank" rel="noopener noreferrer" className="f_cnt">
              Instagram
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Margarette Ann Felonia. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;