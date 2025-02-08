import React, { useState } from 'react';
import axios from 'axios';

function UserProfile({ setUserId }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/register`, { name, email });
      setUserId(data.userId);  // Set the userId after registration
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="user-profile">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default UserProfile;
          
