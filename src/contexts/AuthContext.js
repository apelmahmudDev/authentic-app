import React, { createContext, useContext } from 'react';
import { useState } from 'react';
import { auth } from '../firebase.js';

const AuthContext = createContext();

// we will can call it from any components and get values
export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	// saved currentUser user like localStorage;
	const [currentUser, setCurrentUser] = useState();

	// sign up user method
	const signup = (email, password) => {
		return auth.createUserWithEmailAndPassword(email, password);
	};

	// login user method
	const login = (email, password) => {
		return auth.signInWithEmailAndPassword(email, password);
	};

	const value = {
		signup,
		login,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
