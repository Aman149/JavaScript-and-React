import { useState } from 'react'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    {!isLoggedIn ? (
        <button onClick={ setIsLoggedIn(true) }>Login</button>
      ) : (
        <h1>Welcome, User!</h1>
      )}
    </>
  );
}

export default App
