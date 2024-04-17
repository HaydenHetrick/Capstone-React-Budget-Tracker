import React, { useState } from 'react';
import { auth } from '../firebase'; // Import Firebase authentication module

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleAuthAction = async (event) => {
        event.preventDefault();
        try {
            if (isSignUp) {
                await auth.createUserWithEmailAndPassword(email, password);
                // Handle successful sign-up, redirect user or update UI
            } else {
                await auth.signInWithEmailAndPassword(email, password);
                // Handle successful sign-in, redirect user or update UI
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={handleAuthAction}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
            </form>
            <button onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
            </button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Auth;
