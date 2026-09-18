import React, { createContext, useContext, useState } from "react";
import { img } from "../data/assets.js";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // Mock login state (temporarily false by default to test logged-out state)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock user profile
  const user = {
    name: "Rishabh Tiwari",
    avatar: img("authimgmobile.jpeg"), // Reusing an existing image as avatar
  };

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
