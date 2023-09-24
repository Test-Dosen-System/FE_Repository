'use client';

import { useState, createRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TextFormattingTool = () => {
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = (tag) => {
        const selectedText = inputValue.substring(inputRef.current.selectionStart, inputRef.current.selectionEnd);
        let newText;

        if (tag === "sub") {
            newText = `<sub>${selectedText}</sub>`;
        } else if (tag === "sup") {
            newText = `<sup>${selectedText}</sup>`;
        } else {
            newText = `<${tag}>${selectedText}</${tag}>`;
        }

        const beforeText = inputValue.substring(0, inputRef.current.selectionStart);
        const afterText = inputValue.substring(inputRef.current.selectionEnd);

        setInputValue(beforeText + newText + afterText);
    };

    const inputRef = createRef();

    return (
        <div>
            <TextField
                inputRef={inputRef}
                multiline
                variant="outlined"
                placeholder="Enter text..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button variant="contained" onClick={() => handleButtonClick("strong")}>
                <strong>B</strong>
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("em")}>
                <em>I</em>
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("u")}>
                <u>U</u>
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("sub")}>
                Sub
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("sup")}>
                Sup
            </Button>
        </div>
    );
};

export default TextFormattingTool;
