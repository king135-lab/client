// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import CreateGame from './components/CreateGame';
import JoinGame from './components/JoinGame';
import SecretCodePage from './components/SecretCodePage';
import GamePageCreator from './components/GamePageCreator';
import GamePageJoiner from './components/GamePageJoiner';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import Signup from './components/Signup';
import AboutPage from './components/AboutPage';
import HowToPlay from './components/HowToPlay';
import WaitingForVerification from './components/WaitingForVerification';
import RequestPasswordReset from './components/RequestPasswordReset';
import ResetPassword from './components/ResetPassword';
import Terms from './components/TermsOfService'
import Privacy from './components/PrivacyPolicy'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<AboutPage />} />
                <Route path="/create-game" element={<CreateGame />} />
                <Route path="/join-game" element={<JoinGame />} />
                <Route path="/:playerName/setsecretcode/:gameId" element={<SecretCodePage />} />
                <Route path="/game/c/:gameId" element={<GamePageCreator />} />
                <Route path="/game/j/:gameId" element={<GamePageJoiner />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/how-to-play" element={<HowToPlay />} />
                <Route path="/verify-wait" element={<WaitingForVerification />} />
                <Route path="/request-password-reset" element={<RequestPasswordReset />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
                <Route path="/Terms" element={<Terms />} />
                <Route path="/Privacy" element={<Privacy />} />

            </Routes>
        </Router>
    );
};

export default App;
