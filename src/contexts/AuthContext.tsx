import React, { createContext, useState, useContext, useEffect } from 'react';
import { User } from '../types/task';
import { setCookie, getCookie, deleteCookie } from '../utils/cookie';

interface AuthContextType {
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check sessionStorage first
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Fallback to cookie
      const cookieUser = getCookie('tdcx_user');
      if (cookieUser) {
        const parsedUser = JSON.parse(cookieUser);
        setUser(parsedUser);
        // Sync back to sessionStorage
        sessionStorage.setItem('user', cookieUser);
      }
    }
  }, []);

  const login = (username: string) => {
    const newUser = { username };
    setUser(newUser);
    sessionStorage.setItem('user', JSON.stringify(newUser));
    setCookie('tdcx_user', JSON.stringify(newUser), 1); // 1 day expiration
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    deleteCookie('tdcx_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
