import React, { useState } from "react";

const PasswordGenerator = ({ onGenerate }) => {
    const [length, setLength] = useState(12);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeAlphabets, setIncludeAlphabets] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

    const generatePassword = () => {
        const numbers = "0123456789";
        const alphabets =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        let chars = "";
        if (includeNumbers) chars += numbers;
        if (includeAlphabets) chars += alphabets;
        if (includeSpecialChars) chars += specialChars;

        let password = "";
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        onGenerate(password);
    };

    return (
        <div>
            <h2>Password Generator</h2>
            <div>
                <label>
                    Length:
                    <input
                        style={{
                            marginLeft: "6px",
                            outline: "none",
                            padding: "5px 8px",
                            borderRadius: "5px",
                            border: "1px solid gray",
                        }}
                        type="number"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={includeNumbers}
                        onChange={() => setIncludeNumbers(!includeNumbers)}
                    />
                    Include Numbers
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={includeAlphabets}
                        onChange={() => setIncludeAlphabets(!includeAlphabets)}
                    />
                    Include Alphabets
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={includeSpecialChars}
                        onChange={() =>
                            setIncludeSpecialChars(!includeSpecialChars)
                        }
                    />
                    Include Special Characters
                </label>
            </div>
            <button onClick={generatePassword}>Generate Password</button>
        </div>
    );
};

export default PasswordGenerator;
