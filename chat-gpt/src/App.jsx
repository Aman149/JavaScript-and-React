import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [botIsTyping, setIsTyping] = useState(false);
  const API_ENDPOINT_URL = `https://api.openai.com/v1/chat/completions`;
  const API_KEY = "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"

  const handleMessage = async (text) => {
   
    //setMessages((prevMessages) => [...prevMessages, { content: text, sender: 'user' }]);
   
  //  This line of code updates the `messages` state by adding a new message object to the existing array. Here's a breakdown of its functionality:
    
  //  1. `setMessages`: This is the setter function provided by the `useState` hook to update the value of the `messages` state variable.
    
  //  2. `(prevMessages) => ...`: This part defines an arrow function that takes the previous state value (`prevMessages`) as an argument.
    
  //  3. `[...prevMessages, { content: text, sender: 'user' }]`: The spread operator `...` is used to create a new array. 
  //       It spreads the elements of the previous `messages` array (`prevMessages`) and appends a new message object at the end.
    
  //     - `...prevMessages` spreads the previous messages array, creating a new array with the same elements as `prevMessages`. This is done to avoid directly mutating the previous state.
    
   //    - `{ content: text, sender: 'user' }` creates a new message object with the `content` set as the `text` variable (representing the user's message) and the `sender` set as `'user'`.
    
   // 4. The resulting array, which includes the previous messages and the new message object, is passed as the new state value to `setMessages`. This triggers a re-render of the component with the updated `messages` state.
    
   // In summary, this line of code adds a new message to the `messages` state array by creating a new array that includes the previous messages and a new message object. The `setMessages` function is then used to update the state with the new array, ensuring proper immutability and state management in React.


    
    setMessages((prevMessages) => [...prevMessages, { content: text, sender: 'user' }]);
    console.log(messages)
    setIsTyping(true);

    try {
        const response = await fetch(API_ENDPOINT_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: text}],
            }),
          });

          const data = await response.json();
          console.log(data.choices[0].message.content);
      // Update the messages state with the response from the API
      setMessages((prevMessages) => [...prevMessages, { content: data.choices[0].message.content, sender: 'bot' }]);
      setIsTyping(false);
    } catch (error) {
      console.error('Error fetching bot response:', error);
    }
  };


  return (
    <div className="outermost-container">
      <div className="text-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.content}
          </div>
        ))}
        {botIsTyping && <div className="message bot-color">ChatGPT is typing...</div>}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleMessage(e.target.value);
              e.target.value = '';
            }
          }}
        />
        <button onClick={() => handleMessage(document.querySelector('input').value)}>Send</button>
      </div>
    </div>
  );
};

export default App;