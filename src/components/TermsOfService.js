import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

const Terms = () => {
    return (
        <div className="legal-container">
            <div className="legal-content">
                <Link to="/" className="legal-home-link">← Home</Link>
                <h1>Terms of Service</h1>
                <p><strong>Effective Date:</strong> 04/28/2025 </p>

                <h2>1. Agreement to Terms</h2>
                <p>By using Number Position Game, you agree to be bound by these Terms and our Privacy Policy.</p>

                <h2>2. Use of Our Services</h2>
                <p>You agree to use our services legally and not disrupt the platform.</p>

                <h2>3. Account Management</h2>
                <p>You are responsible for maintaining the confidentiality of your account information.</p>

                <h2>4. Intellectual Property</h2>
                <p>All content belongs to Number Position Game or its licensors. Unauthorized use is prohibited.</p>

                <h2>5. Third-Party Links</h2>
                <p>We are not responsible for third-party websites linked from our services.</p>

                <h2>6. Termination</h2>
                <p>We may terminate or suspend your account if you violate these Terms.</p>

                <h2>7. Disclaimer</h2>
                <p>Our services are provided "as is" without warranties.</p>

                <h2>8. Limitation of Liability</h2>
                <p>We are not liable for indirect, incidental, or consequential damages.</p>

                <h2>9. Changes to Terms</h2>
                <p>We may update these Terms. Your continued use means acceptance of the new Terms.</p>

                <h2>10. Contact Us</h2>
                <p>Email: <a href="mailto:kingnanfo@gmail.com"> Here</a> <br /></p>
            </div>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} [Your App Name]. All rights reserved.</p>
            </footer>
            <div className="cyber-grid"></div>
        </div>
    );
};

export default Terms;