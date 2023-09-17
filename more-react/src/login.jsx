import { useState } from 'react'
import './App.css'

function Login() {

  return (
    <>
        <button onClick={setisLoggedIn(true)} >
          Please Login.
      </button>
    </>
  );
}

export default Login
