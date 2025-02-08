import React, { useState, useEffect } from 'react';
import './App.css';
import socket from './utils/socket';
import Chat from './components/Chat';
import FileUpload from './components/FileUpload';
import UserProfile from './components/UserProfile';

function App() {
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null);  // Manage logged-in user's ID

  useEffect(() => {
    socket.on('newMessage', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on('newFile', (fileUrl) => {
      setMessages((prevMessages) => [...prevMessages, { content: fileUrl, type: 'file' }]);
    });

    return () => {
      socket.off('newMessage');
      socket.off('newFile');
    };
  }, []);

  const sendMessage = (message) => {
    socket.emit('sendMessage', message, userId);
  };

  return (
    <div className="App">
      <UserProfile userId={userId} setUserId={setUserId} />
      <Chat messages={messages} sendMessage={sendMessage} />
      <FileUpload />
    </div>
  );
}

export default App;
