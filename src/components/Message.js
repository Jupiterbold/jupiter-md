import React from 'react';

function Message({ message }) {
  return (
    <div className={`message ${message.type}`}>
      {message.type === 'file' ? (
        <img src={message.content} alt="Uploaded file" className="message-media" />
      ) : (
        <p>{message.content}</p>
      )}
    </div>
  );
}

export default Message;
