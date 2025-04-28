// src/components/RequestPasswordReset.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const RequestPasswordReset = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        try {
            const res = await axios.post('https://server-obl1.onrender.com/api/auth/request-password-reset', { email });
            setMessage(res.data.message);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to send reset email');
        }
    };

    return (
        <div className="auth-container">
            <h2>Reset Password</h2>
            <p>Enter your email to receive a password reset link.</p>
            {message && <p className="success-msg">{message}</p>}
            {error && <p className="error-msg">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send Reset Link</button>
            </form>
            <p>
                <Link to="/login">Back to Log In</Link>
            </p>
        </div>
    );
};

export default RequestPasswordReset;