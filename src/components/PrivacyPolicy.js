import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

const Privacy = () => {
    return (
        <div className="legal-container">
            <div className="legal-content">
                <Link to="/" className="legal-home-link">← Home</Link>
                <h1>Privacy Policy</h1>
                <p><strong>Effective Date:</strong> [Insert Date]</p>

                <h2>1. Introduction</h2>
                <p>Welcome to Number Position Game ("we", "our", "us"). We are committed to protecting your personal information...</p>

                <h2>2. Information We Collect</h2>
                <p>We may collect personal information like your name, email address, usage data, and device information.</p>

                <h2>3. How We Use Your Information</h2>
                <p>We use your data to create accounts, operate services, improve user experience, and ensure platform security.</p>

                <h2>4. Sharing Your Information</h2>
                <p>We do not sell your data. We may share it with trusted service providers or legal authorities if necessary.</p>

                <h2>5. Cookies and Tracking Technologies</h2>
                <p>We may use cookies and similar technologies. You can control cookie settings through your browser.</p>

                <h2>6. Data Security</h2>
                <p>We take appropriate measures to protect your data, but no system is 100% secure.</p>

                <h2>7. Your Rights</h2>
                <p>You may request access, correction, deletion, or portability of your data by contacting us.</p>

                <h2>8. Changes to This Privacy Policy</h2>
                <p>We may update this policy. Check this page periodically for updates.</p>

                <h2>9. Contact Us</h2>
                <p>Email: <a href="mailto:kingnanfo@gmail.com"> Here</a></p>
            </div>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} [Your App Name]. All rights reserved.</p>
            </footer>
            <div className="cyber-grid"></div>
        </div>
    );
};

export default Privacy;