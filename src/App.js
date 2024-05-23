// src/App.js

import React, { useState, useEffect } from "react";
import PasswordGenerator from "./components/PasswordGenerator";
import PasswordDisplay from "./components/PasswordDisplay";
import PasswordHistory from "./components/PasswordHistory";
import "./App.css";

const App = () => {
    const [password, setPassword] = useState("");
    const [passwordHistory, setPasswordHistory] = useState([]);

    useEffect(() => {
        const storedHistory =
            JSON.parse(localStorage.getItem("passwordHistory")) || [];
        setPasswordHistory(storedHistory);
    }, []);

    const handleGeneratePassword = (newPassword) => {
        setPassword(newPassword);
        const newHistory = [newPassword, ...passwordHistory].slice(0, 5);
        setPasswordHistory(newHistory);
        localStorage.setItem("passwordHistory", JSON.stringify(newHistory));
    };

    return (
        <div className="App">
            <PasswordGenerator onGenerate={handleGeneratePassword} />
            {password && <PasswordDisplay password={password} />}
            {passwordHistory.length > 0 && (
                <PasswordHistory passwords={passwordHistory} />
            )}
        </div>
    );
};

export default App;
