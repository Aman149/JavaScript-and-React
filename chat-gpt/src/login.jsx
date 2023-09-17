import React, { useState, useEffect } from 'react';
import axios from 'axios';

const login = () => {
    const login = true
  return (
    <div>
        {!login?'Please login' : 'Logged in '}
    </div>
  );
};

export default login;