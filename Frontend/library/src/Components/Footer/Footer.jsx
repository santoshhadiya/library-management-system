const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We provide the best book <br />
            management system for readers and libraries.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p id="footer-mail">Email: santoshhadiya333@gmail.com</p>
          <p>Phone: +91 8469271943</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>You Can Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook" id="high-scale"></i></a>
            <a href="#"><i className="fab fa-twitter" id="high-scale"></i></a>
            <a href="#"><i className="fab fa-instagram" id="high-scale"></i></a>
            <a href="#"><i className="fab fa-linkedin" id="high-scale"></i></a>
          </div>
        </div>
      </div>

      <p className="footer-bottom">
        &copy; 2025 libraries.&nbsp; <i className="fa-solid fa-heart"></i>&nbsp; All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;