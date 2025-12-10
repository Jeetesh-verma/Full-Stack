import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check for stored user session
        const storedUser = localStorage.getItem("newsWaveUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock login logic
        // In a real app, this would call an API

        // Admin check - Hardcoded as per requirement
        if (email === "admin@newswave.com" && password === "admin123") {
            const adminUser = {
                email,
                name: "Admin User",
                role: "admin",
            };
            setUser(adminUser);
            localStorage.setItem("newsWaveUser", JSON.stringify(adminUser));
            return { success: true, role: "admin" };
        }

        // Normal user check - Allow any other valid email/password for demo
        if (email && password) {
            const normalUser = {
                email,
                name: email.split("@")[0],
                role: "user",
            };
            setUser(normalUser);
            localStorage.setItem("newsWaveUser", JSON.stringify(normalUser));
            return { success: true, role: "user" };
        }

        return { success: false, error: "Invalid credentials" };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("newsWaveUser");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
