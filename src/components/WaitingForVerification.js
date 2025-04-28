// src/components/WaitingForVerification.js
import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

const WaitingForVerification = ({ email }) => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleResend = async () => {
        setMessage('');
        setError('');
        try {
            const res = await axios.post('https://server-obl1.onrender.com/api/auth/resend-verification', { email });
            setMessage(res.data.message);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to resend verification email');
        }
    };

    return (
        <div className="auth-container">
            <h2>Email Verification Required</h2>
            <p>Please check your email ({email}) for a verification link.</p>
            {message && <p className="success-msg">{message}</p>}
            {error && <p className="error-msg">{error}</p>}
            <button onClick={handleResend}>Resend Verification Email</button>
            <p>
                Account Verified? Go to <Link to="/">Home</Link>
            </p>
        </div>

    );
};

export default WaitingForVerification;