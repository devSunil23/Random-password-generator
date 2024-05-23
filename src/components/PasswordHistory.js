// src/components/PasswordHistory.js

import React from "react";

const PasswordHistory = ({ passwords }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
            }}>
            <h2>Last 5 Passwords</h2>
            <ul>
                {passwords.map((password, index) => (
                    <li key={index}>{password}</li>
                ))}
            </ul>
        </div>
    );
};

export default PasswordHistory;
