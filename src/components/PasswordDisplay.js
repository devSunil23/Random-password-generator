// src/components/PasswordDisplay.js

import React from "react";

const PasswordDisplay = ({ password }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(password).then(() => {
            alert("Password copied to clipboard!");
        });
    };

    return (
        <div>
            <h2>Generated Password</h2>
            <p>{password}</p>
            <button onClick={copyToClipboard}>Copy to Clipboard</button>
        </div>
    );
};

export default PasswordDisplay;
