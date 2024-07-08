// components/GeminiComponent.jsx
import React, { useState } from 'react';

const GeminiComponent = () => {
  const [responseText, setResponseText] = useState('');

  const handleSendMessage = async (prompt) => {
    try {
      const response = await fetch('/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResponseText(data.text); // Assuming the response structure has a `text` field
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Example usage
  handleSendMessage("what is react js");

  return (
    <div>
      <h1>Google Gemini Clone</h1>
      <p>Response: {responseText}</p>
    </div>
  );
};

export default GeminiComponent;
