import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDYqVP3DhQcJ2E9H0mS--XBA5yt7Ik63co",
  authDomain: "balance-planner-209a1.firebaseapp.com",
  projectId: "balance-planner-209a1",
  storageBucket: "balance-planner-209a1.appspot.com",
  messagingSenderId: "396613752149",
  appId: "1:396613752149:web:ac0ec1a860f4f075308bdc",
  measurementId: "G-H1QRZV4PZ7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleAuthAction = async (event) => {
        event.preventDefault();
        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
                // Handle successful sign-up, redirect user or update UI
            } else {
                await signInWithEmailAndPassword(auth, email, password);
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
