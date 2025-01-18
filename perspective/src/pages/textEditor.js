import React, { useState } from 'react';
import './textEditor.css';

const TextEditor = () => {
  const [text, setText] = useState('');

  // Save text to localStorage
  const saveText = () => {
    localStorage.setItem('textContent', text); 
    alert('Text saved!');
  };

  // Load text from localStorage
  const loadText = () => {
    const savedText = localStorage.getItem('textContent');
    if (savedText) {
      setText(savedText);
    } else {
      alert('No saved text found!');
    }
  };

  // Clear the text editor
  const clearText = () => {
    setText('');
    alert('Text cleared!');
  };

  // Handle text input
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="editor-container">
      <textarea
        id="editor"
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
        rows="15"
        style={{
          width: '50%',
          height: '90%',
          border: 'none',
          fontSize: '16px',
          resize: 'none',
          padding: '10px',
          boxSizing: 'border-box',
        }}
      ></textarea>
      <br />
      <button onClick={saveText}>Save</button>
      <button onClick={loadText}>Load</button>
      <button onClick={clearText}>Clear</button>
    </div>
  );
};

export default TextEditor;
