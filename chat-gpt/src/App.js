import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const [gptMessage, gptMessageUpdate] = useState('');

  const response = async () => {
    try {
      const data = axios.post('chat gpt url', 
      {
        prompt: "hello",
        model: 'text-davinci-003',
        max_tokens: 200
      }, 
      {
        headers: {
            'Authorization': 'Bearer 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',
            'Content-Type': 'application/json'
        }
      }); 

      gptMessage(data.message)

    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
